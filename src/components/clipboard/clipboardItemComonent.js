import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Modal, Form, Button } from 'semantic-ui-react';
import * as types from './../../constants/clipboard';
import EditClipboard from './modalDialogClipboardComponent';

class ClipboardItemComonent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clipboard: {
        value: '',
        type: ''
      },
      modalOpen: false
    };
  }

  deleteClipboard(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch({
      type: types.CLIPBOARD_DELETE_REQUESTED,
      payload: this.props._id
    });
  }

  handleClose() {
    this.setState({
      value: '',
      type: ''
    });
    this.setState({
      modalOpen: false
    });
  }

  handleOpen() {
    this.setState({ modalOpen: true });
  }

  render() {
    const delModal = (
      <Modal trigger={<Button onClick={this.handleOpen.bind(this)}
        secondary size="small">Delete</Button>}
        open={ this.state.modalOpen }
        onClose={this.handleClose.bind(this)} >
        <Modal.Header>
          Delete Your Clipboard
        </Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete your clipboard?</p>
        </Modal.Content>
        <Modal.Content>
          <Form onSubmit={this.deleteClipboard.bind(this)}>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={this.deleteClipboard.bind(this)}>
            OK
          </Button>
        </Modal.Actions>
      </Modal>
    );

    return (
      <Table.Row>
        <Table.Cell>
          {this.props.value}
        </Table.Cell>
        <Table.Cell>
          {this.props.type}
        </Table.Cell>
        <Table.Cell>
          {this.props.account}
        </Table.Cell>
        <Table.Cell>
        <EditClipboard types={ this.props.types } name="Edit" head="Edit clipboard"
          clipboard={{ id: this.props._id, value: this.props.value, type: this.props.type}}
          action="EDIT" />
        </Table.Cell>
        <Table.Cell>
          { delModal }
        </Table.Cell>
      </Table.Row>
    );
  }
}

const mapStateToProps = state => ({
  accountInfo: state.account.info,
  types: state.clipboard.types
});

export default connect(mapStateToProps)(ClipboardItemComonent);
