import React, { Component } from 'react';
import { Grid, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import AddClipboard from './modalDialogClipboardComponent';
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
    const clipboards = (
      <Grid divided="vertically" >
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
                <AddClipboard types={ this.props.types } name="ADD clipboard" head="Add clipboard"
                  clipboard={{}} action="ADD" />
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={8}>
            <ClipboardsList filterText={ this.state.filterText } types={ this.props.types }/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
    return (
      <div>
        { this.props.account.isAuthenticated ? clipboards : 'Please sign in to see clipboards' }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  account: state.account,
  types: state.clipboard.types
});

export default connect(mapStateToProps)(clipboards);
