import { combainReducers } from 'redux';

const todo = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'TOGGLE_TODO':
            if (state.id != action.id)
                return state
            else
                return { ...state, ...{ completed: !state.completed } }
    }
}

const todos = (state = [], action: any) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                ...[todo(state, action)]
            ]
        case 'TOGGLE_TODO':
            return state.map((t: any) => {
                return todo(t, action)
            })
        default:
            return state
    }
}

const visibilityFilter = (state = 'SHOW_ALL', action: any) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state
    }
}

const todoApp = combainReducers({
    todos,
    visibilityFilter
});

export default todos;