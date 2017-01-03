import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class ClipboardItemComonent extends Component {
  render() {
    return(
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
      </Table.Cell>
      </Table.Row>
    )
  }
}

export default ClipboardItemComonent;
