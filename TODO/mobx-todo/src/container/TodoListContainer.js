import React, { Component } from 'react';
import TodoStore from '../store/TodoStore';
import {observer} from 'mobx-react';
import TodoItemView from '../view/TodoItemView';

class TodoListContainer extends Component {
  todoStore = TodoStore
  render() {
    const {todoData, selectedTodo} = this.todoStore;
    const todoList = todoData.map(todo=>{
      return (
        <div key={todo.index}><input type="radio" name="index" onClick={() => selectedTodo(todo)} /><TodoItemView todo={todo} /></div>
      )
    })

    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default observer(TodoListContainer);