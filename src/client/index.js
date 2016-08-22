import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import InvoiceContainer from './containers/invoice';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers/index';
import { Router, Route, Link, browserHistory } from 'react-router';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <div className="container">
            <Router history={browserHistory}>
                <Route path="/" component={InvoiceContainer}/>
            </Router>
        </div>
    </Provider>,
    document.getElementById('root')
);
