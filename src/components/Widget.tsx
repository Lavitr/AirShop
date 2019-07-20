import React from 'react';
import ButtonBlock from './ButtonsBlock';
import CheckBoxBlock from './CheckBoxBlock';
import Dropdown from '../containers/Dropdown';

const Widget = () => (
    <div 
        className="col-md-3 text-center p-3 mb-4 align-items-center justify-content-center widget"
    >
        <Dropdown/>
        <ButtonBlock/>
        <h5 className= "pt-1 pb-1 text-secondary text-center">Количество пересадок</h5>
        <CheckBoxBlock/>
    </div>
);

export default Widget;

