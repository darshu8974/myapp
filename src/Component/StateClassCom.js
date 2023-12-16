import React, {Component} from "react";
class StateClassCom extends Component
{
    state ={
        color:"Yellow",
        price:121
    }
    handleChange=()=>{this.setState({price:"800"})}
    render()
    {
        return(
            <div>
                <h1>The color i have used is {this.state.color} The price is {this.state.price}</h1>
                <button onClick={this.handleChange}>Click me</button>
            </div>
        )
    }
}
export default StateClassCom;