import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';

class App extends Component {

  state = {
    todos : [
      {id: 1, content: 'What do you want to do?'}
    ]
  }

  deleteTodo = (id)=>{

    const todos = this.state.todos.filter(todo=> todo.id !== id)

    this.setState({
      todos
    })

  }

  addTodo = (todo)=>{

    todo.id = Math.random() * 10;

    let todos = [...this.state.todos, todo];

    this.setState({
      todos
    })

  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Manage your day!</h1>
        <AddTodo addTodo = {this.addTodo}/>
        <Todos deleteTodo = {this.deleteTodo} todos = {this.state.todos}/>
      </div>
    );
  }
}

export default App;
