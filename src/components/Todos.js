import React, { Component } from 'react';
import '../App.css';
import TodoItem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {

render() {
  return (
    this.props.todos.map((todo) => (
      // <h3>{ todo.title }</h3>
      <TodoItem key={todo.id} todo={todo} />
    )

    )
  );
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
