const todos = (state = [], action: any) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map((todo: any) => {
                if (todo.id != action.id)
                    return todo
                else
                    return { ...todo, ...{ completed: !todo.completed } }
            })
        default:
            return state
    }
}

export default todos;