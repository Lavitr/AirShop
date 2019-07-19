import React from 'react';
import Aeroflot from '../assets/Aeroflot.svg';
import AirBaltic from '../assets/AirBaltic_logo.svg';
import Belavia from '../assets/Belavia_logo.svg';
import EasyJet from '../assets/EasyJet_logo.svg';

const getLogo = (company: string) => {
    switch(company){
        case('AirBaltic'):
            return AirBaltic;
        case('Aeroflot'):
            return Aeroflot;
        case('BelAvia'): 
            return Belavia;
        case ('Wizair'):
            return EasyJet;
    }
}

interface FligjtsObject{
    company: string;
    price: string;
    transf_number: string;
    dept_date: string;
    dept_time: string;
    arr_date: string;
    arr_time: string;
    onClick: Function;
    isBucket: boolean;
}

const FlightItem = (props: FligjtsObject) => (
    <div className="item">
        <div className="row mt-0 mb-4 ml-3 mr-3 item-style">
            <div className="col-sm-4 flight-item-left">
                <div className="row align-items-center justify-content-center" style={{height:'80px'}}>
                    <img  className="" src={getLogo(props.company)}  width={100} height={50} /> 
                </div>
                <div className="row align-items-center justify-content-center" style={{height:'60px'}}>
                    {!props.isBucket ?
                        <button  
                            className="mb-2 btn btn-warning pl-4 pr-4" 
                            onClick={()=>props.onClick()}
                            style={{color:'white'}}>
                             Купить<br/>за {props.price}
                        </button>
                        : <h4>{props.price}</h4>}
                </div>
            </div>
            <div className="col-sm-8 flight-item-right">
                <p>{props.transf_number} : {props.dept_date}</p>
            </div>
        </div>  
    </div>
);

export default FlightItem;

