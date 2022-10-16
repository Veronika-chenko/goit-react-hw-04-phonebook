import PropTypes from 'prop-types';
import { FilterWrap } from './Filter.styled';


export const Filter = ({ value, onChange }) => {
    return (
        <FilterWrap>
            <label htmlFor="filter">
                Find contacts by name</label>
            <input
            id="filter"
            type="text"
            value={value}
            onChange={onChange} />
        </FilterWrap>
    )
}

Filter.prototype = {
    value: PropTypes.string.isRequired,
}