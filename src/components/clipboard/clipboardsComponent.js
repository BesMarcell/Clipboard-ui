import React, { Component } from 'react';
import { Grid, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import AddClipboard from './addClipboardComponent';
import ClipboardsList from './clipboardsListComponent';

class clipboards extends Component {
  constructor() {
    super();
    this.state = {
      filterText: ''
    };
  }
  handleSearch(event) {
    this.setState({
      filterText: event.target.value
    });
  }
  render() {
    const types = [{value: 'text', text: 'text'}];
    return (
      <div>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column width={4}>
            <Grid.Row>
              <Grid.Column>
              <Input type="search"
                placeholder="search text"
                value={this.state.filterText}
                onChange={this.handleSearch.bind(this)}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <AddClipboard types={ types }/>
              </Grid.Column>
            </Grid.Row>
            </Grid.Column>
            <Grid.Column width={8}>
              <ClipboardsList filterText={ this.state.filterText } types={ types }/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default connect()(clipboards);
