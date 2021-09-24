import React, { Component } from 'react';
import {observer} from 'mobx-react';
import TodoStore from '../store/TodoStore';

class TodoContainer extends Component {
  todoStore = TodoStore
  handleSubmit = (e)=>{
    e.preventDefault();
    if (this.button === "Add") {
      this.todoStore.handleAdd(e.target.date.value, e.target.title.value, e.target.content.value);
    } else if (this.button === "Mod") {
      this.todoStore.handleMod(e.target.date.value, e.target.title.value, e.target.content.value, e.target.index.value);
    } else if (this.button === "Del") {
      this.todoStore.handleDel(e.target.index.value)
    }
  }
  
  render() {
    let button = ""  
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <p>
              <input type="text" name="title" placeholder="Enter the Title" 
              value={this.todoStore.todo.title} onChange={(e)=> this.todoStore.handleChange(e.target.value, "title")}/>
              <input type="date" name="date" id="date" value={this.todoStore.todo.date} onChange={(e)=> this.todoStore.handleChange(e.target.value, "date")}/>
              <input type="hidden" name="index" value={this.todoStore.todo.index}/>
            </p>
            <p>
              <textarea value={this.todoStore.todo.content} name="content" placeholder="Enter the Detail" onChange={(e)=> this.todoStore.handleChange(e.target.value, "content")}/>
            </p>
            <p>
              <button type="submit" onClick={()=>(this.button="Add")}>등록</button>
              <button type="submit" onClick={()=>(this.button="Mod")}>수정</button>
              <button type="submit" onClick={()=>(this.button="Del")}>삭제</button>
            </p>
          </form>
      </div>
    );
  }
}

export default observer(TodoContainer);