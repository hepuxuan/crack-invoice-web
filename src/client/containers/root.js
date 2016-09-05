import { connect } from 'react-redux';
import { updateInvoice } from '../actions/index';

import Root from '../components/root';

const mapStateToProps = (state) => {
    return {
        login: state.app.login
    };
};

const RootContainer = connect(mapStateToProps)(Root);
export default RootContainer;
