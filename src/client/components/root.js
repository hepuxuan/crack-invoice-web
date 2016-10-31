import React from 'react'
import {CINavBar} from './shared'
const { object } = React.PropTypes

export default function Root (props) {
  const {children, ...navBarProps} = props

  return (
    <div>
      <div className='page-body'>
        <CINavBar {...navBarProps} />
        {children}
        <div className='blur' />
      </div>
    </div>
  )
}

Root.propTypes = {
  children: object
}
