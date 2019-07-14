import React from 'react';
import Checkbox from '../containers/Checkbox';

const ButtonsBlock = () => (
    <div>
        <Checkbox title="Все" transfersNumber={null}/>
        <Checkbox title="Без пересадок" transfersNumber={0}/>
        <Checkbox title="1 пересасдка" transfersNumber={1}/>
        <Checkbox title="2 пересасдка" transfersNumber={2}/>
        <Checkbox title="3 пересасдка" transfersNumber={3}/>
    </div>
);

export default ButtonsBlock;

