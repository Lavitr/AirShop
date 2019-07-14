import React from 'react';
import ButtonBlock from './ButtonsBlock';
import CheckBoxBlock from './CheckBoxBlock';
import Dropdown from '../containers/Dropdown';

const Widget = () => (
    <div>
        <Dropdown/>
        <ButtonBlock/>
        <h5 className= "pt-1 pb-1">Количество пересадок</h5>
        <CheckBoxBlock/>
    </div>
);

export default Widget;

