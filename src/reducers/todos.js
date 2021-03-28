const todosReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_TODOS':
            return action.todos
        default:
            return state
    }
}

export default todosReducer