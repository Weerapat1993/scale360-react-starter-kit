import React from 'react'
import { PrivateRoute, PublicRoute } from './app/Auth'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

// Import All StyleSheet
import './styles/font-awesome/css/font-awesome.css'
import './styles/bootstrap/app.scss'
// import './styles/scale360.scss'

// Import All Components
import Layout from './app/Layout';
import Home from './pages/home';
import Task from './pages/task';
import About from './pages/about';
import Login from './pages/auth/login';
import Register from './pages/auth/register';

export function Routes({ authed }) {
  return (
    <BrowserRouter>
      <Layout authed={authed}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <PublicRoute authed={authed} path='/home' component={Home} />
          <PublicRoute authed={authed} path='/login' component={Login} />
          <PublicRoute authed={authed} path='/register' component={Register} />
          <PrivateRoute authed={authed} path='/task' component={Task} />
          <Route render={() => <h3>No Match</h3>} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
