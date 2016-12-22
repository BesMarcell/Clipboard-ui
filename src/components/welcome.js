import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as types from './../constants/account';

class Welcome extends Component {
  renderButtons() {
    if (!this.props.account.isAuthenticated) {
      return (
        <div>
          Would you wish <Link to="/signup">Sign up</Link> or <Link to="/signin">Sign in</Link>
        </div>
      );
    }
    return (<Link to="/" onClick={this.logout.bind(this)}>Logout</Link>);
  }

  logout() {
    const { dispatch } = this.props;
    dispatch({
      type: types.ACCOUNT_LOGOUT_REQUESTED
    });
  }
  render() {
    return (
      <div>
        <p>
          Welcome MEN!
        </p>
        {this.renderButtons()}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  account: state.account
});

export default connect(mapStateToProps)(Welcome);
