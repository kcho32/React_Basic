import {makeAutoObservable, observable, action, computed} from "mobx"

// 애플리케이션 상태를 모델링 -> state데이터를 관리할 클래스
class Counter{
  counter = 0; // observable state 


  constructor() {
    makeAutoObservable(this) // mobx6 observable 생성 -> 자동으로 counter를 observable 객체로
  }
  // 위에는 자동적으로 적용해주는 것
  // constructor(counter){  
  //   makeAutoObservable(this, {
  //     counter: observable,
  //     getCounter: computed,
  //     increase: action,
  //     decrease: action,
  //     reset: action,
  //   })
  //   this.counter = counter;
  // }

  // compute
  get getCounter(){
    return this.counter;
  }
  
  //밑에처럼 함수형 변수를 만들면 bind하지 않아도 됨
  increase = ()=>{
    this.counter++;
  }

  decrease = ()=> {
    this.counter--;
  }

  reset = () => {
    this.counter = 0
  }

}
// 객체를 component를 상속 받지 않았기 때문에 관리를 받지 않는다?
export default new Counter();