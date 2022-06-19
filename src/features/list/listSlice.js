import { createSlice } from '@reduxjs/toolkit';
const initialState = [];

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers:
    {
        createTodo: (state, action) => {
            state.push(action.payload)
        },
        deleteTodo: (state, action) => {
            return state.filter(task => task.id != action.payload.id)
        },
        toggleTodo: (state, action) => {
            const currentIndex = state.findIndex(task => task.id == action.payload.id);
            state[currentIndex].done = !action.payload.done;
        },
        fetchList: (state, action) => {
            return state = action.payload
        }
    }
});

export const { createTodo, deleteTodo, toggleTodo, fetchList } = listSlice.actions;
export default listSlice.reducer;