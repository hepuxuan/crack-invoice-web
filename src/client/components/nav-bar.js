import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router'

function CINaviItem(props) {
    return (
        <li>
            <Link role="button" to="/login">{props.children}</Link>
        </li>
    );
}

export default function CINavBar() {
    return (
        <Navbar inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link role="button" to="/">增值税表</Link>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
        </Navbar>
    );
}
