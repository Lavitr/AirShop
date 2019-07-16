import React from 'react';
import img from '../assets/loading_spinner.gif'

const Loading = () => (
    <div className="spinner">
        <img src={img} alt='loading' />
    </div> 
);

export default Loading;
