import React, { Component } from 'react';
import { connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { FETCH_SERVER_INFO_REQUESTED, REQUEST_TEST } from './constants/test';
import MainRouter from './containers/MainRouter';

class App extends Component {

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: REQUEST_TEST,
      text: 'Hello from reducer'
    });
    dispatch({
      type: FETCH_SERVER_INFO_REQUESTED
    });
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
          Information from server: {this.props.serverInfo.api.prefix}
        </p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MainRouter />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    tempText: state.test,
    serverInfo: state.serverInfo
  }
);

export default connect(mapStateToProps)(App);
