import React, { Component } from 'react';

class ProductView extends Component {
  render() {
    const {product, event} = this.props;
    return (
      <tr>
        <td onClick={(e)=>event(product)}>{
        product.stocked ? (product.name) 
        : (<span style={{color:"red"}}>
            {product.name}
            </span>)
        }</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

export default ProductView;