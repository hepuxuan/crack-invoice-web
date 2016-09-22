import React from 'react'
import CINavBar from './shared/nav-bar'
import InvoiceContainer from '../containers/invoice'
import LoginContainer from '../containers/login'
import { Route, Router } from 'react-router'
const { object } = React.PropTypes

function Root (props) {
  return (
    <div>
      <CINavBar {...props}/>
      <div className='page-body'>
        {props.children}
      </div>
    </div>
  )
}

Root.propTypes = {
  children: object
}

export const INDEX_PATH = '/index'
export const LOGIN_PATH = '/login'

export default function Routes (props) {
  return (
    <Router history={props.history}>
      <Route path='/' component={Root}>
        <Route path={INDEX_PATH} component={InvoiceContainer} />
        <Route path={LOGIN_PATH} component={LoginContainer} />
      </Route>
    </Router>
  )
}

Routes.propTypes = {
  history: object
}
