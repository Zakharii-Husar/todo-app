import { configureStore } from '@reduxjs/toolkit';
import { listSlice } from "../features/list/listSlice";
import { formSlice } from "../features/form/formSlice";


export const store = configureStore({
    reducer: {
        list: listSlice.reducer,
        form: formSlice.reducer
    }
})