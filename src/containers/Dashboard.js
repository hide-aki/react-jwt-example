import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import * as actions from '../actions/auth.actions';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(actions.logoutAndRedirect());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
