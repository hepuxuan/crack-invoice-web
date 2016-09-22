import React from 'react'
import { Link } from 'react-router'
import * as routes from '../routes'
const { bool } = React.PropTypes

function getClassName (path) {
  return window.location.pathname.replace(/\//g, '') === path.replace(/\//g, '') ? 'active' : ''
}

export default function CINavBar (props) {
  if (props.login) {
    return (
      <div>
        <ul className='menu'>
          <li className={getClassName(routes.INDEX_PATH)}>
            <Link role='button' to={routes.INDEX_PATH}> 主页
            </Link>
          </li>
          <li className={getClassName(routes.LOGIN_PATH)}>
            <Link role='button' to={routes.LOGIN_PATH}> 退出
            </Link>
          </li>
        </ul>
        <hr/>
      </div>
    )
  } else {
    return (
      <div>
        <ul className='menu'>
          <li className={getClassName(routes.INDEX_PATH)}>
            <Link role='button' to='/index'> 主页
            </Link>
          </li>
          <li className={getClassName(routes.LOGIN_PATH)}>
            <Link role='button' to='/login'> 登录
            </Link>
          </li>
        </ul>
        <hr/>
      </div>
    )
  }
}

CINavBar.propTypes = {
  login: bool
}
