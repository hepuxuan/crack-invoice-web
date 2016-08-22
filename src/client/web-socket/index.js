import { getSocketHostUrl, parseWSMessage } from '../../web-socket-utils';
import * as MESSAGE_TYPE from '../../message-type';


export default function createWebSocketConnection(callbacks, clientId) {
    const webSocket = new WebSocket(`${getSocketHostUrl()}?clientId=${encodeURIComponent(clientId)}`, ['soap', 'xmpp']);

    webSocket.onmessage= function (e) {
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
