import { connect } from 'react-redux'
import { updateInvoice } from '../actions/index'

import Invoice from '../components/invoice'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateInvoice: (invoice) => {
      dispatch(updateInvoice(invoice))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    invoices: state.invoices
  }
}

const InvoiceContainer = connect(mapStateToProps, mapDispatchToProps)(Invoice)
export default InvoiceContainer
