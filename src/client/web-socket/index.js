import { getSocketHostUrl, parseWSMessage } from '../../web-socket-utils';
import * as MESSAGE_TYPE from '../../message-type';

let ws = null;
function getWebSocket(clientId) {
    if (!(ws && ws.readyState === WebSocket.OPEN && ws.readyState === WebSocket.CONNECTING)) {
        ws = new WebSocket(`${getSocketHostUrl()}?clientId=${encodeURIComponent(clientId)}`);
    }
    return ws;
}

export default function createWebSocketConnection(callbacks, clientId) {
    getWebSocket(clientId).onmessage = function (e) {
        const message = parseWSMessage(e.data);
        switch (message.type) {
            case MESSAGE_TYPE.SEND_INVOICE:
                if (typeof callbacks.onReceiveInvoice === 'function') {
                    callbacks.onReceiveInvoice(JSON.parse(message.value));
                }
                break;
            case MESSAGE_TYPE.LOGIN_SUCCESS:
                if (typeof callbacks.onLoginSuccess === 'function') {
                    callbacks.onLoginSuccess();
                }
                break;
        }
    };
}
