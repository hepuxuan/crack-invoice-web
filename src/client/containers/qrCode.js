import { connect } from 'react-redux'
import { initWebSocket, generateClientId } from '../actions/index'

import QrCode from '../components/qrCode'

const mapStateToProps = (state) => {
  return {
    clientId: state.clientId
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initWebSocket: () => {
      dispatch(initWebSocket())
    },
    generateClientId: () => {
      dispatch(generateClientId())
    }
  }
}

const QrCodeContainer = connect(mapStateToProps, mapDispatchToProps)(QrCode)
export default QrCodeContainer
