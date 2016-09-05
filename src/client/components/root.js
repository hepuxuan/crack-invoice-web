import React from 'react';
import CINavBar from './shared/nav-bar';

export default function Root(props) {
    const navBarProps = {...props};
    delete navBarProps.children;

    return (
        <div>
            <CINavBar {...navBarProps}/>
            <div className="page-body">
                {props.children}
            </div>
        </div>
    );
}
