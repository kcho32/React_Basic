import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ProductStore from '../store/ProductStore';

class InputContainer extends Component {
  productStore = ProductStore;
  render() {
    return (
      <div>
        <input  type="text" 
                name="category" 
                placeholder="Category"
                value={this.productStore.product.category}
                onChange={(e)=>this.productStore.handleChange(e.target.value, e.target.name)}
                onClick={(e)=>this.productStore.inputClick(e.target.name)}/><br/>

        <input  type="text" 
                name="name" 
                placeholder="Name"
                value={this.productStore.product.name}
                onChange={(e)=>this.productStore.handleChange(e.target.value, e.target.name)}/><br/>

        <input  type="text" 
                name="price" 
                placeholder="Price(number only)"
                value={this.productStore.product.price}
                onChange ={(e)=>this.productStore.handleChange(e.target.value, e.target.name)}
                onClick={(e)=>this.productStore.inputClick(e.target.name)}/><br/>

        <label  htmlFor="stocked">재고: </label>
        <input type="checkbox" 
                name="stocked"
                checked={this.productStore.product.stocked}
                onChange={(e)=>this.productStore.handleChange(e.target.checked, e.target.name)}/><br/>
        
        
        <button onClick={(e)=>this.productStore.handleAdd()}>등록</button>
        <button onClick={(e)=>this.productStore.handleMod()}>수정</button>
        <button onClick={(e)=>this.productStore.handleDel()}>삭제</button>
      </div>
    );
  }
}

export default observer(InputContainer);