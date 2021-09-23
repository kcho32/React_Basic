import React, { Component } from 'react';

class MultiInput extends Component {
  constructor(props){
    super(props);
    this.state = {
    isGoing: true,
    numberOfGuests: 2,
  };
}

  // handleInputChange = (e)=>{
  //   this.state(
  //     {
  //       isGoing: !e.target.checked,
  //     }
  //   );
  // }


  // handleInputChange2 = (e)=>{
  //   this.state({
  //     numberOfGuests: e.target.value,
  //   })
  
  
  handleInputChange = (e)=>{
    const target = e.target;
    const value = target.type === 'checkbox' 
    ? target.checked
    : target.value;
    const name = target.name;

    this.setState({
      [name] : value,
    });
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
        </form>
      </div>
    );
  }
}

export default MultiInput;