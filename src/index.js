import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect} from 'react-redux';
import './index.css';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

const AppContainer = connect()(Root);

ReactDOM.render(
  <Provider store={ store }>
    <AppContainer />
  </ Provider>,
  document.getElementById('root')
);
