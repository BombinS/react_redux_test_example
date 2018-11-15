import todos from './todos'
const deepFreeze = require('deep-freeze');

describe('test todos reducer', () => {

    it('dummy test', () => {
        const stateBefore: any = []
        deepFreeze(stateBefore)
        const action = {
            type: 'ADD_TODO',
            id: 0,
            text: 'some text'
        }
        deepFreeze(action)
        const stateAfter: any = [{
            id: 0,
            text: 'some text',
            completed: false
        }]
        expect(todos(stateBefore, action)).toEqual(stateAfter)
    })

})