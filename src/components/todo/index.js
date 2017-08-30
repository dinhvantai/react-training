import React from 'react';
import _findIndex from 'lodash/findIndex';
import _map from 'lodash/map';
import {fetchTodoList, createTodo, updateTodo, deleteTodo} from '../../api';

import ListTodos from '../list';
import Filter from '../filter';

export default class Todos extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [],

            filters: [
                {value: 'ALL', label: 'Show All'},
                {value: 'COMPLETED', label: 'Show Completed'},
                {value: 'DOING', label: 'Show Doing'}
            ],

            filter: 'ALL'
        }

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleKeyDownInput = this.handleKeyDownInput.bind(this);
        this.handleToggleItem = this.handleToggleItem.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleKeyDownInput(event) {
        if (event.which === 13) {
            if (!this.inputTodo.value) return;

            this.handleAddTodo(this.inputTodo.value);
            this.inputTodo.value = '';
        }
    }

    componentWillMount() {
        fetchTodoList((response) => {
            this.setState({todos: response.data})
        });
    }

    handleAddTodo(text) {
        const todos = this.state.todos;
        let ids = _map(todos, 'id');
        let max = Math.max(...ids);
        let params = {
            name: text,
            completed: false
        }

        createTodo(params, (response) => {
            todos.push(response.data);
            this.setState({todos});
        });
    }

    handleToggleItem(id) {
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
        deleteTodo(id, (response) => {
            let filter = todos.filter(t => t.id !== id);
            this.setState({todos: filter});
        })
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

    render() {
        return (
            <div className="content">
                <div className="header">
                    Todos
                </div>
                <input 
                    ref={(c) => {this.inputTodo = c;}} 
                    onKeyDown={this.handleKeyDownInput}
                />
                <ListTodos 
                    todos={this.filterTodos()} 
                    handleClickItem={this.handleToggleItem}
                    handleRemoveItem={this.handleRemoveItem}
                />
                <div className="filter">
                    <Filter 
                        filter={this.state.filter}
                        filters={this.state.filters}
                        handleFilter={this.handleFilter}
                    />
                </div>
            </div>
        )
    }
}
