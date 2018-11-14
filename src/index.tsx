import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import  counter  from './reducers/counter'

const store = createStore(counter)

const render = () => {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root') as HTMLElement
  );
}

store.subscribe(render)
render()

registerServiceWorker();
