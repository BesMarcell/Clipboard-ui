import React, { Component } from 'react';
import { Grid, Form, Label, Input, Button, Header, Message } from 'semantic-ui-react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {ACCOUNT_SIGNUP_REQUESTED} from './../../constants/account';

class Signup extends Component {
  constructor (props) {
    super(props);

    this.state = {
      userInfo: {
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
    this.handleFormChange = this.handleFormChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleFormChange(event) {
    event.preventDefault();
    const userInfo = this.state.userInfo;
    userInfo[event.target.name] = event.target.value;

    this.setState({userInfo});
  }

  submitForm(event) {
    const { dispatch } = this.props;
    dispatch({
      type: ACCOUNT_SIGNUP_REQUESTED,
      payload: _.pick(this.state.userInfo, ['email', 'password'])
    })
  }

  render() {
    return (
      <div className="signup signup-container">
        <Grid>
          <Grid.Column width={5}>
            <Grid.Row>
              <Grid.Column>
                <Header>
                  <Label>
                    signup form
                  </Label>
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Form onSubmit={this.submitForm}>
                <Form.Field>
                  <Label>
                    Input email
                  </Label>
                  <Input
                    placeholder="Input email"
                    name="email"
                    onChange={this.handleFormChange}/>
                </Form.Field>
                <Form.Field>
                  <Label>
                    Input password
                  </Label>
                  <Input
                    placeholder="Input password"
                    type="password"
                    name="password"
                    onChange={this.handleFormChange}/>
                </Form.Field>
                <Form.Field>
                  <Label>
                    Confirm password
                  </Label>
                  <Input
                    placeholder="Confirm password"
                    type="password"
                    name="password"
                    onChange={this.handleFormChange}/>
                </Form.Field>
                <Form.Field>
                  <Button
                    onClick={this.submitForm}>
                    Sign up
                  </Button>
                </Form.Field>
              </Form>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default connect()(Signup);
