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
        completed: false
      },

      {
        id: 3,
        title: 'Meeting with client',
        completed: false
      },
    ]
  }
  render() {
    console.log(this.state.todos)
    return (
    <div className="container">
      <h1 className="h1 text-center">Todo List App</h1>
      <Todos todos={this.state.todos} />
    </div>
  );
}
}


export default App;
