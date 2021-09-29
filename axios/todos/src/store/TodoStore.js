// import { makeAutoObservable, makeObservable, observable } from "mobx"
import { makeAutoObservable} from "mobx"
import TodoApi from "../api/TodoApi"
// import generateId from "../IDGenerator"


class TodoStore {

  todo = {id:"", title:""} //observable
  todos = [] //observable
 
  message = "";  //observable
  todoApi = new TodoApi(); //api호출을 위한 객체 

  constructor(){
    makeAutoObservable(this)
  }

  selectTodo (todo){
    this.todo = todo
      
  }

  async todoAdd(){
    const result = await this.todoApi.todoCreate(this.todo.title);
    
    if(result == null){
      this.message = `${this.todo.title} 일정 추가 되지 않았습니다.`
    }
    this.todos = this.todoApi.todoList(); // 추가하면 목록이 바뀌니까 목록 호출
    // this.todos = this.todos.concat({...this.todo, id: generateId(5)})

  }

  setProps = ( name, value)=>{
      this.todo = {...this.todo, [name]:value} // 기존 properties에 name:value만 수정 
  }
  

  async todoRemove() {
   const result =  await this.todoApi.todoDelete(this.todo.id);
    // this.todos = this.todos.filter((element)=> element.id !== this.todo.id)
    if(result == null){
      this.message = `${this.todo.title} 일정 삭제 되지 않았습니다.`
    }
    this.todos = this.todoApi.todoList();
  }

  async todoModify() {
 
    const result = await this.todoApi.todoUpdate(this.todo.id, this.todo.title);
    if(result == null){
      this.message = `${this.todo.title} 일정 수정 되지 않았습니다.`
    }
    this.todos = this.todoApi.todoList();
    // this.todos = this.todos.map((element)=>(element.id === this.todo.id ? this.todo:element))

  }


 // 전체 목록 가져오기 
  async selectAll(){
  const result = await this.todoApi.todoList();
  console.log("====select all====",result)
  if(result == null){
    this.message = "목록가져오기 실패!!";
  }    
  this.todos = result
  console.log(this.todos)  
  }
  
}

export default new TodoStore();