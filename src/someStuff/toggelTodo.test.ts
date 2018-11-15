const deepFreeze = require('deep-freeze');

const toggleToDo = (todo: any) => {
    return {...todo, completed: !todo.completed}
}

describe('test toggleToDo', () => {

    it('completed.false => completed.true', () => {
        const todoBefore = {
            id: 0,
            text: 'dummy text',
            completed: false
        }
        deepFreeze(todoBefore)
        const todoAfter = {
            id: 0,
            text: 'dummy text',
            completed: true
        }

        expect(toggleToDo(todoBefore)).toEqual(todoAfter)

    })

    it('completed.true => completed.false', () => {
        const todoBefore = {
            id: 0,
            text: 'dummy text',
            completed: true
        }
        deepFreeze(todoBefore)
        const todoAfter = {
            id: 0,
            text: 'dummy text',
            completed: false
        }

        expect(toggleToDo(todoBefore)).toEqual(todoAfter)

    })

})