import React, { Component } from 'react';
import {observer} from 'mobx-react';
import Counter from '../store/Counter';

// const CounterView = observer(
class CountContainer extends Component {
  counterStore = Counter;
  render() {
    return (
      <div>
        <h2> Counter: {this.counterStore.getCounter}</h2>
        <button onClick={()=>this.counterStore.increase()}>INC(+)</button>
        <button onClick={()=>this.counterStore.decrease()}>DEC(-)</button>
        <button onClick={()=>this.counterStore.reset()}>RES(o)</button>
      </div>
    );
  }
}
// )

// export default CounterView;
export default observer(CountContainer); // observer 객체: observabel state변경시 rerendering을 제공해주는 관찰자로 등록하겠다