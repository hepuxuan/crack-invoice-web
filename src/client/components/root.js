import React from 'react';
import CINavBar from './shared/nav-bar';

export default function Root(props) {
    const navBarProps = {...props};
    delete navBarProps.children;

    return (
        <div>
            <div className="page-body">
                <CINavBar {...navBarProps}/>
                {props.children}
            </div>
        </div>
    );
}
