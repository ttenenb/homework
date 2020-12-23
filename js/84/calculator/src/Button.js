import React, { Component } from 'react';

export default class Button extends Component {
    allButtons() {
//onClick={this.props.calculate }
        return this.props.display.map(d => <button onClick={this.props.sign } value={d}>{d}</button>)
    }

    render() {
        return (
            <div>
                {this.allButtons()}
                <br></br>
                < button onClick={this.props.click}  value="=">=</button>
            </div>
        );
    }
}

