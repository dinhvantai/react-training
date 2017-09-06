import React from 'react';
import _findIndex from 'lodash/findIndex';
import _map from 'lodash/map';
import List from './list';
import Filter from './filter';
import Create from './create';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../../actions/TodoActions';
import { SHOW_ALL, SHOW_MARKED, SHOW_UNMARKED } from '../../constants/TodoFilters';

import './todos.scss';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            filter: SHOW_ALL
        }

        this.filterTodos = this.filterTodos.bind(this);
        this.addTypeFilter = this.addTypeFilter.bind(this);
    }

    addTypeFilter(filter) {
        this.setState({filter});
    }

    filterTodos() {
        const {todos, actions} = this.props;
        let filter = this.state.filter;
        if (SHOW_MARKED === filter) {
            return todos.filter(t => t.completed);
        } else if (SHOW_UNMARKED === filter) {
            return todos.filter(t => !t.completed);
        }
        return todos;
    }

    render() {
        const {todos, actions} = this.props;

        return (
            <div className="todos">
                <div className="todos--header">
                    You've got {todos.filter(t => !t.completed).length} things to do
                </div>
                <Filter onClick={this.addTypeFilter} />
                <List todos={this.filterTodos()} onTodoClick={actions.editTodo} onRemoveTodo={actions.deleteTodo} />
                <Create onSaveTodo={actions.addTodo} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todosReducers
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
// export default Index;
