import * as React from 'react';
import { createStore } from 'redux'
import counter from '../reducers/counter'
import Counter from './Counter'
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('`Counter` component testing', () => {

    it('Reducer test', () => {
        // create store
        const store = createStore(counter)
        // initial store should be equal to 0
        expect(store.getState()).toBe(0)
        // increment
        store.dispatch({ type: 'INCREMENT' })
        expect(store.getState()).toBe(1)
        // decrement
        store.dispatch({ type: 'DECREMENT' })
        expect(store.getState()).toBe(0)

    })

    it('Button pressed test', () => {
        // create store
        const store = createStore(counter)
        // initial store should be equal to 0
        expect(store.getState()).toBe(0)

        const wrapper = shallow(<Counter store={store} />);

        // button should exist
        expect(wrapper.find('.button1').length).toBe(1)

        // increment button should store ++
        wrapper.find('.button1').simulate('click')
        expect(store.getState()).toBe(1)

        // decrement button should store --
        wrapper.find('.button2').simulate('click')
        expect(store.getState()).toBe(0)

    })

    it('Button pressed test and stub', () => {
        // create store
        const store = createStore(counter)
        // initial store should be equal to 0
        expect(store.getState()).toBe(0)

        const wrapper = shallow(<Counter store={store} />);
        wrapper.instance().toChangeState = jest.fn();
        wrapper.instance().forceUpdate();

        // button should exist
        expect(wrapper.find('.button1').length).toBe(1)

        // increment button should store ++
        wrapper.find('.button1').simulate('click')
        expect(store.getState()).toBe(1)
        expect(wrapper.instance().toChangeState).toBeCalledWith('Store was incremented.')

        // decrement button should store --
        wrapper.find('.button2').simulate('click')
        expect(store.getState()).toBe(0)

    })

})