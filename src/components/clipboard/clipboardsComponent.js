import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
// import { browserHistory } from 'react-router';
import AddClipboard from './addClipboardComponent';

class clipboards extends Component {
  render() {
    return (
      <div>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column width={4}>
              <AddClipboard />
            </Grid.Column>
            <Grid.Column width={8}>
              Clipboards2
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default clipboards;
