import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    header: '',
    description: '',
    done: false,
    id: 0
};

export const formsLice = createSlice({
    name: 'form',
    initialState,
    reducer:
    {
        editHeader: (state, action) => {
            return {...state, header: action.payload}
        },
        editDescription: (state, action) => {
            return {...state, description: action.payload}
        },
        addId: (state, action) => {
            return {...state, id: action.payload}
        }
    }
});

export const { editHeader, editDescription, addId } = formsLice.actions;
export default formsLice.reducer;