import React from 'react';

import Navigation from './components/navigation';
import Main from './components/containers/main';

import './app.scss';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div id="content">
                <div className="container">
                    <Navigation />
                    <Main />
                </div>
            </div>
        )
    }
}
