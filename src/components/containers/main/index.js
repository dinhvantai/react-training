import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Todos from '../../todo';


export default () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/todo" component={Todos}/>
    </Switch>
)
