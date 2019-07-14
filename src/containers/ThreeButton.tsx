/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import React from 'react';


class ThreeButton extends React.Component{
    constructor(props: any){
        super(props);
        this.state={
            selectedButton: "RUB" 
        }
    }

    render(){
        return (
            <div className="m-3">
                <button>RUB</button>
                <button>USD</button>
                <button>EUR</button>
            </div>
        );

    } 
}

export default ThreeButton;

