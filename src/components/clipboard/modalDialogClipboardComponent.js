import React, { Component, PropTypes } from 'react';
import { Button, Modal, Form, Label, Input, Select } from 'semantic-ui-react';
import { connect } from 'react-redux';

import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';
import { joiSchema } from './validation';

class addClipboardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clipboardInfo: {
        value: this.props.clipboard.value || '',
        type: this.props.clipboard.type || '',
        id: this.props.clipboard.id || ''
      },
      errorMessages: {
        value: {
          message: '',
          show: false
        },
        type: {
          message: '',
          show: false
        }
      },
      modalOpen: false,
      isAuthenticated : false
    };
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  validatorTypes = joiSchema;

  getValidatorData() {
    return this.state.clipboardInfo;
  }

  handleFormChange(event) {
    const clipboardInfo = this.state.clipboardInfo;
    clipboardInfo[event.target.name] = event.target.value;
    this.setState({ clipboardInfo });
  }

  handleSelect(event, val) {
    event.preventDefault();
    const clipboardInfo = this.state.clipboardInfo;
    clipboardInfo.type = val.value
    this.setState({ clipboardInfo });
  }

  submitForm(event) {
    event.preventDefault();
    const onValidate = errors => {
      if (errors) {
        this.validateErrorHandler(errors);
      } else {
        const { dispatch } = this.props;
        dispatch({
          type: `CLIPBOARD_${this.props.action}_REQUESTED`,
          payload: this.state.clipboardInfo
        });
        this.setState({ modalOpen: false });
        this.setState({
          clipboardInfo: {
            value: '',
            type: '',
            id: ''
          }
        })
      }
  }
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

  handleClose() {
    this.setState({
      value: '',
      type: ''
    });
    this.setState({modalOpen: false});
  }

  handleOpen() {
    this.setState({
      clipboardInfo: {
              value: this.props.clipboard.value || '',
              type: this.props.clipboard.type || '',
              id: this.props.clipboard.id || ''
            },
      modalOpen: true
    });
  }

  render() {

    let addModal = "";
    if (this.props.account.info) {
      addModal = (
        <Modal trigger={<Button onClick={this.handleOpen.bind(this)} primary>{this.props.name}</Button>}
          open={ this.state.modalOpen }
          onClose={this.handleClose.bind(this)} >
          <Modal.Header>{ this.props.head }</Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.submitForm.bind(this)}>
              <Form.Field>
                <Label>
                  Input text
                </Label>
                <Input
                  placeholder="input text"
                  name="value"
                  value={this.state.clipboardInfo.value}
                  onChange={this.handleFormChange}>
                </Input>
                { this.state.errorMessages.value.show?
                <Label basic color="red" pointing>{ this.state.errorMessages.value.message }</Label> : null}
              </Form.Field>
              <Form.Field>
                <Label>
                  Choose the type
                </Label>
                <Select
                placeholder="select the type"
                name="type"
                defaultValue={this.state.clipboardInfo.type}
                options={this.props.types}
                onChange={this.handleSelect.bind(this)}/>
                { this.state.errorMessages.type.show?
                <Label basic color="red" pointing>{ this.state.errorMessages.type.message }</Label> : null}
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button primary onClick={this.submitForm.bind(this)}
            disabled={!this.state.clipboardInfo.value || !this.state.clipboardInfo.type}>
              OK
            </Button>
          </Modal.Actions>
        </Modal>
      )
    }
    return (
      <div>
        {addModal}
      </div>
    );
  }
}

addClipboardModal.propTypes = {
  account: PropTypes.object.isRequired,
  clipboard: PropTypes.object,
  types: PropTypes.array.isRequired,
  action: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  account: state.account
})

export default connect(mapStateToProps)(validation(strategy)(addClipboardModal));
