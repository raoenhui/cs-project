let nextTodoId = 0;
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId,
        text
    }
}

export const setVisibility = (filter) => {
    return {
        type: 'SET_VISIBILITY',
        filter
    }
}
export const toggltTodo = (id) => {
    return {
        type: 'TOGGLR_TODO',
        id
    }
}