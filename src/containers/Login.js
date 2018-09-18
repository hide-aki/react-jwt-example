import { connect } from 'react-redux';
import Login from '../components/Login';
import * as actions from '../actions/auth.actions';

const mapStateToProps = (state, ownProps) => ({
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  login(username, password) {
    dispatch(actions.login(username, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
