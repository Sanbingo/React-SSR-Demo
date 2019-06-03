import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import serialize from 'serialize-javascript';
import { StaticRouter, matchPath } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';

import App from '../src/App';
import Routes from '../src/routes';

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static('./build'));

/*
// 渲染静态内容
app.get('/*', (req, res) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong: ', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    if (context.status === 404) {
      res.status(404);
    }

    if (context.url) {
      return res.redirect(301, context.url);
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});
*/

/*
// 渲染时加载初始化数据
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
*/

// 改进，使用macthRoutes代替matchPath
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

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})
