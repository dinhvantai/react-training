import React from 'react';
import './app.scss';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id: 1, name: 'Test todo 1', completed: false},
                {id: 2, name: 'Test todo 2', completed: false},
                {id: 3, name: 'Test todo 3', completed: true},
                {id: 4, name: 'Test todo 4', completed: false},
                {id: 5, name: 'Test todo 5', completed: false},
                {id: 6, name: 'Test todo 6', completed: true},
                {id: 7, name: 'Test todo 7', completed: false}
            ]
        }
    }

    render () {
        return (
            <div id="content">
                <div className="container">
                    <div className="header">
                        Todos
                    </div>
                    <div className="content">
                        <input />
                        <ul>
                            {this.state.todos.map(todo => 
                                <li className={todo.completed ? 'done' : ''}>
                                    <span>{todo.name}</span>
                                    <a>Remove</a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
