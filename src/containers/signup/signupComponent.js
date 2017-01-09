import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Grid, Form, Label, Input, Button, Header, Message } from 'semantic-ui-react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {ACCOUNT_SIGNUP_REQUESTED} from './../../constants/account';
import { Link } from 'react-router';
import validateErrorTranslater from './../../utils/validateErrorTranslater';

import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';
import { joiSchema } from './validation';

class Signup extends Component {

   validatorTypes = joiSchema;

  constructor (props) {
    super(props);

    this.state = {
      userInfo: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      disableFormElements: false,
      errorMessages: {
        email: {
          show: false,
          message: ''
        },
        password: {
          show: false,
          message: ''
        },
        confirmPassword: {
          show: false,
          message: ''
        }
      },
      isWasSendSignupRequestAttempt: false,
      isWasSignupAttempt: false

    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillMount() {
    if (this.props.account.isAuthenticated && this.props.account.info !== '') {
      browserHistory.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.account.isAuthenticated) {
      browserHistory.push('/');
    } else if (nextProps.account.errorMessage) {
      this.setState({disableFormElements: false});
    }
  }

  getValidatorData() {
    return this.state.userInfo;
  }

  handleFormChange(event) {
    event.preventDefault();
    const userInfo = this.state.userInfo;
    userInfo[event.target.name] = event.target.value;

    this.setState({
      userInfo
    });

    if (this.state.isWasSendSignupRequestAttempt) {
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
        type: ACCOUNT_SIGNUP_REQUESTED,
        payload: _.pick(this.state.userInfo, ['email', 'password'])
      });
      this.setState({
        isWasSignupAttempt: true
      })
    }
    this.setState({
      isWasSendSignupRequestAttempt: true
    })
  }
  this.props.validate(onValidate.bind(this));
  }

  validateErrorHandler(errors = {}) {

    Object.keys(this.state.errorMessages).forEach((field) => {
      const errorMessages = this.state.errorMessages;

      if (errors.hasOwnProperty(field)) {
        const message = errors[field][0];
        errorMessages[field].message = validateErrorTranslater(message);
        errorMessages[field].show = true;
      } else {
        errorMessages[field].message = '';
        errorMessages[field].show = false;
      }

      this.setState({
        errorMessages
      });
    });
  }

  showServerErrors () {
    const { account } = this.props;
    if (this.state.isWasSignupAttempt && account.statusCode === 400 && account.errorMessage === 'email exists') {
      return (
        <Message negative>
          <p>
            Account with this email already exists
          </p>
        </Message>)
    }
  }

  render() {
    return (
      <div>
        <Grid verticalAlign="middle" columns={1} centered>
          <Grid.Column width={5}>
            <Grid.Row>
              <Grid.Column>
                <Header as="h3" textAlign="center">
                    SIGN UP FORM
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            {this.showServerErrors()}
              <Form onSubmit={this.submitForm}>
                <Form.Field>
                  <Label>
                    Input email
                  </Label>
                  <Input
                    placeholder="Input email"
                    name="email"
                    onChange={this.handleFormChange}>
                  </Input>
                  {this.state.errorMessages.email.show
                    ? <Label basic color='red' pointing>
                        {this.state.errorMessages.email.message}
                      </Label>
                    : null}
                </Form.Field>
                <Form.Field>
                  <Label>
                    Input password
                  </Label>
                  <Input
                    placeholder="Input password"
                    type="password"
                    name="password"
                    onChange={this.handleFormChange}>
                  </Input>
                  {this.state.errorMessages.password.show
                    ? <Label basic color='red' pointing>
                        {this.state.errorMessages.password.message}
                      </Label>
                    : null}
                </Form.Field>
                <Form.Field>
                  <Label>
                    Confirm password
                  </Label>
                  <Input
                    placeholder="Confirm password"
                    type="password"
                    name="confirmPassword"
                    onChange={this.handleFormChange}>
                  </Input>
                  {this.state.errorMessages.confirmPassword.show
                    ? <Label basic color='red' pointing>
                        {this.state.errorMessages.confirmPassword.message}
                      </Label>
                    : null}
                </Form.Field>
                <Form.Field>
                  <Button
                    color="blue"
                    onClick={this.submitForm}>
                    Sign up
                  </Button>
                </Form.Field>
              </Form>
              <Message>
                Already signed up? <Link to="/signin">sign in</Link>  or go <Link to="/"> Home </Link>
              </Message>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

Signup.propTypes = {
  account: PropTypes.object
}

const mapStateToProps = state => ({
  account: state.account
});

export default connect(mapStateToProps)(validation(strategy)(Signup));
