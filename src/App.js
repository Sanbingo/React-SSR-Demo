import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Home from './home';
import Todos from './todos';
import Posts from './posts';
import NotFound from './notfound';
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
