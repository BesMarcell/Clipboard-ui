import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect} from 'react-redux';
import App from './App';
import './index.css';
import Store from './store/Store';

const AppContainer = connect()(App);

ReactDOM.render(
  <Provider store={ Store }>
    <AppContainer />
  </ Provider>,
  document.getElementById('root')
);
