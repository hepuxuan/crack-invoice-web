const server = require('http').createServer();
const url = require('url');
const wss = new require('ws').Server({ server: server, path: '/ws' });
const express = require('express');
const app = express();
const port = 3000;
const MESSAGE_TYPE = require('../message-type');
const WebSocketUtils = require('../web-socket-utils');

const mockInvoice = {
    companyName: 'companyName',
    address: 'address1',
    phone: '341123'
};

const webSocketMap = {};

app.use('/', express.static('public'));

wss.on('connection', (webSocket) => {
    const location = url.parse(webSocket.upgradeReq.url, true);
    const clientId = location.query.clientId;
    webSocketMap[clientId] = webSocket;

    webSocket.on('close', function close() {
        console.log(`closing:${clientId}`);
        delete webSocketMap[clientId];
    });

    webSocket.on('message', (_message) => {
        const message = WebSocketUtils.parseWSMessage(_message);
        const webSocketClient = webSocketMap[message.clientId];
        switch(message.type) {
            case MESSAGE_TYPE.LOGIN_SUCCESS:
                if (webSocketClient) {
                    webSocketClient.send(WebSocketUtils.createWSMessage(MESSAGE_TYPE.LOGIN_SUCCESS, true));
                }
                break;
            case MESSAGE_TYPE.SEND_INVOICE:
                if (webSocketClient) {
                    webSocketClient.send(WebSocketUtils.createWSMessage(MESSAGE_TYPE.SEND_INVOICE, message.value));
                }
                break;
        }
    });

    // webSocket.send(WebSocketUtils.createWSMessage(MESSAGE_TYPE.SEND_INVOICE, JSON.stringify(mockInvoice)));
    // webSocket.send(WebSocketUtils.createWSMessage(MESSAGE_TYPE.LOGIN_SUCCESS, true));
});

server.on('request', app);
server.listen(port, () => {
    console.log('Listening on ' + server.address().port);
});
