import { connect } from 'react-redux'

import Root from '../components/root'

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

const RootContainer = connect(mapStateToProps)(Root)
export default RootContainer
