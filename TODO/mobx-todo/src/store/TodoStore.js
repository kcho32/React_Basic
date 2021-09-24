import {makeAutoObservable} from 'mobx';

class TodoStore {
  todoData= [];
  id= 0;
  todo= {
    date: "",
    title: "",
    content: "",
    index: 0
  };

  init = ()=> {
    this.todo= {
      date: "",
      title: "",
      content: "",
      index: 0
    }
  }

  constructor() {
    makeAutoObservable(this);
  }

  // Action
  selectedTodo = (todo) => {
    this.todo = todo;
  }


  handleChange = (value, object)=>{
    this.todo = {
      ...this.todo,
      [object]: value,
    };
  }

  handleAdd = (date, title, content)=>{
    if (date === "" || title === "" || content === "") {
      alert("모든 항목 작성 요망");
      return;
    }
    const todo = {
      date: date,
      title: title,
      content: content,
      index: this.id,
    };
    
    this.todoData = this.todoData.concat(todo);
    this.id ++;
    this.init();
  }

  handleDel = (index)=>{

    this.todoData = this.todoData.filter((todo) => todo.index !== Number(index));
    this.init();
  }
  

  handleMod = (date, title, content, index)=>{
    const todo_replace = {
      date: date,
      title: title,
      content: content,
      index: Number(index),
    };
    let indexToChange = null;
    
    this.todoData.map(todo => Number(todo.index) === Number(index) 
            ? indexToChange = Number(this.todoData.indexOf(todo))
            : todo);         
    this.todoData[indexToChange] = todo_replace;      
    this.init();
  }
}

export default new TodoStore();