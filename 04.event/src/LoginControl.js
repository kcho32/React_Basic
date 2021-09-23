import React, { Component } from 'react';
import Greeting from './component/Greeting';
import LoginButton from './component/LoginButton';
import LogoutButton from './component/LogoutButton';

class LoginControl extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handlerLoginClick = ()=> {
    this.setState(
      {
        isLoggedIn: true,
      }
    );
  }

  handlerLogoutClick = ()=> {
    this.setState(
      {
        isLoggedIn: false,
      }
    );
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    //let button;
    //조건부 렌더링: 삼항연산자 조건식?(참일대 렌더링):(거짓일때 렌더링)
    //조건만족시에만 렌더링 : && {조건식 && 렌더링}
    // if(isLoggedIn){
    //   button = <LogoutButton logoutHandler={this.handlerLogoutClick}/>
    // }
    // else{
    //   button = <LoginButton loginHandler={this.handlerLoginClick}/>
    // }
      return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {/* {button} */}
        {isLoggedIn 
        ? <LogoutButton logoutHandler={this.handlerLogoutClick}/> 
        : <LoginButton loginHandler={this.handlerLoginClick}/>}
      </div>
    );
  }
}

export default LoginControl;