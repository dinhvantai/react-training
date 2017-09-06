import React from 'react';
import PropTypes from 'prop-types';
import Radio from 'components/extends/radio';
import { SHOW_ALL, SHOW_MARKED, SHOW_UNMARKED } from '../../../constants/TodoFilters';
import './filter.scss';

const Filter = ({onClick}) =>(
    <div className="todo__filter">
        <span className="todo__filter-item">
            <Radio onClick={() => onClick(SHOW_ALL)} label="Show All" checked={true} name="filter" />
        </span>
        <span className="todo__filter-item">
            <Radio onClick={() => onClick(SHOW_MARKED)} label="Show Completed" checked={false} name="filter" />
        </span>
        <span className="todo__filter-item">
            <Radio onClick={() => onClick(SHOW_UNMARKED)} label="Show Active" checked={false} name="filter" />
        </span>
    </div>
)

Filter.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Filter;
