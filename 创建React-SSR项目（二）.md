# 创建React SSR项目（二）

[TOC]



> 前后端使用React Router 4 路由

## 1、安装

```shell
yarn add react-router-dom
```

## 2、在客户端使用浏览器模式BrowserRouter

src/index.js:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));
```

## 3、在服务端使用StaticRouter

server/index.js

```js
…
import { StaticRouter } from 'react-router-dom';

import App from '../src/App';

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static('./build'));

app.get('/*', (req, res) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
…

```

**StaticRouter**提供**location**和**context**属性，context上下文用于存储特定路由的信息，然后以staticContext的形式将信息传递给组件。

## 4、改造App为SPA组件

改造App为SPA组件，创建3个静态路由：/ 、/todos 、/posts，组件内容都为静态信息。

## 5、404 & 重定向

### 前端添加notfound.js：

```js
import React from 'react';

export default ({ staticContext = {} }) => {
  staticContext.status = 404;
  return <h1>Oops, nothing here !</h1>
}
```

### 后端：server/index.js

```js
fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong: ', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    // 404
    if (context.status === 404) {
      res.status(404);
    }
   // 重定向
    if (context.url) {
      return res.redirect(301, context.url);
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
```

当使用重定向组件时，React Router自动将url属性与重定向url添加到上下文对象

![image-20190603225448418](http://ww1.sinaimg.cn/large/006tNc79gy1g3ocut4lmjj30ha0auaar.jpg)

![image-20190603225503402](http://ww4.sinaimg.cn/large/006tNc79gy1g3ocv2comuj30l20bi3z5.jpg)

![image-20190603225517096](http://ww3.sinaimg.cn/large/006tNc79gy1g3ocvaqx09j30j00bomy0.jpg)

![image-20190603225531651](http://ww2.sinaimg.cn/large/006tNc79gy1g3ocvk47inj30iq0aojs5.jpg)

## 6、页面渲染加载初始化数据

当应用程序的某些路由在渲染时需要加载数据的时候

### 安装请求处理包

```shell
yarn add isomorphic-fetch serialize-javascript
```

### 添加静态路由文件：src/routes.js:

```js
import App from './App';
import Home from './Home';
import Posts from './Posts';
import Todos from './Todos';
import NotFound from './NotFound';

import loadData from './helpers/loadData';

const Routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/posts',
    component: Posts,
    loadData: () => loadData('posts')
  },
  {
    path: '/todos',
    component: Todos,
    loadData: () => loadData('todos')
  },
  {
    component: NotFound
  }
];

export default Routes;
```

### 添加请求封装函数：src/helpers/loadData.js:

```js
import 'isomorphic-fetch';

export default resourceType => {
  return fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      // only keep 10 first results
      return data.filter((_, idx) => idx < 10);
    });
};
```

### 改写部分 server/index.js:

在服务器上，我们将使用React Router的matchPath查找当前路由，并查看它是否具有loadData属性。如果有loadData属性，我们调用loadData获取数据，并使用附加到全局窗口对象的变量将其添加到服务器的响应中。

```js
app.get('/*', (req, res) => {
  const currentRoute =
    Routes.find(route => matchPath(req.url, route)) || {};
  let promise;

  if (currentRoute.loadData) {
    promise = currentRoute.loadData();
  } else {
    promise = Promise.resolve(null);
  }

  promise.then(data => {
    // Let's add the data to the context
    const context = { data };

    const app = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );

    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, indexData) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }

      if (context.status === 404) {
        res.status(404);
      }
      if (context.url) {
        return res.redirect(301, context.url);
      }

      return res.send(
        indexData
          .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
          .replace(
            '</body>',
            `<script>window.__ROUTE_DATA__ = ${serialize(data)}</script></body>`
          )
      );
    });
  });
});

```

变量：在控制台输入window.__ROUTE_DATA__

![image-20190603225829787](http://ww3.sinaimg.cn/large/006tNc79gy1g3ocyn8k3cj314v0u047l.jpg)

上面将组件加载的数据添加到上下文对象中，在服务器渲染时，组件通过staticContext访问这些数据

### 组件在加载需要获取数据时

在构造函数和componentDidMount生命周期方法中添加一些逻辑判断

例如：todos.js：

```js
import React from 'react';
import loadData from './helpers/loadData';

