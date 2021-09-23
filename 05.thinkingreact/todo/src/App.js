import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import generateId from './components/IDGenerator';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: {
        id: "",
        title: "",
      },
      todos: [
        {
          id: "1",
          title: "Testing"
        },
        {
          id: "2",
          title: "Testing2",
        }
      ]
    }
  }
  //textfield에 입력한 title값 id generator로 생성해서 todo 상태값 변경
  // handleSetTodo = (title) => {
  //   this.setState(
  //     {
  //       todo : {
  //         ...this.state.todo, title: title
  //       }
  //     }
  //   );
  // } //...this.state.todo: state의 todo에서 title만 교체

  handleSetProps = (name, value) => {
    this.setState(
      {
        todo: {...this.state.todo, [name]: value}
      }
    )
  }


  handleAdd = () => {
    const {todo, todos} = this.state;
    this.setState(
      {
        todo: {
          ...todo, id: generateId(5)
        },
        todos: todos.concat(todo)
      }
    );
  }

  handleSelect = (id) => {
    const {todos} = this.state;
    this.setState(
      {
        todo: todos.find((element) => element.id === id)
        
      }
    );
  }

  handleRemove = () => {
    const {todo, todos} = this.state;
    this.setState({
      todos: todos.filter((element) => element.id !== todo.id)
    })
  }

  handleModify = () => {
    const {todo, todos} = this.state;
    this.setState({
      todos: todos.map((element) => (element.id === todo.id ? todo : element))
    })
  }

  render() {
    const {todos, todo} = this.state;
    return (
      <div>
        <TodoInput  onAdd={this.handleAdd}
                    todo={todo}
                    onRemove={this.handleRemove}
                    onModify={this.handleModify}
                    onSetProps={this.handleSetProps}/>
        <TodoList todos={todos} onSelect={this.handleSelect}/>
      </div>
    );
  }
}

export default App;