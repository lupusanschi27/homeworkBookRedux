import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import store from './store';
import { App } from './components';

if (module.hot) module.hot.accept()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
