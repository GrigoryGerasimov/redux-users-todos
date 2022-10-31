import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";
import { UsersSlice } from "../../UsersPage/reducer";

export const store = configureStore({
    reducer: combineReducers({
        todosPage: todosReducer,
        usersPage: UsersSlice.reducer
    })
});
