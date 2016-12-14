import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect} from 'react-redux';
import App from './App';
import './index.css';
import clipbeardStore from './store/clipbeardStore';

const AppContainer = connect()(App);

ReactDOM.render(
  <Provider store={ clipbeardStore }>
    <AppContainer />
  </ Provider>,
  document.getElementById('root')
);
