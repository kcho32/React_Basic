import React, { Component } from 'react';
import CountContainer from './container/CountContainer';

// data class store: react에서 component를 받은 것이 아님 (상속을 받지 않는다)
class App extends Component {
  render() {
    return (
      <div>
        <CountContainer />
      </div>
    );
  }
}

export default App;