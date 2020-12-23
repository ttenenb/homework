import React, { Component } from 'react';
import Button from './Button';

export default class CalculatorUI extends Component {

    // handleClick() {
    //     this.props.calculate()
    // }

    allSymbols = ['+', '-', '*', '/'];
    
    render() {

        return (
            <div>
                {/* calculate={ this.props.calculate} */}
                <Button display={this.allSymbols} click={this.props.click} sign={this.props.sign} />
            </div>
        );
    }
}
