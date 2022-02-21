const initialState = {
    header: '',
    description: '',
    done: false,
    id: 0
};

export const formReducer = (state = initialState, action) => {
    switch(action.type){
        case 'form/editHeader': {
            return {...state, header: action.payload}
        }
        case 'form/editDescription': {
            return {...state, description: action.payload}
        }
        case 'form/addId': {
            return {...state, id: action.payload}
        }
        default: {
            return state
        }
    }
};

export const editHeaderAction = todo =>{
    return {
        type: 'form/editHeader',
        payload: todo
    }
}

export const editDescriptionAction = todo =>{
    return {
        type: 'form/editDescription',
        payload: todo
    }
}

export const addIdAction = todo =>{
    return {
        type: 'form/addId',
        payload: todo
    }
}