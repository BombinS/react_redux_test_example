import * as React from 'react';

class Counter extends React.Component<any>{

    public render() {
        return (
            <div>
                <div>
                    <h1> Hello </h1>
                </div>
                <div>
                    <button onClick ={this.onIncrement}>+</button>
                    <h1>{this.props.store.getState()}</h1>
                    <button onClick = {this.onDecrement}>-</button>
                </div>
            </div>
        )
    }
    
    private onIncrement = () => {
        this.props.store.dispatch({ type: 'INCREMENT' })
        console.log(`increment callback was called. Current state: ${this.props.store.getState()}`)
      }
    private onDecrement = () => {
        this.props.store.dispatch({ type: 'DECREMENT' })
        console.log(`decrement callback was called. Current state: ${this.props.store.getState()}`)
      }    
}

export default Counter;