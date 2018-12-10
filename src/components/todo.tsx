import * as React from 'react'

let nextToDoId = 0;
let inputContent = '';

export default class Todo extends React.Component<any> {
  public inputFieldContent = '';  
  public render() {
    const todos = this.props.store.getState().todos;
    return (
      <div>
        <input placeholder="todo value" onChange={this.handleInputOnChange}/>
        <button
          onClick={this.addTodo}
        >
          add todo
        </button>
        <ul>
          {todos.map(
            (todo: any) =>
              <li key={todo.id}>
                {todo.text}
              </li>)}
        </ul>
      </div>
    )
  }

  private handleInputOnChange(e:any){
    inputContent = e.target.value;
  }

  private addTodo = () => {
    this.props.store.dispatch({
      id: nextToDoId++,
      text: inputContent,
      type: 'ADD_TODO',
    });
    inputContent = '';
  }
}
