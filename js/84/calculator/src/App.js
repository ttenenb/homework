import './App.css';
import React, { Component } from 'react';
import CalculatorUI from './CalculatorUI';

export default class App extends Component {
  state = {
    values: [],
    mathSign: '+',
    getEquation:'',
    total: 0
  }
  newValues = [];

  getTheUserInput = e => {
    const inputValue = e.target.value;
    this.newValues.push(inputValue);

    this.setState({
     values: this.newValues
    });

    document.getElementById('num').value = ''

  }

  parse(x) {
   
   return Function(`return  ${x} `)();
  }

  doMathToValues(e) {
    const bothNums = this.state.values.entries();
    const r = `${bothNums.next().value[1]} ${bothNums.next().value[1]} ${bothNums.next().value[1]}`;
    this.newValues = [];
    this.setState({
      total: this.parse(r),
      getEquation: r
    });
  }

  render(){
    return (
      <div className="App">
        <input id="num" type="number" onBlur={this.getTheUserInput.bind(this)}></input>
        <h1 id="total">{this.state.total}</h1>
        <h4>{ this.state.getEquation}</h4>
        <CalculatorUI click={this.doMathToValues.bind(this)} sign={this.getTheUserInput.bind(this) }/>
      </div>
    );
  }
}

