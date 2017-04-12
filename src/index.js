import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './views/app/App'

import configureStore from './core/store'

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>
  ,document.getElementById('root')
);
