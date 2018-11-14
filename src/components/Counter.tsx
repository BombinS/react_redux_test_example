import * as React from 'react';

class Counter extends React.Component<any>{
    public render() {
        console.log(JSON.stringify(this.props))
        return (
            <div>
                <div>
                    <h1> Hello </h1>
                </div>
                <div>
                    <button onClick ={this.props.onIncrement}>+</button>
                    <h1>{this.props.value}</h1>
                    <button onClick = {this.props.onDecrement}>-</button>
                </div>
            </div>
        )
    }          
}

export default Counter;