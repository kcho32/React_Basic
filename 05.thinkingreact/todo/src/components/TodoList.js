import React, { Component } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
  render() {
    const {todos, onSelect} = this.props;
    let todoList = todos.map((todo, index) => {
        return (<span onClick={()=>onSelect(todo.id)} key={index}><TodoItem key={todo.id} todo={todo}/></span>)
      } )
    return (
      <div>
        <h3>일정 목록</h3>
          {
            todos.length === 0 ? "Emply" : todoList
          }
      </div>
    );
  }
}

export default TodoList;