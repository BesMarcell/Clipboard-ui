import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as types from './../../constants/clipboard';
import ClipboardItemComonent from './clipboardItemComonent';
import { Table } from 'semantic-ui-react';

class clipboardList extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({
      type: types.CLIPBOARDS_RECEIVE_REQUESTED
    });
  }

  render() {
    let clipboardsList = [];
    if (this.props.clipboards) {
      let filteredClipboards = this.props.clipboards.filter(clipboard => {
        return clipboard.value.indexOf(this.props.filterText) !== -1;
      });
      clipboardsList = filteredClipboards.map(clipboard => {
        return (<ClipboardItemComonent
          key={clipboard._id}
          value={clipboard.value}
          type={clipboard.type}
          account={clipboard.account.email}/>);
      });
    }
    return (
      <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { clipboardsList }
        </Table.Body>
      </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clipboards: state.clipboard.clipboards
});

export default connect(mapStateToProps)(clipboardList);
