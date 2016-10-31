import React from 'react'
import ReactDOM from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { reducer } from './reducers/index'
import { Route, Router, hashHistory, IndexRoute } from 'react-router'
import RootContainer from './containers/root'
import InvoiceContainer from './containers/invoice'
import QrCodeContainer from './containers/qrCode'
import InvoiceListContainer from './containers/invoiceList'

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware)
)

const APP = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={RootContainer}>
        <IndexRoute component={InvoiceListContainer} />
        <Route path='invoices/:invoiceId' component={InvoiceContainer} />
        <Route path='qrCode' component={QrCodeContainer} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  APP,
  document.getElementById('root')
)
