import React, { Component } from 'react';




class App extends Component {
  
  formatName(user) {
  return user.firstName + " " + user.lastName
}

  

  render() {
    //변수 선언 : 상수 -> const, 변수 -> let
    //변수 참조 : {변수명}
    //{JavaScript 표현식} 
    const name="Cloud MSA"
    const hi="What's up?"
    const user = {
      firstName : "Kyuwon",
      lastName : "Cho"
    }
    return (
      <div>
        <h1>{hi}, { this.formatName(user) }</h1>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//        <h1>Hello React!</h1>
//       </header>
//     </div>
//   );
// }

// export default App;
