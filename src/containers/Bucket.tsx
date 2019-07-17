import React from 'react';
import {connect} from 'react-redux';
import FlightItem from './FlightItem';
import {removeTicket} from '../actions';

interface PropsObject {
    ticket: object [];
    onClick: Function;
}
interface FlightObject{     
    company: string;
    price: string;
    transf_number: string;
    dept_date: string;
    dept_time: string;
    arr_date: string;
    arr_time: string;
    onClick: Function;
}

const Bucket = (props: PropsObject) => (<div className="col-md-12 text-center" >
    { props.ticket.length ? 
        props.ticket.map((flight: FlightObject, index: number) =>(
            <div key={index}>
                <FlightItem
                    isBucket
                    company={flight.company}
                    price={flight.price}
                    transf_number={flight.transf_number}
                    dept_date={flight.dept_date}
                    dept_time={flight.dept_time}
                    arr_date={flight.arr_date}
                    arr_time={flight.arr_time}
                    onClick={()=>{}}
                />
                <button onClick={()=>props.onClick(flight)}className="m-1 float-right">remove from bucket</button>
            </div>)
        )
        :
        <h2 >You have no items</h2>
    }
</div>)

interface StateObject{ ticket: object[] }

const mapStateToProps = (state: StateObject) => ({
    ticket: state.ticket
});

const mapDispatchToProps = (dispatch: Function) => ({
    onClick: (ticket: object) => {
        dispatch(removeTicket(ticket));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bucket);

