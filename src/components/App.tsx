import React from 'react';
import Logo from './Logo';
import FlightItem from '../containers/FlightItem';
import Widget from './Widget';

const App = () => (
    <div>
        <Logo />
        <div className="container container-style" >
            <div className="row">
                <div className="col-md-3 text-center p-3" style={{backgroundColor:'azure',height:'fit-content'}}>
                    <Widget/>
                </div>
                <div className="col-md-9" style={{backgroundColor:'',minHeight: '100vh'}}>
                    <FlightItem/>
                    <FlightItem/>
                    <FlightItem/>
                    <FlightItem/>
                    <FlightItem/>
                    <FlightItem/>
                    <FlightItem/>
                    <FlightItem/>
                    <FlightItem/>
                    <FlightItem/>
                    col-sm-8</div>
            </div>
        
        </div>
    </div>
);

export default App;

