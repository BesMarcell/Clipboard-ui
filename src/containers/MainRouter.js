import React, {Component} from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

// import app from '../app';
import signin from './signin/signinComponent';
import signup from './signup/signupComponent';
import welcome from './../components/welcomeComponent';
import clipboards from './../components/clipboard/clipboardsComponent';
import Root from './root/rootComponent';

const routes = (
  <div>
    <Route path="/" component={ Root }>
      <IndexRoute component={ welcome } />
      <Route path="/clipboards" component={ clipboards }>
      </Route>
    </Route>
    <Route path="/signin" component={ signin } />
    <Route path="/signup" component={ signup } />
  </div>
);

class MainRouter extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        { routes }
      </Router>
    );
  }
}
export default MainRouter;
