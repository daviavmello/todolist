import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About'
// import uuid from 'uuid'
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then (res => this.setState( {todos: res.data }))
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id!==id)]}))
  }

// Add Todo
addTodo = (title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title,
    completed: false
  }).then(res => this.setState( {todos: [...this.state.todos, res.data] }));
}
  render() {
    return (
      <Router>
    <div className="App">
      <Header />
      <Route exact path='/' render={props => (
        <React.Fragment>
           <div className="container text-left">
      <AddTodo addTodo= {this.addTodo} />
      <Todos todos={this.state.todos} toggleComplete = {this.toggleComplete} deleteTodo = {this.deleteTodo}/> 
      </div>
        </React.Fragment>
      )} />
      <Route path="/about" component={About} />
     
    </div>
    </Router>
  );
}
}


export default App;
