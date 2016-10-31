import * as actions from '../actions/index'

const initialState = {
  invoices: {},
  clientId: null
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_INVOICE: {
      const invoiceId = new Date().getTime()
      const newInvoics = { ...state.invoices }
      newInvoics[invoiceId] = action.invoice
      return {
        ...state,
        invoices: newInvoics
      }
    }
    case actions.UPDATE_CLIENT_ID:
      return {
        ...state,
        clientId: action.clientId
      }
    default:
      return state
  }
}
