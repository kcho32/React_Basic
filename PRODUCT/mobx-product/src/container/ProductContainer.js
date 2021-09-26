import React, { Component } from 'react';
import ProductCategoryView from '../view/ProductCategoryView';
import ProductView from '../view/ProductView';
import {observer} from 'mobx-react';
import ProductStore from '../store/ProductStore';

class ProductContainer extends Component {
  productStore = ProductStore;
  render() {
    // <ProductView/>
    const rows = [];
    const {filterText, inStockOnly, handleClick} = this.productStore;
    const products = this.productStore.products;
    let lastCategory = null;
    products.forEach((product)=>{
      if (product.name.indexOf(filterText) === -1){
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryView category={product.category} key={product.category}/>
        );
      }
      rows.push(
        <ProductView product={product} key={product.name} event={handleClick}/>
      );
      lastCategory = product.category;
    });
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
        
      </div>
    );
  }
}

export default observer(ProductContainer);