import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './app.component';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';

import './global-style.scss';

const store = createStore(reducers);
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
