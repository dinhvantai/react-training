import React from 'react';
import _findIndex from 'lodash/findIndex';
import _map from 'lodash/map';
import ListTodos from './components/list';
import Filter from './components/filter';

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

            filters: [
                {value: 'ALL', label: 'Show All'},
                {value: 'COMPLETED', label: 'Show Completed'},
                {value: 'DOING', label: 'Show Doing'}
            ],

            filter: 'ALL'
        }

        this.handleKeyDownInput = this.handleKeyDownInput.bind(this);
        this.handleClickItem = this.handleClickItem.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
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
                        <ListTodos 
                            todos={this.filterTodos()} 
                            handleClickItem={this.handleClickItem}
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
                </div>
            </div>
        )
    }
}
