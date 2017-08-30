import React from 'react';
import _findIndex from 'lodash/findIndex';
import _map from 'lodash/map';
// import ListTodos from './components/list';

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
            ],
            filter: 'ALL'
        }

        this.handleKeyDownInput = this.handleKeyDownInput.bind(this);
        this.handleClickItem = this.handleClickItem.bind(this);
    }

    handleKeyDownInput(event) {
        if (event.which === 13) {
            if (!event.target.value) return;
            const todos = this.state.todos;
            let ids = _map(todos, 'id');
            let max = Math.max(...ids);
            // let max = todos[todos.length - 1].id;

            todos.push({
                id: max+1,
                name: event.target.value,
                completed: false
            });

            this.setState({todos});
            event.target.value = '';
        }
    }

    handleClickItem(id) {
        const todos = this.state.todos;
        let index = _findIndex(todos, {id});
        if (index !== -1) {
            let todo = todos[index];
            todo.completed = !todo.completed;
            todos[index] = todo;
            this.setState({todos});
        }
    }

    handleRemoveItem(id) {
        if (!confirm('Do you want to delete?')) return;

        const todos = this.state.todos;
        let filter = todos.filter(t => t.id !== id);
        this.setState({todos: filter});
    }

    handleFilter(value) {
        this.setState({filter: value});
    }

    filterTodos() {
        const {todos, filter} = this.state;
        switch (filter) {
            case 'ALL':
                return todos;
            case 'COMPLETED':
                return todos.filter(t => t.completed);
            case 'DOING':
                return todos.filter(t => !t.completed);
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
                        <input onKeyDown={this.handleKeyDownInput}/>
                        <ul>
                            {this.filterTodos().map(todo =>
                                <li className={todo.completed ? 'done' : ''} key={todo.id}>
                                    <div className="left">
                                        <input type="checkbox" onChange={() => this.handleClickItem(todo.id)} checked={todo.completed ? 'true' : ''}/>
                                    </div>
                                    <div className="right">
                                        <span onClick={() => this.handleClickItem(todo.id)}>{todo.name}</span>
                                        <a onClick={() => this.handleRemoveItem(todo.id)}>Remove</a>
                                    </div>
                                </li>
                            )}
                        </ul>
                        <div className="filter">
                            <ul>
                                <li className={this.state.filter == 'ALL' ? 'active' : ''} onClick={() => this.handleFilter('ALL')}>
                                    Show All
                                </li>
                                <li className={this.state.filter == 'COMPLETED' ? 'active' : ''} onClick={() => this.handleFilter('COMPLETED')}>
                                    Show Completed
                                </li>
                                <li className={this.state.filter == 'DOING' ? 'active' : ''} onClick={() => this.handleFilter('DOING')}>
                                    Show Doing
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// <ListTodos todos={this.state.todos} handleClickItem={this.handleClickItem} />
