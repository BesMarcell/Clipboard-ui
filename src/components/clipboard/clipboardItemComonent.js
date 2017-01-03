import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Modal, Form, Button } from 'semantic-ui-react';
import * as types from './../../constants/clipboard';

class ClipboardItemComonent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }

  deleteClipboard() {
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
    this.setState({modalOpen: false});
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
        <Modal.Header>Are you sure?</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.deleteClipboard.bind(this)}>
            <Button secondary >
              Delete
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    )

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
        <Table.Cell onClick={this.deleteClipboard.bind(this)}>
          {this.props.account === this.props.accountEmail ? delModal : null}
        </Table.Cell>
      </Table.Row>
    );
  }
}

const mapStateToProps = state => ({
  accountEmail: state.account.info.email
})

export default connect(mapStateToProps)(ClipboardItemComonent);