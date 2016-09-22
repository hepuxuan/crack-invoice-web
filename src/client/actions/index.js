import createWebSocketConnection from '../web-socket/index'
import { push } from 'react-router-redux'

export const UPDATE_INVOICE = 'UPDATE_INVOICE'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const LOGOUT = 'LOGOUT'

export const UPDATE_CLIENT_ID = 'UPDATE_CLIENT_ID'

export const loginSuccess = {
  type: LOGIN_SUCCESS
}

export const logout = {
  type: LOGOUT
}

export function updateClientId (clientId) {
  return {
    type: UPDATE_CLIENT_ID,
    clientId}
}

export function updateInvoice (invoice) {
  return {
    type: UPDATE_INVOICE,
    invoice}
}

export function initWebSocket () {
  return (dispatch, getState) => {
    const callbacks = {
      onReceiveInvoice: (invoice) => {
        dispatch(updateInvoice(invoice))
      },
      onLoginSuccess: () => {
        dispatch(loginSuccess)
        dispatch(push('/index'))
      }
    }

    createWebSocketConnection(callbacks, getState().app.clientId)
  }
}
