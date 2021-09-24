import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const {todo} = this.props;
    return (
        <p>
          {todo.date}<br/>
          {todo.title}<br/>
          {todo.content}<br/>
        </p>
    );
  }
}

export default TodoItem;