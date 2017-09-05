import { ADD_TODO, DELETE_TODO, EDIT_TODO, MARK_TODO, MARK_ALL, CLEAR_MARKED } from '../constants/ActionTypes';

const initialState = [{
    name: 'Use Redux',
    completed: false,
    id: 1
}];

export default function todosReducers(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [{
                id: (state.length === 0) ? 1 : state[0].id + 1,
                completed: false,
                name: action.text
            }, ...state];

        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.id);

        case EDIT_TODO:
            return state.map((todo) => 
                todo.id === action.id ? Object.assign({}, todo, {completed: !todo.completed}) : todo
            );

        case MARK_TODO:
            return state.map((todo) => 
                todo.id === action.id ? Object.assign({}, todo, {completed: !todo.completed}) : todo
            );

        default:
            return state;
    }
}
