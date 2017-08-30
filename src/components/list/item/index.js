import React from 'react';
import PropTypes from 'prop-types';

// export default class ItemTodo extends React.Component {

//     constructor(props) {
//         super(props);
//     }

//     render () {
//         let todo = this.props.todo;
//         return (
//             <li className={todo.completed ? 'done' : ''} onClick={this.props.handleClickItem}>
//                 <span>{todo.name}</span>
//                 <a>Remove</a>
//             </li>
//         )
//     }
// }

const ItemTodo = ({todo, handleClickItem}) => (
    <li className={todo.completed ? 'done' : ''} onClick={() => handleClickItem}>
        <span>{todo.name}</span>
        <a>Remove</a>
    </li>
)

export default ItemTodo;

