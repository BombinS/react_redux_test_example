import todos from './todos'
import * as deepFreeze from 'deep-freeze';

describe('test todos reducer', () => {

  it('test ADD_TODO', () => {
    const stateBefore: any = []
    deepFreeze(stateBefore)
    const action = {
      id: 0,
      text: 'some text',
      type: 'ADD_TODO',
    }
    deepFreeze(action)
    const stateAfter: any = [{
      completed: false,
      id: 0,
      text: 'some text',
    }]
    expect(todos(stateBefore, action)).toEqual(stateAfter)

  })

  it('test TOGGLE_TODO', () => {
    const stateBefore: any = [
      {
        completed: false,
        id: 0,
        text: '1st text',
      },
      {
        completed: false,
        id: 1,
        text: '2nd text',
      }
    ]
    const action = {
      id: 1,
      type: 'TOGGLE_TODO',
    }
    const stateAfter = [
      {
        completed: false,
        id: 0,
        text: '1st text',
      },
      {
        completed: true,
        id: 1,
        text: '2nd text',
      }
    ]
    deepFreeze(stateBefore)
    deepFreeze(action)
    expect(todos(stateBefore, action)).toEqual(stateAfter)
  })

})