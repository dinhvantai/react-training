import React from 'react';
import PropTypes from 'prop-types';

export default class ItemTodo extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        let todo = this.props.todo;
        return (
            <li className={todo.completed ? 'done' : ''}>
                <div className="left">
                    <input type="checkbox" onChange={() => this.props.handleClickItem(todo.id)} checked={todo.completed ? 'true' : ''}/>
                </div>
                <div className="right">
                    <span onClick={() => this.props.handleClickItem(todo.id)}>{todo.name}</span>
                    <a onClick={() => this.props.handleRemoveItem(todo.id)}>Remove</a>
                </div>
            </li>
        )
    }
}

