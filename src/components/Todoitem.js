import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    
    getStyle = () => {
        return {
            borderBottom:'1px #f7f7f7 solid',
            marginTop: '20px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            color: this.props.todo.completed ? '#cccccc' : '#111111',
        }
    }
    
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
            <h5>
                <input className="form-check-input" type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} /> {' '}
                { title }</h5>
                <button type="button" className="btn btn-danger" onClick={this.props.deleteTodo.bind(this, id)}style={btnStyle}>Delete</button>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired
  }
const btnStyle = {
    float: 'right'
}

export default TodoItem