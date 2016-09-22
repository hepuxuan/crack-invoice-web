import React from 'react'
import ReactDOM from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { reducer } from './reducers/index'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import RootContainer from './containers/root'
import InvoiceContainer from './containers/invoice'
import LoginContainer from './containers/login'
import { Route, Router } from 'react-router'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, routerMiddleware(browserHistory))(createStore)

const store = createStoreWithMiddleware(
  combineReducers({
    app: reducer,
    routing: routerReducer
  })
)

window.store = store

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={RootContainer}>
        <Route path='index' component={InvoiceContainer} />
        <Route path='login' component={LoginContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
