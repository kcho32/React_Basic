import React, { Component } from 'react';
import TodoInputs from './TodoInputs';
import TodoList from './TodoList';

class TodoCtrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: [],
      id: 0,
      todo: {
        date: "",
        title: "",
        content: "",
        index: 0
      },
    };
  }

  handleChange = (value, object)=>{
    this.setState(
      {
        todo: {
          [object]: value,
          index: this.state.todo.index
        },
      }
    );
  }
  
  
  handleAdd = (date, title, content, index)=>{
    if (date === "" || title === "" || content === "") {
      alert("모든 항목 작성 요망");
      return;
    }
    const id = this.state.id;
    const todo = {
      date: date,
      title: title,
      content: content,
      index: id,
    };
    
    this.setState(
      {
        todoData: this.state.todoData.concat(todo),
        id: id + 1,
      }
    );
  }

  handleDel = (index)=>{
    this.setState(
      {
        todoData: this.state.todoData.filter((todo) => todo.index !== Number(index)),
      }
    )
  }
  

  handleMod = (date, title, content, index)=>{
    const {todoData} = this.state;
    const todo_replace = {
      date: date,
      title: title,
      content: content,
      index: Number(index),
    };
    let indexToChange = null;
    
    this.state.todoData.map(todo => Number(todo.index) === Number(index) 
            ? indexToChange = Number(this.state.todoData.indexOf(todo))
            : todo);         
    todoData[indexToChange] = todo_replace;
    
    
    this.setState(
      {
        todoData: todoData
      }
    ) ;
  
  }

  render() {
    const {todo, todoData} = this.state;
    return (
      <div>
        <TodoInputs todo={todo} onHandleChange={this.handleChange} onAdd={this.handleAdd} onMod={this.handleMod} onDel={this.handleDel}/>
        <TodoList todoData={todoData} onSelect={(selectedTodo)=>this.setState({todo: selectedTodo})}/>
      </div>
    );
  }
}

export default TodoCtrl;