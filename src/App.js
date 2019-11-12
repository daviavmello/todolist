import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Finish up homework',
        completed: false
      }
    ]
  }
  render() {
    return (
    <div className="App">
      <Todos />
    </div>
  );
}
}


export default App;
