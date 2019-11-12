import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    render() {
        return (
            <h5>{this.props.todo.title}</h5>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todos: PropTypes.array.isRequired
  }

export default TodoItem