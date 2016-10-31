import React, { Component } from 'react'
import QRCode from 'qrcode.react'
const { func, string } = React.PropTypes

function getQRCodeValue (clientId) {
  return JSON.stringify({
    clientId: clientId
  })
}

export default class QrCode extends Component {
  componentDidMount () {
    this.props.generateClientId()
    this.props.initWebSocket()
  }

  render () {
    return (
      <div>
        <div>
          <h2>您当前的二维码</h2>
          <hr />
          <QRCode size={256} value={getQRCodeValue(this.props.clientId)} />
        </div>
      </div>
    )
  }
}

QrCode.propTypes = {
  generateClientId: func,
  clientId: string,
  initWebSocket: func
}
