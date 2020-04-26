import { connect } from 'react-redux';
import _ from 'lodash';
import Home from './home.component';
import { setUsersAction } from './home.action';

const mapStateToProps = state => ({
  users: _.get(state, 'home.users', [])
});

const mapDispatchToProps = {
  setUsers: setUsersAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);