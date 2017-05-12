import React from 'react';
import { IndexRoute, Route, Redirect } from 'react-router';
import Layout from './components/Layouts/Layout';
import Home from './pages/home'
import About from './pages/about'
import Task from './pages/task'
import Form from './pages/form'

export default (
  <Route path='/' component={Layout} >
    <IndexRoute component={Home} />
    <Route path='/home' component={Home} />
    <Route path='/task' component={Task} />
    <Route path='/about' component={About} />
    <Route path='/form' component={Form} />
    <Redirect from='*' to='/' />
  </Route>
);
