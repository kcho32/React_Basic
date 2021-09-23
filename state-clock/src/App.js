import React, { Component } from 'react';
import Clock from './Clock.js'
import Count from './Count.js'
//state : component 내의 변경데이터 사용(cf.props - 부모 component로부터 전달받은 속성 값 read only)
//Clock : state class component - contructor에서 초기화, setState로 값 변경 -> class component의 기능을 fucntion에서 사용가능하도록 지원
//Count : state function component - const [data, setDate ] = useState(초기값),
//                                                             setData로 값변경


class App extends Component {
  render() {
    return (
      <div>
        <Clock name="c1"/>
        <Clock name="c2"/>
        <Count />
      </div>
    );
  }
}

export default App;