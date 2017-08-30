import React from 'react';
import ItemTodo from './item';

// export default class ListTodos extends React.Component {

//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <ul>
//                 {this.props.todos.map(todo =>
//                     <ItemTodo todo={todo} handleClickItem={this.props.handleClickItem(todo.id)} key={todo.id} />
//                 )}
//             </ul>
//         )
//     }
// }

const TodoList = ({todos, handleClickItem}) => (
    <ul>
        {todos.map(todo =>
            <ItemTodo todo={todo} handleClickItem={handleClickItem(todo.id)} key={todo.id} />
        )}
    </ul>
)

export default TodoList;
