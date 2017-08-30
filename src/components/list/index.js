import React from 'react';
import ItemTodo from './item';

export default class ListTodos extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.todos.map(todo =>
                    <ItemTodo 
                        key={todo.id}
                        todo={todo}
                        handleClickItem={this.props.handleClickItem}
                        handleRemoveItem={this.props.handleRemoveItem}
                    />
                )}
            </ul>
        )
    }
}
