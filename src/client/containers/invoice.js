import { connect } from 'react-redux';
import { updateInvoice, initWebSocket } from '../actions/index';

import Invoice from '../components/invoice';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateInvoice: (invoice) => {
            dispatch(updateInvoice(invoice));
        },
        initWebSocket: () => {
            dispatch(initWebSocket());
        }
    };
};

const mapStateToProps = (state) => {
    return {
        invoice: state.invoice,
        clientId: state.clientId,
        login: state.login
    };
};

const InvoiceContainer = connect(mapStateToProps, mapDispatchToProps)(Invoice);
export default InvoiceContainer;
