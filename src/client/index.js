import React from 'react'
import ReactDOM from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { reducer } from './reducers/index'
import { Route, Router, hashHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import RootContainer from './containers/root'
import InvoiceContainer from './containers/invoice'
import LoginContainer from './containers/login'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, routerMiddleware(hashHistory))(createStore)

const store = createStoreWithMiddleware(
  combineReducers({
    app: reducer,
    routing: routerReducer
  })
)

window.store = store

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={RootContainer}>
        <IndexRoute component={LoginContainer} />
        <Route path='index' component={InvoiceContainer} />
        <Route path='login' component={LoginContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
