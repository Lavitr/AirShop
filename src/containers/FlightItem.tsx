import React from 'react';
import Aeroflot from '../assets/Aeroflot_Russian.svg';
import AirBaltic from '../assets/AirBaltic_logo.svg';
import Belavia from '../assets/Belavia_logo.svg';
import EasyJet from '../assets/EasyJet_logo.svg';
import Plain from '../assets/Aero-stub_img.svg';

const getTransferText = (transfNumber: string) => {
    switch(transfNumber){
        case '0':
            return 'пересадок'
        case '1':
            return 'пересадка'
        default:
            return 'пересадки'
    }

}

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
    destination: string;
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
                        : <h4 className="text-secondary">{props.price}</h4>}
                </div>
            </div>
            <div className="col-sm-8 flight-item-right">
                <div className="row mt-3 mb-3 ">
                    <div className="col-sm-4 p-0">
                        <h3 className="text-dark text-center">{props.dept_time}</h3>
                        <h5 className="text-dark text-center">Vitebsk</h5>
                        <p className="text-secondary text-center">{props.dept_date}</p>
                    </div>
                    <div className="col-sm-4 p-0">
                        
                        <p className="text-secondary text-center" >
                            {`${props.transf_number} ${getTransferText(props.transf_number)}`}
                        </p>
                        <img  className="rounded mx-auto d-block" src={Plain} width={40} /> 
                    </div>
                    <div className="col-sm-4 p-0">
                        <h3 className="text-dark text-center">{props.arr_time}</h3>
                        <h5 className="text-dark text-center">{props.destination}</h5>
                        <p className="text-secondary text-center">{props.arr_date}</p>
                    </div>
                </div>
            </div>
        </div>  
    </div>
);

export default FlightItem;

