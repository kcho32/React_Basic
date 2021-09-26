import React, { Component } from 'react';
import ProductStore from '../store/ProductStore';
import {observer} from 'mobx-react';

class SearchBarContainer extends Component {
  productStore = ProductStore;
  render() {
    return (
      <div>
        <input  type="text" 
                placeholder="Search..."
                value={this.productStore.filterText}
                onChange={(e)=>this.productStore.handleFilterTextChange(e.target.value)} />
        <p> 
          <input  type="checkbox"
                  checked={this.productStore.inStockOnly}
                  onChange={(e)=>this.productStore.handleInStockChange(e.target.checked)}/> &nbsp; Only show Producs in stock
        </p>
      </div>
    );
  }
}

export default observer(SearchBarContainer);