import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const {todoData, onSelect} = this.props;
    const todoList = todoData.map(todo=>{
      return (
        <TodoItem key={todo.index} todo={todo} onSelect={onSelect}/>
      )
    })

    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoList;