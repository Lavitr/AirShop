import React from 'react';

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
        <div className="row m-3 item-style">
            <div className="col-sm-4" style={{borderRadius: '10px 0 0 10px',backgroundColor:'orange',height:'150px'}}>
                <h5>{props.company}: {props.price}
                    {!props.isBucket &&<button onClick={()=>props.onClick()}>buy</button>}
                </h5>
            </div>
            <div className="col-sm-8" style={{borderRadius: '0 10px 10px 0',backgroundColor:'white',height:'150px'}}>
                <p>{props.transf_number} : {props.dept_date}</p>
            </div>
        </div>  
    </div>
);

export default FlightItem;

