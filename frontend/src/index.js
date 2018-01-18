import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import registerServiceWorker from './registerServiceWorker'
import App from './App'

import rootReducer from './Reducers'

/**
 * @description Create a history of your choosing (we're using a browser history in this case)
 */
const history = createHistory()

/**
 * @description Build the middleware for intercepting and dispatching navigation actions
 */
const routerMiddlewareHistory = routerMiddleware(history)

/**
 * @description Apply all midllewares in to an array
 */
const middleware = [routerMiddlewareHistory, logger, thunk];

/**
 * @description Add the reducer to your store on the `router` key Also apply our middleware for navigating
 */
const store = createStore(
    combineReducers({
        ...rootReducer,
        router: routerReducer
    }),
    applyMiddleware(...middleware)
)

/**
 * @description Wire-up Connected Router for the application.
 */
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path='/' component={App} />
            <Route path='/:categoryId/posts' component={App} />
          </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
