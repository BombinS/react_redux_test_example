import { createStore } from 'redux'
import counter from '../reducers/counter'

describe('`Counter` component testing', () => {

    it('First test', () => {
        // create store
        const store = createStore(counter)
        // initial store should be equal to 0
        expect(store.getState()).toBe(0)
    })

})