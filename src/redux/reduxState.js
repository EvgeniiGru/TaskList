import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import LoginReduser from "./AU";
import ListTaskReduser from "./ListTaskReduser"
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    login:LoginReduser,
    listTask:ListTaskReduser,
    form: formReducer
});

const store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;