import React from 'react'
import { PrivateRoute, PublicRoute } from './app/Auth'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'

// Import All StyleSheet
import './styles/font-awesome/css/font-awesome.css'
import './styles/bootstrap/app.scss'
// import './styles/scale360.scss'

// Import All Components
import Layout from './app/Layout';
// import Error404 from './app/errors/404';
import Home from './pages/home';
import Task from './pages/task';
import About from './pages/about';
import Login from './pages/auth/login';
import Register from './pages/auth/register';

export function Routes({ authed, email }) {
  return (
    <BrowserRouter>
      <Switch>
        <Layout authed={authed} email={email} >
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <PublicRoute authed={authed} path='/login' component={Login} />
          <PublicRoute authed={authed} path='/register' component={Register} />
          <PrivateRoute authed={authed} path='/task' component={Task} />
          <Redirect from='*' to='/' />
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}
