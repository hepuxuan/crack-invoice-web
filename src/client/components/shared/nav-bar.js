import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import * as routes from '../routes';

function getClassName(path) {
    return window.location.pathname.replace(/\//g, '') === path.replace(/\//g, '') ? 'active' : '';
}

export default function CINavBar(props) {
    const loginList = (
        <div>
            <ul className="menu">
                <li className={getClassName(routes.INDEX_PATH)}>
                    <Link role="button" to={routes.INDEX_PATH}>主页</Link>
                </li>
                <li className={getClassName(routes.LOGIN_PATH)}>
                    <Link role="button" to={routes.LOGIN_PATH}>退出</Link>
                </li>
            </ul> 
            <hr/>
        </div>
    );

    const logoutList = (
        <div>
            <ul className="menu">
                <li className={getClassName(routes.INDEX_PATH)}>
                    <Link role="button" to="/index">主页</Link>
                </li>
                <li className={getClassName(routes.LOGIN_PATH)}>
                    <Link role="button" to="/login">登录</Link>
                </li>
            </ul> 
            <hr/>
        </div>
    );

    if (props.login) {
        return loginList;
    } else {
        return logoutList;
    }
}
