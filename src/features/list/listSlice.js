const initialState = [];

export const listReducer = (state = initialState, action) => {
    switch(action.type){
        case 'list/createTodo': {
            return [...state, action.payload]
        }
        case 'list/deleteTodo': {
            return state.filter(todo => todo !== action.payload)
        }
        case 'list/toggleTodo': {
            const currentIndex = state.indexOf(action.payload);

            return [...state.slice(0, currentIndex), 
                {...action.payload, done: !action.payload.done},
            ...state.slice(currentIndex + 1)]
        }
        case 'list/fetchListAction': {
            return action.payload
        }
        default: {
            return state
        }
    }
};

export const createTodoAction = todo =>{
    return {
        type: 'list/createTodo',
        payload: todo
    }
}

export const deleteTodoAction = todo =>{
    return {
        type: 'list/deleteTodo',
        payload: todo
    }
}

export const toggleTodoAction = todo => {
    return {
        type: 'list/toggleTodo',
        payload: todo
    }
}

export const fetchListAction = todo => {
    return {
        type: 'list/fetchListAction',
        payload: todo
    }
}