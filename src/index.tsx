import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'

import  counter  from './reducers/counter'

const store = createStore(counter)

const onIncrement = () => {
  store.dispatch({ type: 'INCREMENT' })
  console.log(`increment callback was called. Current state: ${store.getState()}`)
}
const onDecrement = () => {
  store.dispatch({ type: 'DECREMENT' })
  console.log(`decrement callback was called. Current state: ${store.getState()}`)
}

const render = () => {
  ReactDOM.render(
    <App store={store} onIncrement = {onIncrement} onDecrement ={onDecrement} />,
    document.getElementById('root') as HTMLElement
  );
}

store.subscribe(render)
render()

registerServiceWorker();
