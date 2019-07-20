import React from 'react';
import img from '../assets/loading_spinner.gif'

const Loading = () => (
    <div>
        <img src={img} alt='loading' className="rounded mx-auto d-block" />
    </div> 
);

export default Loading;
