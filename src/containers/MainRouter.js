import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';

import app from '../app';
import signin from './signin/signinComponent';
import signup from './signup/signupComponent';

const routes = (
  <div>
    <Route path='/' component={ app } />
    <Route path='/signin' component={ signin } />
    <Route path='/signup' component={ signup } />
  </div>
)

class MainRouter extends Component {
  render() {
    return (
        <Router history={ browserHistory }>
          { routes }
        </Router>
    )
  }
}
export default MainRouter;
