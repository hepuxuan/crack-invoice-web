export function createWSMessage(type, message) {
    return `${type}||${message}`;
}

export function parseWSMessage(message) {
    const messageArray = message.split('||');
    return {
        type: messageArray[0],
        value: messageArray.length > 1 ? messageArray[1] : null,
        clientId: messageArray.length > 2 ? messageArray[2] : null,
    }
}

export function getSocketHostUrl() {
    return `${window.location.protocol === "https:" ? 'wss' : 'ws'}://${window.location.host}/ws`;
}
