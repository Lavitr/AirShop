import React from 'react';
import {connect} from 'react-redux';
import {setTranfersNumber ,unsetTranfersNumber} from '../actions';

export interface CheckProps {
    transfersNumber: number | object;
    transfersNumberArray: any [];
    title: string;
    handleInputChange: Function;
    handleUncheck: Function;
}

const Checkbox = (props: CheckProps) =>
    (
        <div className="form-checkß mt-2" >
            <input 
                className="form-check-input" 
                type="checkbox" 
                value=""
                checked={props.transfersNumberArray.includes(props.transfersNumber)}
                onChange={
                    (e)=>{
                        props.transfersNumberArray.includes(props.transfersNumber) ?
                            props.handleUncheck(props.transfersNumber)
                            : props.handleInputChange(props.transfersNumber);}
                } />
            <label className="form-check-label" >
                {props.title}
            </label>
        </div>
  
    );

// interface OwnProposObject { 
//     transfersNumber: number | object;
//     title: string;
// };
interface StateObject{ transferNumberArray: any[] }

const mapStateToProps = (state: StateObject) => ({ transfersNumberArray: state.transferNumberArray});
const mapDispatchToProps = (dispatch: Function) => ({
    handleInputChange: (transfers: number | object) => {
        dispatch(setTranfersNumber(transfers));
    },
    handleUncheck: (transfers: number | object) => {
        dispatch(unsetTranfersNumber(transfers));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkbox);
