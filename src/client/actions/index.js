import createWebSocketConnection from '../web-socket/index';

export const UPDATE_INVOICE = 'UPDATE_INVOICE';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginSuccess = {
    type: LOGIN_SUCCESS
}

export function updateInvoice(invoice) {
    return {
        type: UPDATE_INVOICE,
        invoice
    }
}

export function initWebSocket() {
    return (dispatch, getState) => {
        const callbacks = {
            onReceiveInvoice: (invoice) => {
                dispatch(updateInvoice(invoice));
            },
            onLoginSuccess: () => {
                dispatch(loginSuccess);
            }
        };

        createWebSocketConnection(callbacks, getState().clientId);
    };
}