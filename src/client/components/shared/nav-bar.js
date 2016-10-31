import React from 'react'
import { Link } from 'react-router'

const CINavBar = (props) => (
  <div>
    <ul className='menu'>
      <li>
        <Link role='button' to='/'>增值税表</Link>
      </li>
      <li>
        <Link role='button' to='/qrCode'>二维码</Link>
      </li>
    </ul>
    <hr />
  </div>
)

export default CINavBar
