import React from 'react'
import ReactDOM from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { reducer } from './reducers/index'
import { Route, Router, hashHistory, IndexRoute } from 'react-router'
import RootContainer from './containers/root'
import InvoiceContainer from './containers/invoice'
import LoginContainer from './containers/login'

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={RootContainer}>
        <IndexRoute component={LoginContainer} />
        <Route path='index' component={InvoiceContainer} />
        <Route path='login' component={LoginContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
