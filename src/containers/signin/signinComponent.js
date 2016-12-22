import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { Grid, Form, Input, Label, Button, Header, Message } from 'semantic-ui-react';
import * as types from './../../constants/account';

import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';
import { joiSchema } from './validation';

class Signin extends Component {
constructor (props) {
  super(props);
  this.state = {
    userInfo: {
      email: '',
      password: ''
    },
    errorMessages: {
      email: {
        message: '',
        show: false
      },
      password: {
        message: '',
        show: false
      }
    },
    isWasSigninAttempt: false,
    isWasSendSigninRequestAttempt: false
  };
  this.handleFormChange = this.handleFormChange.bind(this);
  this.submitForm = this.submitForm.bind(this);
}

validatorTypes = joiSchema;

getValidatorData() {
  return this.state.userInfo;
}

componentWillMount() {
  if (this.props.account.isAuthenticated) {
    browserHistory.push('/');
  }
}

componentWillReceiveProps(nextProps) {
  if (nextProps.account.isAuthenticated) {
    browserHistory.push('/')
  }
}

handleFormChange(event) {
  const userInfo = this.state.userInfo;
  userInfo[event.target.name] = event.target.value;
  this.setState({
    userInfo
  });
  if (this.state.isWasSendSigninRequestAttempt) {
    this.props.validate(this.validateErrorHandler.bind(this));
  }
}

submitForm(event) {
  event.preventDefault();
  const onValidate = errors => {
    if (errors) {
      this.validateErrorHandler(errors);
    } else {
      const { dispatch } = this.props;
      dispatch({
        type: types.ACCOUNT_SIGNIN_REQUESTED,
        payload: this.state.userInfo
      });
      this.setState({
        isWasSigninAttempt: true
      })
    };
    this.setState({
      isWasSendSigninRequestAttempt :true
    })
  };
  this.props.validate(onValidate.bind(this))
}

validateErrorHandler(errors = {}) {
  Object.keys(this.state.errorMessages).forEach(field => {
    const errorMessages = this.state.errorMessages;
    if (errors.hasOwnProperty(field)) {
      const message = errors[field][0];
      errorMessages[field].message = message;
      errorMessages[field].show = true;
    } else {
      errorMessages[field].message = '';
      errorMessages[field].show = false;
    }
    this.setState({errorMessages});
  })
}

showServerErrors() {
  const {account} = this.props;
  if (account.statusCode===401 && !account.isAuthenticated && this.state.isWasSigninAttempt)
    return (
      <Message negative>
        <p>
          Incorrect email and password
        </p>
      </Message>
    )
}

renderConnectError() {
  const { account } = this.props;

  if (account.statusCode === 502) {
    return (
      <Message negative>
        <Message.Header>
          Problems with api server
        </Message.Header>
        <p>
          Can nott connect to the api server.<br />
          Try later.
        </p>
      </Message>
    );
  }
}

  render () {
    return (
      <div>
        <Grid verticalAlign="middle" columns={1} centered>
          <Grid.Column width={5}>
            <Grid.Row>
              <Grid.Column>
                <Header as="h3" textAlign="center">
                  SIGN IN FORM
                  </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                {this.showServerErrors()}
                {this.renderConnectError()}
                <Form onSubmit={this.submitForm} >
                  <Form.Field>
                    <Label>
                      Input email
                    </Label>
                    <Input
                    placeholder="input email"
                    name="email"
                    value={this.state.userInfo.email}
                    onChange={this.handleFormChange}>
                    </Input>
                    { this.state.errorMessages.email.show ?
                    <Label basic color="red" pointing>{ this.state.errorMessages.email.message }</Label>:null}
                  </Form.Field>
                  <Form.Field>
                    <Label>
                      Input password
                    </Label>
                    <Input
                    placeholder="Input password"
                    type="password"
                    name="password"
                    value={this.state.userInfo.password}
                    onChange={this.handleFormChange}>
                    </Input>
                    { this.state.errorMessages.password.show?
                    <Label basic color="red" pointing>{ this.state.errorMessages.password.message }</Label> : null}
                  </Form.Field>
                  <Button onClick={this.submitForm} color="blue">
                    Sign in
                  </Button>
                </Form>
              </Grid.Column>
              <Message attached='bottom'>
                Not registered yet? <Link to="/signup"> sign up </Link> or go <Link to="/"> Home </Link>
              </Message>
            </Grid.Row>
          </Grid.Column>
        </Grid>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  account: state.account
})

export default connect(mapStateToProps)(validation(strategy)(Signin));
