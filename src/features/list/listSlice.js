import { createSlice } from '@reduxjs/toolkit';
const initialState = [];

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducer:
    {
        createTodo: (state, action) => {
            return [...state, action.payload]
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo !== action.payload)
        },
        toggleTodo: (state, action) => {
            const currentIndex = state.indexOf(action.payload);

            return [...state.slice(0, currentIndex),
            { ...action.payload, done: !action.payload.done },
            ...state.slice(currentIndex + 1)]
        },
        fetchListAction: (action) => {
            return action.payload
        }
    }
});

export const { createTodo, deleteTodo, toggleTodo, fetchListAction } = listSlice.actions;
export default listSlice.reducer;