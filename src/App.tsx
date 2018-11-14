import * as React from 'react';
import Counter from './components/Counter'
import { createStore } from 'redux'

import './App.css';

import logo from './logo.svg';

interface IAction {
  type: string
}

function counter(state = 0, action: IAction) {

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter)

const onIncrement = () => {
  store.dispatch({ type: 'INCREMENT' })
  console.log(`increment callback was called. Current state: ${store.getState()}`)
}
const onDecrement = () => {
  store.dispatch({ type: 'DECREMENT' })
  console.log(`decrement callback was called. Current state: ${store.getState()}`)
}

class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Counter value={store.getState()} 
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </div>
    );
  }
}

export default App;
