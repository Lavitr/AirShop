import React from 'react';
import {connect} from 'react-redux';
import FlightItem from './FlightItem';
import Loading from '../components/Loading';

interface PropsObject {
    loading: boolean;
    flights: object [];
    maxTransf: number[];
}
interface FlightObject{
    company: string;
    price: string;
    transf_number: string;
    dept_date: string;
    dept_time: string;
    arr_date: string;
    arr_time: string;
}

const MainContent = (props: PropsObject) => ( props.loading ?
    <Loading/> :
    (<div className="col-md-9" >
        { props.flights &&
      props.flights.map((flight: FlightObject, index: number) =>{
          console.log('oo',props.maxTransf )
          if(props.maxTransf.includes(Number(flight.transf_number))
              || !props.maxTransf.length 
              || props.maxTransf[0] < 0 ){
              return (<
                  FlightItem
                  key={index}
                  company={flight.company}
                  price={flight.price}
                  transf_number={flight.transf_number}
                  dept_date={flight.dept_date}
                  dept_time={flight.dept_time}
                  arr_date={flight.arr_date}
                  arr_time={flight.arr_time}
              />)
          }
      })
        }
    </div>)
)

interface StateObject{ loading: boolean; flights: any[];transferNumberArray: number[] }

const mapStateToProps = (state: StateObject) => ({
    loading: state.loading,
    flights: state.flights,
    maxTransf: state.transferNumberArray
});

export default connect(
    mapStateToProps,
    null
)(MainContent);

