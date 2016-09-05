const server = require('http').createServer();
const url = require('url');
const wss = new require('ws').Server({ server: server, path: '/ws' });
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const WebSocketUtils = require('../web-socket-utils');

const webSocketMap = {};

app.use('/login', express.static('public'));

app.get('*',function (req, res) {
    res.redirect('/login');
});

wss.on('connection', (webSocket) => {
    const location = url.parse(webSocket.upgradeReq.url, true);
    const clientId = location.query.clientId;
    if (clientId) {
        console.log(`connected with client:${clientId}`);
        webSocketMap[clientId] = webSocket;
    }

    webSocket.on('close', function close() {
        if (clientId) {
            console.log(`closing:${clientId}`);
            delete webSocketMap[clientId]; 
        }
    });

    webSocket.on('message', (_message) => {
        const message = WebSocketUtils.parseWSMessage(_message);
        const webSocketClient = message.clientId && webSocketMap[message.clientId];
        if (webSocketClient) {
            webSocketClient.send(WebSocketUtils.createWSMessage(message.type, message.value));
        }
    });
});

server.on('request', app);
server.listen(port, () => {
    console.log('Listening on ' + server.address().port);
});
