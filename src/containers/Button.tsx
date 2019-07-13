import React from 'react';
import {connect} from 'react-redux';
import {sayHello} from '../actions';

export interface ButtonProps {
    whatsUp: string; stateObject: object; saySomething: Function;
}

const Button = (props: ButtonProps) =>
    (
        <div >
            <button onClick={()=>props.saySomething()}>
        PRESS TO DISPATCH FIRST ACTION
            </button>
            <h2>{props.whatsUp}   </h2>
            <button onClick = {() => console.log('Redux State:', props.stateObject)} >
        Press to inspect STATE in console panel
            </button>
        </div>

    );

interface StateObject { say: string}

const mapStateToProps = (state: StateObject) => ({
    whatsUp: state.say,
    stateObject: state,
});

const mapDispatchToProps = (dispatch: Function) => ({
    saySomething: () => {
        dispatch(sayHello());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);
