import React from 'react';

export default class Filter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let propsFilter = this.props.filter;
        return (
            <ul>
                {this.props.filters.map(filter =>
                    <li 
                        key={filter.value} 
                        className={filter.value == propsFilter ? 'active' : ''} 
                        onClick={() => this.props.handleFilter(filter.value)}
                    >
                        {filter.label}
                    </li>
                )}
            </ul>
        )
    }
}
