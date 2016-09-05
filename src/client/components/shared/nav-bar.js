import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router'

export default function CINavBar(props) {
    const loginList = (
        <ul className="nav top-bar menu">
            <li>
                <Link role="button" to="/index">增值税表</Link>
            </li>
            <li>
                <Link role="button" to="/login">重新登录</Link>
            </li>
        </ul> 
    );

    const logoutList = (
        <ul className="nav top-bar menu">
            <li>
                <Link role="button" to="/login">登录</Link>
            </li>
        </ul> 
    );

    if (props.login) {
        return loginList;
    } else {
        return logoutList;
    }
}
