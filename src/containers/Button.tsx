import React from 'react';
import {connect} from 'react-redux';
import {setCurrency} from '../actions';

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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);
