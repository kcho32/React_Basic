import React, { Component } from 'react';
import LoginControl from './LoginControl';
import Toggle from './Toggle'

class App extends Component {
  render() {
    return (
      <div>
        <Toggle/>
        <LoginControl/>
      </div>
    );
  }
}

export default App;
<Toggle/>