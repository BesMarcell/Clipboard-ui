import React, { Component } from 'react';
import Sidebar from './../../components/sidebarComponent';
import { Grid } from 'semantic-ui-react';

class root extends Component {
  render() {
    return(
      <div>
        <Sidebar />
        <Grid.Row>
          <Grid.Column>
            { this.props.children }
          </Grid.Column>
        </Grid.Row>
      </div>
    )
  }
}

export default root;
