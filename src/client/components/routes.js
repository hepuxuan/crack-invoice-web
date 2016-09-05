import React from 'react';
import CINavBar from './shared/nav-bar';
import InvoiceContainer from '../containers/invoice';
import LoginContainer from '../containers/login';
import { Route, Router } from 'react-router';

function Root(props) {
    return (
        <div>
            <CINavBar {...props}/>
            <div className="page-body">
                {props.children}
            </div>
        </div>
    );
}

export default function Routes(props) {
    return (
        <Router history={props.history}>
            <Route path="/" component={Root}>
                <Route path="index" component={InvoiceContainer}/>
                <Route path="login" component={LoginContainer}/>
            </Route>
         </Router>
    );
}
