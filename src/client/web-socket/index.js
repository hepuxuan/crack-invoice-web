/* global WebSocket */

import { getSocketHostUrl, parseWSMessage } from '../../web-socket-utils'
import * as MESSAGE_TYPE from '../../message-type'

let ws = null

export default function createWebSocketConnection (callbacks, clientId) {
  if (ws) {
    // kill current connection
    ws.onclose = () => {
    }
    ws.close()
  }

  (function createWs () {
    ws = new WebSocket(`${getSocketHostUrl()}?clientId=${encodeURIComponent(clientId)}`)
    ws.onmessage = (e) => {
      const message = parseWSMessage(e.data)
      switch (message.type) {
        case MESSAGE_TYPE.SEND_INVOICE:
          if (typeof callbacks.onReceiveInvoice === 'function') {
            callbacks.onReceiveInvoice(JSON.parse(message.value))
          }
          break
      }
    }
    ws.onclose = () => {
      createWs()
    }
  }())
}
