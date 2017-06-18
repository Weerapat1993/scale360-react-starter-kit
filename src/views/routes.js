import React from 'react';
import { IndexRoute, Route, Redirect } from 'react-router';
import BootstrapLayout from './components/BootstrapLayouts/BootstrapLayout';
import Home from './pages/home'
import About from './pages/about'
import Task from './pages/task'
import Form from './pages/form'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Gallery from './pages/gallery'

export default (
  <Route path='/' component={BootstrapLayout} >
    <IndexRoute component={Home} />
    <Route path='/home' component={Home} />
    <Route path='/task' component={Task} />
    <Route path='/about' component={About} />
    <Route path='/form' component={Form} />

    <Route path='/gallery' component={Gallery} />

    <Route path='/login' component={Login} />
    <Route path='/register' component={Register} />
    
    <Redirect from='*' to='/' />
  </Route>
);
