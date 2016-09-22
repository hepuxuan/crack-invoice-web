import { connect } from 'react-redux'
import { initWebSocket, logout, updateClientId } from '../actions/index'

import Login from '../components/login'

const mapStateToProps = (state) => {
  return {
    clientId: state.app.clientId
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initWebSocket: () => {
      dispatch(initWebSocket())
    },
    logout: () => {
      dispatch(logout)
    },
    updateClientId: (clientId) => {
      dispatch(updateClientId(clientId))
    }
  }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)
export default LoginContainer
