import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const {todo} = this.props;
    return (
        <p>
          {todo.title}<br/>
        </p>
    );
  }
}

export default TodoItem;