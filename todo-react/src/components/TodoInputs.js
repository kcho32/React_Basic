import React, { Component } from 'react';

class Inputs extends Component {
  handleSubmit = (e)=>{
    e.preventDefault();
    if (this.button === "Add") {
      this.props.onAdd(e.target.date.value, e.target.title.value, e.target.content.value,e.target.index.value);
    } else if (this.button === "Mod") {
      this.props.onMod(e.target.date.value, e.target.title.value, e.target.content.value, e.target.index.value);
    } else if (this.button === "Del") {
      this.props.onDel(e.target.index.value)
    }
  }


  
  render() {
    const {todo, onHandleChange} = this.props;
    let button = ""  

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" name="title" placeholder="Enter the Title" 
            value={todo.title} onChange={(e)=> onHandleChange(e.target.value, "title")}/>
            <input type="date" name="date" id="date" value={todo.date} onChange={(e)=> onHandleChange(e.target.value, "date")}/>
            <input type="hidden" name="index" value={todo.index}/>
          </p>
          <p>
            <textarea value={todo.content} name="content" placeholder="Enter the Detail" onChange={(e)=> onHandleChange(e.target.value, "content")}/>
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

export default Inputs;