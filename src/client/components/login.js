import React, { Component } from 'react'
import QRCode from 'qrcode.react'
import * as uuid from 'node-uuid'
const { func, string } = React.PropTypes

function getQRCodeValue (clientId) {
  return JSON.stringify({
    clientId: clientId
  })
}

export default class Login extends Component {
  componentDidMount () {
    this.props.updateClientId(uuid.v4())
    this.props.initWebSocket()
    this.props.logout()
  }

  render () {
    return (
      <div>
        <div>
          <h2>请扫描二维码登陆</h2>
          <hr/>
          <QRCode size={256} value={getQRCodeValue(this.props.clientId)} />
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  updateClientId: func,
  clientId: string,
  initWebSocket: func,
  logout: func
}
