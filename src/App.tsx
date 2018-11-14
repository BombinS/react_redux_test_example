import * as React from 'react';
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

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' })
})

const myAction = () => {
  console.log(store.getState())
}

store.subscribe(myAction)

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
        <p>
          some text
        </p>
      </div>
    );
  }
}

export default App;
