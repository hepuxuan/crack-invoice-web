import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router'

export default function CINavBar(props) {
    return (
        <ul className="nav top-bar menu">
            <li>
                <Link role="button" to="/index">增值税表</Link>
            </li>
            <li>
                <Link role="button" to="/login">登录</Link>
            </li>
        </ul> 
    );
}