class Todos extends React.Component {
  constructor(props) {
    super(props);

    if (props.staticContext && props.staticContext.data) {
      this.state = {
        data: props.staticContext.data
      };
    } else {
      this.state = {
        data: []
      };
    }
  }

  componentDidMount() {
    setTimeout(() => {
      if (window.__ROUTE_DATA__) {
        this.setState({
          data: window.__ROUTE_DATA__
        });
        delete window.__ROUTE_DATA__;
      } else {
        loadData('todos').then(data => {
          this.setState({
            data
          });
        });
      }
    }, 0);
  }

  render() {
    const { data } = this.state;
    return <ul>{data.map(todo => <li key={todo.id}>{todo.title}</li>)}</ul>;
  }
}

export default Todos;

```

![image-20190603230007441](http://ww3.sinaimg.cn/large/006tNc79gy1g3od0cmfrsj30ua0k60vh.jpg)

记住，**componentDidMount**只在浏览器端调用，如果全局对象上设置了__ROUTE_DATA__，意味着在服务端已获取数据，可以直接通过__ROUTE_DATA__获取数据，并删除它。如果没有设置__ROUTE_DATA__，那么浏览器渲染的时候，不需要服务器参与，直接通过loadData获取数据。

另外，setTimeOut设置0毫秒延时是为了确保js下个分时能访问__ROUTE_DATA__属性。

## 7、改进

React Route Config提供两个工具函数使得React-router处理SSR变得更容易。

### matchRoutes

如果需要同时渲染多个路由时，matchPath只能匹配其中一个，无法全部匹配，matchRoutes就是为了解决这个问题。

这意味着可以用匹配路由的Promise填充数组，然后调用Promise.all方法，解析每个匹配路由的loadData Promise。

局部改造： server/index.js:

```js
 import { matchRoutes } from 'react-router-config';

  app.get('/*', (req, res) => {
  const matchingRoutes = matchRoutes(Routes, req.url);

  let promises = [];
  matchingRoutes.forEach( item => {
    if (item.route && item.route.loadData) {
      promises.push(item.route.loadData())
    }
  });

  Promise.all(promises).then(dataArr => {
      const context = { };

      matchingRoutes.forEach((item, index) => {
        if (item.match && item.match.path) {
            const pathname = item.match.path
            context[pathname] = dataArr[index]
        }
      })

      const data = context[req.url] || {}

      const app = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={ data }>
          <App />
        </StaticRouter>
      );

      const indexFile = path.resolve('./build/index.html');
      fs.readFile(indexFile, 'utf8', (err, indexData) => {
        if (err) {
          console.error('Something went wrong:', err);
          return res.status(500).send('Oops, better luck next time!');
        }

        if (context.status === 404) {
          res.status(404);
        }
        if (context.url) {
          return res.redirect(301, context.url);
        }

        return res.send(
          indexData
            .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
            .replace(
              '</body>',
              `<script>window.__ROUTE_DATA__ = ${serialize(data)}</script></body>`
            )
        );
      });
  })
});

```

### renderRoutes

renderRoutes函数输出Routes配置数组，返回Route组件，renderRoutes配合matchRoutes使用

改造后：ser/app.js:

```js
import React from 'react';
import { Switch, NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './routes';

export default () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/todos">Todos</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        {renderRoutes(Routes)}
      </Switch>
    </div>
  )
}

```

## 8、验证

浏览器直接输入访问：<http://localhost:3006/todos>

第一次返回带初始数据，没有XHR请求

![image-20190603230249832](http://ww1.sinaimg.cn/large/006tNc79gy1g3od35u2qnj30vq0qmwim.jpg)

通过路由切换，先切换到home

![Pasted Graphic 7.png](http://ww4.sinaimg.cn/large/006tNc79gy1g3od3egftej30ts0pwq5c.jpg)

然后在切换到todos，此时发生请求消息：前端在页面加载后发生loadData请求消息

![Pasted Graphic 8.png](http://ww4.sinaimg.cn/large/006tNc79gy1g3od3u892yj31120r878l.jpg)

完！



参考文章：

<https://alligator.io/react/server-side-rendering/
