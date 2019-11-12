import React, { Component } from 'react';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Finish up homework',
        completed: false
      },

      {
        id: 2,
        title: 'Hang out with roommates',
        completed: true
      },

      {
        id: 3,
        title: 'Meeting with client',
        completed: false
      },
    ]
  }

  // Toggle Complete
  toggleComplete = (id) => {
   this.setState({ todos: this.state.todos.map(todo => {
     if(todo.id === id) {
       todo.completed = !todo.completed
     }
     return todo;
   }) });
  }

// Uses spread operator (...)
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id!==id)]})
  }

  render() {
    return (
    <div className="container">
      <h1 className="h1 text-center">Todo List App</h1>
      <Todos todos={this.state.todos} toggleComplete = {this.toggleComplete} deleteTodo = {this.deleteTodo}/> 
    </div>
  );
}
}


export default App;
