import React, { Component } from 'react';
import ProductCategoryView from '../view/ProductCategoryView';
import ProductView from '../view/ProductView';

class ProductContainer extends Component {
  render() {
    return (
      <div>
        <ProductCategoryView/>
        <ProductView/>
      </div>
    );
  }
}

export default ProductContainer;