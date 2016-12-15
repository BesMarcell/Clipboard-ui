import React, { Component } from 'react';
import { connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Actions from './actions';

class App extends Component {

  componentDidMount() {
    this.props.initTempText();
    this.props.getServerInfo();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!</h2>
        </div>
        <p className="App-intro">
          Here are any text: {this.props.tempText}
        </p>
        <p>
          Information from server: {this.props.serverInfo}
        </p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    tempText: state.test,
    serverInfo: state.serverInfo.api.prefix
  }
);

const mapDispatchToProps = dispatch => (
  {
    initTempText: () => dispatch(Actions.testrequest()),
    getServerInfo: () => dispatch(Actions.serverRequest())
  }
);

const AppConnect = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppConnect;
