import React from 'react';
import {connect} from 'react-redux';
import FlightItem from './FlightItem';
import {removeTicket, backToMainScreen} from '../actions';
import {v4} from 'uuid'

interface PropsObject {
    ticket: object [];
    onClick: Function;
    onClickReturn: Function;
    currency: string;
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

const RUB_EXCHANGE = 62.82;
const EUR_EXCHANGE = 1.13;

const Bucket = (props: PropsObject) => (<div className="col-md-12 text-center" >
    { props.ticket.length ? 
        props.ticket.map((flight: FlightObject, index: number) =>{
            let price;
            switch(props.currency){
                case ("RUB"):
                    price = `₽${(Number(flight.price)*RUB_EXCHANGE).toFixed()}`;
                    break;
                case("EUR"):
                    price = `€${(Number(flight.price)*EUR_EXCHANGE).toFixed()}`
                    break;
                default:
                    price = `$${flight.price}`
            }
            return (<div key={v4()}>
                <button 
                    onClick={()=>props.onClick(flight)}
                    className="ml-3 mt-3 float-right btn btn-outline-danger">
                    remove
                </button>
                <FlightItem
                    isBucket
                    company={flight.company}
                    price={price}
                    transf_number={flight.transf_number}
                    dept_date={flight.dept_date}
                    dept_time={flight.dept_time}
                    arr_date={flight.arr_date}
                    arr_time={flight.arr_time}
                    onClick={()=>{}}
                />
            </div>)}
        )
        :
        <h2 >You have no items</h2>
    }
    <button onClick={()=>props.onClickReturn()}
        className="m-1 btn btn-outline-primary btn-lg">
        back to main screen
    </button>
</div>)

interface StateObject{ 
    ticket: object[];
    currency: string;
}

const mapStateToProps = (state: StateObject) => ({
    ticket: state.ticket,
    currency: state.currency
});

const mapDispatchToProps = (dispatch: Function) => ({
    onClick: (ticket: object) => {
        dispatch(removeTicket(ticket));
    },
    onClickReturn: ()=> {
        dispatch(backToMainScreen());
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bucket);

