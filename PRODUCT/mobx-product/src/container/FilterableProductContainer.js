import React, { Component } from 'react';
import ProductContainer from './ProductContainer';
import SearchBarContainer from './SearchBarContainer';

class FilterableProductContainer extends Component {
  render() {
    return (
      <div>
        <SearchBarContainer/>
        <ProductContainer/>
      </div>
    );
  }
}

export default FilterableProductContainer;