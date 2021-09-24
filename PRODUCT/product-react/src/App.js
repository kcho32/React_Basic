import React, { Component } from 'react';
import FilterableProductTable from './Components/FilterableProductTable';
import Products from './Products';

class App extends Component {
  render() {
    return (
      <div>
        <FilterableProductTable products = {Products}/>
      </div>
    );
  }
}

export default App;
