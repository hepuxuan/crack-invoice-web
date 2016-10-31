import { connect } from 'react-redux'
import InvoiceList from '../components/invoiceList'

const mapStateToProps = (state) => {
  return {
    invoices: state.invoices
  }
}

const InvoiceListContainer = connect(mapStateToProps)(InvoiceList)
export default InvoiceListContainer
