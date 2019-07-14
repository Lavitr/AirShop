import React from 'react';
import {connect} from 'react-redux';
import {sayHello} from '../actions';
import databaseRef from '../firebase'

export interface ButtonProps {
    whatsUp: string; stateObject: object; saySomething: Function;
}

const Button = (props: ButtonProps) =>
    (
        <div >
            <button onClick={()=>props.saySomething()}>
        PRESS TO DISPATCH FIRST ACTION
            </button>
            <button className='btn-primary'>fffff</button>
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
        databaseRef.child("TT").on("value", function(snapshot: any) {
            console.log(snapshot.val());
        }, function (error: any) {
            console.log("Error: " + error.code);
        });
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);
