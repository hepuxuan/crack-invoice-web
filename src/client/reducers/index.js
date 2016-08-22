import * as actions from '../actions/index';
import * as uuid from 'node-uuid';

const initial_state = {
    invoice: {},
    login: false,
    clientId: uuid.v4()
};

export const reducer = (state = initial_state, action) => {
    switch(action.type) {
        case actions.UPDATE_INVOICE:
            return Object.assign({}, state, {
                invoice: Object.assign({}, state.invoice, action.invoice)
            });
        case actions.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                login: true
            });
        default:
            return state;
    }
};
