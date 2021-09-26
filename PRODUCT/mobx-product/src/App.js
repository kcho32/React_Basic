import React, { Component } from 'react';
import FilterableProductContainer from './container/FilterableProductContainer';
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <div>
        <FilterableProductContainer />
      </div>
    );
  }
}

export default App;