import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import registerServiceWorker from './registerServiceWorker'
import App from './App'

import reducers from './Reducers'

/**
 * @description Create a history of your choosing (we're using a browser history in this case)
 */
const history = createHistory()

/**
 * @description Build the middleware for intercepting and dispatching navigation actions
 */
const middleware = routerMiddleware(history)

/**
 * @description Add the reducer to your store on the `router` key Also apply our middleware for navigating
 */
const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware)
)

/**
 * @description Wire-up Connected Router for the application.
 */
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
