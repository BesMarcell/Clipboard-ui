import React, { Component } from 'react';
import { connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { FETCH_SERVER_INFO_REQUESTED, REQUEST_TEST } from './constants/test';
import MainRouter from './containers/MainRouter';
import setLocale from './locales';

class App extends Component {

  componentDidMount() {
    setLocale('en');
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
          <h3>Welcome to React!</h3>
        </div>
        {/*
        <p className="App-intro">
          Here are any text: {this.props.tempText}
        </p>
        <p>
          Information from server: {this.props.serverInfo.api.prefix}
        </p>
        */}
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
