import React from 'react';
import ButtonBlock from './ButtonsBlock';
import CheckBoxBlock from './CheckBoxBlock';

const Widget = () => (
    <div>
        <ButtonBlock/>
        <h5 className= "pt-1 pb-1">Количество пересадок</h5>
        <CheckBoxBlock/>
    </div>
);

export default Widget;

