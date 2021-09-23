import React, { Component } from 'react';
import Customer from "./Customer";
import Book from "./Book";

class App extends Component {
  render() {
    return (
      <div>
        {/* props : 자식 Component에 전달할 attribute 데이터  */}
        <Customer id="kwdc0302@gmail.com" name="Kyuwon Cho"
          orders={["ISBN 111-234", "ISBN 222-235", "ISBN 333-236"]} />
        <Customer id="kwdc0302@gmail.com" name="Kyuwon Cho"
          orders={["ISBN 111-234", "ISBN 222-235", "ISBN 333-236"]} />
        <Customer id="kwdc0302@gmail.com" name="Kyuwon Cho"
          orders={["ISBN 111-234", "ISBN 222-235", "ISBN 333-236"]} />    
        <Book isbn="111-234" title="초보자를 위한 React" author="David Cho" />
      </div>
    );
  }
}

export default App;