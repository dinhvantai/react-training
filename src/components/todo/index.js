import React from 'react';
import _findIndex from 'lodash/findIndex';
import _map from 'lodash/map';
import List from './list';
import Filter from './filter';
import Create from './create';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../../actions/TodoActions';

import './todos.scss';

class Index extends React.Component {

    onChangeFilter(filter) {
        this.setState({filter});
    }

    render() {
        const {todos, filter, actions} = this.props;
        console.log(actions);
        return (
            <div className="todos">
                <div className="todos--header">
                    You've got {todos.filter(t => !t.completed).length} things to do
                </div>
                <Filter onClick={this.onChangeFilter} />
                <List todos={todos} onTodoClick={actions.editTodo} onRemoveTodo={actions.deleteTodo} />
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
