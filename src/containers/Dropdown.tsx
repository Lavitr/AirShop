import React from 'react';
import {connect} from 'react-redux';
import {setDestination} from '../actions';

export interface DropdownProps {
    handleDropdownChange: Function;
}

const Dropdown = (props: DropdownProps) => (
    <select 
        defaultValue={'DEFAULT'}
        className="mb-3 p-4 text-secondary dropdown"
        onChange={(e) => {
            props.handleDropdownChange( e.target.value )
        }}>
        <option value="DEFAULT" hidden>Выбрать куда</option>
        <option value="Minsk">Minsk</option>
        <option value="Kiev">Kiev</option>
        <option value="Moskva">Moskva</option>
        <option value="London">London</option>
    </select>
);

const mapDispatchToProps = (dispatch: Function) => ({
    handleDropdownChange: (dist: string) => {
        dispatch(setDestination(dist));
    }
})
    
export default connect(
    null,
    mapDispatchToProps
)(Dropdown);
    