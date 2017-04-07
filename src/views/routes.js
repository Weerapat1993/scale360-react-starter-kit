import React from 'react';
import { IndexRoute, Route, Redirect } from 'react-router';
import Layout from './components/Layouts/Layout';
import Home from './pages/home';
import Task from './pages/task';

export default (
  <Route path='/' component={Layout} >
    <IndexRoute component={Home} />
    <Route path='/task' component={Task} />
    <Redirect from='*' to='/' />
  </Route>
);
