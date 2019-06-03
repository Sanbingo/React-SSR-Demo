# 创建React SSR项目（一）

[TOC]



## 1、使用create-react-app脚手架创建react-ssr工程

如果原先使用**npm install -g create-react-app**全局安装过脚手架，建议先卸载，然后通过**npx create-react-app my-app** 安装，**npx create-react-app —version**可以查看当前脚手架的版本号。如果npm 6+，可以使用 **npm init react-app my-app**

```shell
npx create-react-app react-ssr

cd react-ssr

yarn start
```

## 2、创建一个Home组件，在App组件中渲染

home.js:

```jsx
import React from 'react';

export default props => {
  return <h1>Hello {props.name}</h1>
}

src/app.js:

import React from 'react';
import Home from './home';

export default () => {
  return <Home name="sanbingo" />
}

```

## 3、使用hydrate 代替render，表明在服务端渲染应用程序

src/index.js:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.hydrate(<App />, document.getElementById('root’));
```

## 4、 添加Express服务

```shell
yarn add express

mkdir server && touch server/index.js
```

server/index.js:

```js
import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static('./build'));

app.get('/*', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);

  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong: ', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})
```

在服务端直接引入App组件，Express服务主要做了三件事：

1. 提供静态服务，指定build为静态目录
2. 使用**ReactDOMServer.renderToString**方法把App转化为String字符串输出
3. 读取客户端构建的index.html文件，在其div中注入应用程序的静态内容，然后返回该文件。

## 5、配置webpack和babel

为了是服务端代码可以运行，需要配置webpack和babel来编译转化。

### 1）安装依赖

```shell
yarn add webpack webpack-cli babel-loader @babel/core @babel/preset-env babel-preset-react-app nodemon webpack-node-externals npm-run-all --dev

// or use npm:

npm install webpack webpack-cli babel-loader @babel/core @babel/preset-env babel-preset-react-app nodemon webpack-node-externals npm-run-all --save-dev
```

PS: babel-loader和webpack可能会和Create-react-app内置包有冲突，根据提示解决即可。

![image-20190603222104628](http://ww2.sinaimg.cn/large/006tNc79gy1g3obvq3q8qj316k0u0n4r.jpg)

解决办法：添加.env文件，设置：**SKIP_PREFLIGHT_CHECK=true**

.env:

```
SKIP_PREFLIGHT_CHECK=true
```

### 添加.babelrc配置文件

```json
{
  "presets": ["@babel/preset-env", "react-app"]
}

```

### 添加webpack.server.js配置文件

为server服务端添加webpack.server.js配置文件，使用babel编译server端的代码

webpack.server.js:

```js
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/index.js',
  target: 'node',// 为了不把nodejs内置模块打包进输出文件中，例如： fs net模块等；
  externals: [nodeExternals()],// 为了不把node_modeuls目录下的第三方模块打包进输出文件中
  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader'
    }]
  }
}
```

其中：externals: 防止将某些 import 的包(package)打包到 bundle中，而是在运行时(runtime)再去从外部获取这些扩展依赖。例如，从 CDN 引入 [jQuery](https://jquery.com/)，而不是把它打包。

## 6、npm scripts

```json
"scripts": {
    "dev:build-server": "NODE_ENV=development webpack --config webpack.server.js --mode=development -w",
    "dev:start": "nodemon ./server-build/index.js",
    "dev": "npm-run-all --parallel build dev:*"
    …
}
```

其中：

1. 使用**nodemon**做进程守护，文件改变后重新启动
2. 使用**npm-run-all**命令并行执行node命令，所以，通过npm run dev，可以执行，build（前端构建），build-server（服务端构建）以及 启动server端监听3006端口。

## 7、验证

访问<http://localhost:3006/>

![image-20190603223003383](http://ww1.sinaimg.cn/large/006tNc79gy1g3oc521cgmj30h609edh1.jpg)
