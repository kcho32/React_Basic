import React, { Component } from 'react';


// state :  component내에서 변경되는 데이터
//          생성자에서 초기화
//          값변경 - setState()
class Clock extends Component {
  constructor(props){
    super(props); //React.Component에 props 전달
    this.state = {
      date : new Date(),

    }
  }

  // mount 후 호출 lifecycle method
  // 1초마다 state의 date 변경


  componentDidMount() {
    this.timerID = setInterval(() => this.setState({ //() => 로 함수 호출 해줘야함
      date:new Date(),
    }), 1000);
  }
//unmout 호출
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    const {name} = this.props;
    return (
      <div>
        <h1>Hello, State Test {name}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;