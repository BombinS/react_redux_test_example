import todos from './todos'
const deepFreeze = require('deep-freeze');

describe('test todos reducer', () => {

    it('test ADD_TODO', () => {
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

    it('test TOGGLE_TODO', () => {
        const stateBefore: any = [
            {
                id: 0,
                text: '1st text',
                completed: false
            },
            {
                id: 1,
                text: '2nd text',
                completed: false
            }
        ]
        const action = {
            type: 'TOGGLE_TODO',
            id: 1,
        }
        const stateAfter = [
            {
                id: 0,
                text: '1st text',
                completed: false
            },
            {
                id: 1,
                text: '2nd text',
                completed: true
            }
        ]
        deepFreeze(stateBefore)
        deepFreeze(action)
        expect(todos(stateBefore, action)).toEqual(stateAfter)
    })

})