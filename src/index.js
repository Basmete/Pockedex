import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import css from './main.scss';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import requestMiddleware from './middleware/request';


const middlewares = [requestMiddleware];
const enhancers = [applyMiddleware(...middlewares)];
const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
      // Prevent recomputing reducers for `replaceReducer`
      shouldHotReload: false
    })
    : compose;
  /* eslint-enable */

const store = createStore(rootReducer, composeEnhancers(...enhancers));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));






