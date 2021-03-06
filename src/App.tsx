import * as React from 'react';
import Counter from './components/Counter'
import Todo from './components/todo';

import './App.css';

import logo from './logo.svg';

class App extends React.Component<any> {

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
          <div>
            <h2>Counter example</h2>
            <Counter store={this.props.store}/>
          </div>
          <div>
            <h2>todo exapmle</h2>
            <Todo store={this.props.store}/>
          </div>
      </div>
    );
  }
}

export default App;
