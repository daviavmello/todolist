import React, { Component } from 'react';
import Header from './components/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid'

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Finish up homework',
        completed: false
      },

      {
        id: uuid.v4(),
        title: 'Hang out with roommates',
        completed: true
      },

      {
        id: uuid.v4(),
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

// Add Todo
addTodo = (title) => {
  const newTodo = {
    id: uuid.v4(),
    title: title,
    completed: false
  }
  this.setState( {todos: [...this.state.todos, newTodo] });
}
  render() {
    return (
    <div className="App">
      <Header />
      <div className="container text-left">
      <AddTodo addTodo= {this.addTodo} />
      <Todos todos={this.state.todos} toggleComplete = {this.toggleComplete} deleteTodo = {this.deleteTodo}/> 
      </div>
    </div>
  );
}
}


export default App;
