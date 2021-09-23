import React, { Component } from 'react';

class Customer extends Component {
  render() {
    // 부모 Component로부터 전달 받은 attribute 값 props 객체로 사용
    const {id, name, orders} = this.props;
    // this.props.id = ~~ 로 해당 값은 변경이 안된다. props는 read-only
    return (
      <div>
        <h2>{id}</h2>
        <p>
          <span>이름 : {name}</span><br/>
          <span>주문수량 : {orders.length}개</span>
        </p>
      </div>
    );
  }
}

export default Customer;