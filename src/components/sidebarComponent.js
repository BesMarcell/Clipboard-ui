import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as types from './../constants/account';
import { Menu, Header, Button } from 'semantic-ui-react';

class Sidebar extends Component {

  renderButtons() {
    if (this.props.account.info === '') {
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

  clickHandler(event, { name }) {
    this.setState({
      active: name
    });
    if (name === 'signout') {this.logout(); return browserHistory.push('/');}
    browserHistory.push(`/${name}`);
  }
  render() {
    const active = this.state;
    return (
      <div>
      You are: {this.props.account.info ? this.props.account.info.email:null}
      <Menu>
        <Menu.Item
        active={active === ''}
        name=''
        onClick={this.clickHandler.bind(this)}>
          <Header>
            Home
          </Header>
        </Menu.Item>
        <Menu.Item
        active={active === 'clipboards'}
        name="clipboards"
        onClick={this.clickHandler.bind(this)}>
          <Header>
            Clipboards
          </Header>
        </Menu.Item>
        <Menu.Menu position='right'>
          { this.props.account.isAuthenticated !== true ?
            <Menu.Item
            active={active === 'signin'}
            name="signin"
            onClick={this.clickHandler.bind(this)}>
              <Header as="h3">
                <Button primary>SIGN IN</Button>
              </Header>
            </Menu.Item>
          : null}
            { this.props.account.isAuthenticated !== true ?
              <Menu.Item
              active={active === 'signup'}
              name="signup"
              onClick={this.clickHandler.bind(this)}>
                <Header as="h3">
                  <Button primary>SIGN UP</Button>
                </Header>
              </Menu.Item>
            : null}

          {this.props.account.isAuthenticated === true ?
            <Menu.Item
            active={active === 'signout'}
            name="signout"
            onClick={this.clickHandler.bind(this)}>
              <Header as="h3">
                <Button>SIGN OUT</Button>
              </Header>
            </Menu.Item>
          : null}

        </Menu.Menu>
      </Menu>
        <div>
        </div>
        {/*this.renderButtons()*/}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  account: state.account
});

export default connect(mapStateToProps)(Sidebar);
