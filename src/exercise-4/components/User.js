import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router';
import { render } from 'react-dom';

class User extends Component{
  
  checkParamsIsValid = () => {
    let user = this.props.match.params.user;
    let n = Number(user)
    if (!!isNaN(n)) {
      return false;
    }
    return true;
  }

  componentDidMount() {
    if (!this.checkParamsIsValid()) {
      this.props.history.push('/not-exist-path');
    }
  }

 render() {
  return (
    <div>
      User profile page.
    </div>
  );
 }
}

export default withRouter(User);