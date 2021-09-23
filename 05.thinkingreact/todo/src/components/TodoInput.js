import React, { Component } from 'react';

class Todoinput extends Component {
  render() {
    const {todo, onAdd, onRemove, onModify, onSetProps} = this.props;
    return (
      <div>
        Title: <input type="text" 
                      name="title"
                      value={todo.title} 
                      placeholer="일정 입력"
                      onChange={(e)=>onSetProps(e.target.name, e.target.value)}/><br/>
        <button onClick={()=>onAdd()}>ADD</button> &nbsp;&nbsp; 
        <button onClick={()=>onRemove()}>DEL</button> &nbsp;&nbsp;
        <button onClick={()=>onModify()}>MOD</button>
      </div>
    );
  }
}

export default Todoinput;