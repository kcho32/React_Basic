import React, { Component } from 'react';

class InputTextarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Please write an essay about yourself."
    };
  }
  
  
  handleChange = (e)=> {
    this.setState({
      value: e.target.value,
    })
  }
  

  handleSubmit = (e)=> {
    alert("Your Essay: "+this.state.value);
    e.preventDefault();
  }

  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
          </label>
          <textarea value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default InputTextarea;