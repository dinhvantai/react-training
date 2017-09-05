import React from 'react';
import TodoList from 'components/todo';

import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

import './app.scss';

// Create store
const store = createStore(rootReducer, {});

export default class App extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <div className="app__content">
                    <div className="app__header"></div>
                    <div className="app__body">
                        <TodoList />
                    </div>
                </div>
            </Provider>
        )
    }
}
