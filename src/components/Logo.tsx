import React from 'react';
import Logosvg from '../assets/AirAsia_New_Logo.svg';

const Logo = () => (
    <div className="text-center m-3" style={{borderRadius:"50%"}}>
        <img src={Logosvg} width={100} height={100} />          
    </div>
);

export default Logo;

