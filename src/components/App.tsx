import React from 'react';
import Logo from './Logo';
import MainContent from '../containers/MainContent';
import Widget from './Widget';

const App = () => (
    <div>
        <Logo />
        <div className="container container-style" >
            <div className="row">
                <div className="col-md-3 text-center p-3" style={{backgroundColor:'azure',height:'fit-content'}}>
                    <Widget/>
                </div>
                <MainContent/>
            </div>
        
        </div>
    </div>
);

export default App;

