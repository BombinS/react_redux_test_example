import * as React from 'react';

class Counter extends React.Component<any, any>{

    constructor(props : any) {
        super(props);
        this.state = { desc: '' };
    }

    public render() {
        return (
            <div>
                <div>
                    <h1> Hello </h1>
                </div>
                <div>
                    <button className='button1' onClick={this.onIncrement}>+</button>
                    <h1 className='counts'>{this.state.desc}</h1>
                    <button className='button2' onClick={this.onDecrement}>-</button>
                </div>
            </div>
        )
    }

    private onIncrement = () => {
        this.props.store.dispatch({ type: 'INCREMENT' });
        this.toChangeState(`Store was incremented.`);
        this.toDoSomething('Doing something');
    }

    private onDecrement = () => {
        this.props.store.dispatch({ type: 'DECREMENT' });
        this.toChangeState(`Store was decremented.`);
    }

    private toChangeState(arg:string){
        const desc = `${arg} Current value: ${this.props.store.getState()}`;
        this.setState({desc});
    }

    private toDoSomething = (arg:string)=> {
        console.log(arg);
    }
}

export default Counter;