import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const {todo, onSelect} = this.props;
    return (
        <p>
          <input type="radio" name="index" onClick={()=>onSelect(todo)}/>
          {todo.date}<br/>
          {todo.title}<br/>
          {todo.content}<br/>
        </p>
    );
  }
}

export default TodoItem;