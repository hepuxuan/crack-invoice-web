import * as actions from '../actions/index'

const initialState = {
  invoice: {},
  login: false,
  clientId: null
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_INVOICE:
      return Object.assign({}, state, {
        invoice: Object.assign({}, state.invoice, action.invoice)
      })
    case actions.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        login: true
      })
    case actions.LOGOUT:
      return {
        login: false,
        invoice: {},
        clientId: state.clientId
      }
    case actions.UPDATE_CLIENT_ID:
      return Object.assign({}, state, {
        clientId: action.clientId
      })
    default:
      return state
  }
}
