import React from 'react';
import {connect} from 'react-redux';
import {setCurrency} from '../actions';
import databaseRef from '../firebase'

export interface ButtonProps {
    currency: string;
    onClick: Function; 
    currencyTitle: string;
}

const Button = (props: ButtonProps) =>
    (
        <button 
            className={ props.currencyTitle === props.currency ? 'btn btn-primary' : 'btn btn-outline-secondary'} 
            onClick={()=>{props.onClick();}}
            style={{boxShadow: 'unset'}}>
            {props.currencyTitle}
        </button>
  
    );

interface OwnProposObject { currencyTitle: string};
interface StateObject{ currency: string }

const mapStateToProps = (state: StateObject) => ({ currency: state.currency});
const mapDispatchToProps = (dispatch: Function, ownProps: OwnProposObject) => ({
    onClick: () => {
        dispatch(setCurrency(ownProps.currencyTitle));
    }
})
  

// const mapDispatchToProps = (dispatch: Function) => ({
//     saySomething: () => {
//         dispatch(sayHello());
//         databaseRef.child("TT").on("value", function(snapshot: any) {
//             console.log(snapshot.val());
//         }, function (error: any) {
//             console.log("Error: " + error.code);
//         });
//     },
// });

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);
