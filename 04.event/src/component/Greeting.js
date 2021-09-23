import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    const {isLoggedIn} = this.props
    
    if(isLoggedIn) {
      return (
        <div>
          <h1>Welcome back!</h1>
          {/* <UserGreeting /> */}
        </div>
      );
    }else {
      return (
        <div>
          <h1>Welcome newbies!</h1>
          {/* <GuestGreeting /> */}
        </div>
      );
    }
  }
}

export default Greeting;