import React from 'react';
import ReactDOM from 'react-dom';

// Import React-Router v3.0.3 & Redux
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Routes from './views/routes'
import configureStore from './core/store'

// Import All StyleSheet
import './views/styles/css/font-awesome.css'
import './views/styles/scale360.scss'

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={browserHistory} routes={Routes} />
  </Provider>
  ,document.getElementById('root')
);
