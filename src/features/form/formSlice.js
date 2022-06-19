import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    header: '',
    description: '',
    done: false,
    id: 0
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers:
    {
        editHeader: (state, action) => {
            state.header = action.payload
        },
        editDescription: (state, action) => {
            state.description = action.payload
        },
        addId: (state, action) => {
            state.id = action.payload
        }
    }
});

export const { editHeader, editDescription, addId } = formSlice.actions
export default formSlice.reducer;