import * as deepFreeze from 'deep-freeze';

const toggleToDo = (todo: any) => {
  return { ...todo, completed: !todo.completed }
}

describe('test toggleToDo', () => {

  it('completed.false => completed.true', () => {
    const todoBefore = {
      completed: false,
      id: 0,
      text: 'dummy text',
    }
    deepFreeze(todoBefore)
    const todoAfter = {
      completed: true,
      id: 0,
      text: 'dummy text',
    }

    expect(toggleToDo(todoBefore)).toEqual(todoAfter)

  })

  it('completed.true => completed.false', () => {
    const todoBefore = {
      completed: true,
      id: 0,
      text: 'dummy text',
    }
    deepFreeze(todoBefore)
    const todoAfter = {
      completed: false,
      id: 0,
      text: 'dummy text',
    }

    expect(toggleToDo(todoBefore)).toEqual(todoAfter)

  })

})