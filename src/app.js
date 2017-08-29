import React from 'react';
import './app.scss';

export default class App extends React.Component {
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
                            <li>
                                <span>asdfsdf</span>
                                <a>Remove</a>
                            </li>
                            <li className="done">
                                <span>asdfsdf</span>
                                <a>Remove</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
