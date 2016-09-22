import React from 'react'
import CINavBar from './shared/nav-bar'
const { object } = React.PropTypes

export default function Root (props) {
  const navBarProps = {...props}
  delete navBarProps.children

  return (
    <div>
      <div className='page-body'>
        <CINavBar {...navBarProps}/>
        {props.children}
        <div className='blur' />
      </div>
    </div>
  )
}

Root.propTypes = {
  children: object
}
