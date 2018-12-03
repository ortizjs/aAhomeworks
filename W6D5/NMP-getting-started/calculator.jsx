import React from 'react';

class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {num1: "", num2: "", result: 0};
        this.setNum1 = this.setNum1.bind(this);
        this.setNum2 = this.setNum2.bind(this);
        this.result = this.result.bind(this);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.multiply = this.multiply.bind(this);
        this.divide = this.divide.bind(this);
        this.clear = this.clear.bind(this);
        // your code here
    }

    // your code here

    setNum1(e) {
        const num1 = e.target.value ? parseInt(e.target.value) : "";
        this.setState({ num1 });
        
    }
    
    setNum2(e) {
        const num2 = e.target.value ? parseInt(e.target.value) : "";
        this.setState({ num2 });
    }

    add(e){
        e.preventDefault();
        const result = this.state.num1 + this.state.num2;
        this.setState({ result });
    }
    
    subtract(e) {
        e.preventDefault();
        const result = this.state.num1 - this.state.num2;
        this.setState({ result});
    }
    
    multiply(e) {
        e.preventDefault();
        const result = this.state.num1 * this.state.num2;
        this.setState({ result });
    }
    
    divide(e) {
        e.preventDefault();
        const result = this.state.num1 / this.state.num2;
        this.setState({ result });
    }
    
    clear(e) {
        e.preventDefault();
        this.setState({ num1: "", num2: "", reuslt: 0});
    }
    
    render() {
        const {num1, num2, result} = this.state;
        return (
            <div>
                <h1>{this.state.result}</h1> 
                <input>onChange={this.setNum1} value ={this.num1}</input>
                {/* <input>onChange={this.setNum2} value ={this.num2}</input> */}
                <input>onChange={this} value ={this.state.num1}</input>
                <buttonn onClick={this.clear}>Clear</buttonn>
                <br />
                <button onClick={this.add}>+</button>
                <button onClick={this.subtract}>-</button>
                <button onClick={this.multiply}>*</button>
                <button onClick={this.divide}>/</button>
            </div>
        );
    }
}

export default Calculator;