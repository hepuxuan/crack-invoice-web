/* globals localStorage */

import createWebSocketConnection from '../web-socket/index'
import * as uuid from 'node-uuid'

export const ADD_INVOICE = 'ADD_INVOICE'

export const UPDATE_CLIENT_ID = 'UPDATE_CLIENT_ID'

export function generateClientId () {
  return (dispatch) => {
    const clientId = localStorage.getItem('clientId') || uuid.v4()
    localStorage.setItem('clientId', clientId)
    dispatch(updateClientId(clientId))
  }
}

function updateClientId (clientId) {
  return {
    type: UPDATE_CLIENT_ID,
    clientId
  }
}

export function addInvoice (invoice) {
  return {
    type: ADD_INVOICE,
    invoice
  }
}

export function initWebSocket () {
  return (dispatch, getState) => {
    const callbacks = {
      onReceiveInvoice: (invoice) => {
        dispatch(addInvoice(invoice))
      }
    }

    createWebSocketConnection(callbacks, getState().clientId)
  }
}
