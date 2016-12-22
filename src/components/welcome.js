import React, { Component } from 'react';
import { Link } from 'react-router';

class Welcome extends Component {
  render() {
    return(
      <div>
        <p>
          Welcome MEN!
        </p>
        Would you wish <Link to="/signup">Sign up</Link> or <Link to="/signin">Sign in</Link>
      </div>
    )
  }
}

export default Welcome;
