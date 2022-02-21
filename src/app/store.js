import { createStore, combineReducers } from "redux";
import { listReducer } from "../features/list/listSlice";
import { formReducer } from "../features/form/formSlice";

const reducers = {
    list: listReducer,
    form: formReducer
};

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer);