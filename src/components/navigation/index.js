import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <ul className="menu">
        <li className="item"><Link to="/">Home</Link></li>
        <li className="item"><Link to="/todo">Todos</Link></li>
    </ul>
)
