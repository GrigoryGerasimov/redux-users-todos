import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { UsersSlice } from "./reducer";

// init Vanilla Redux

// const rootReducer = combineReducers({
//     usersPage: UsersReducer
// });
//
// export const store.js = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// ===========================================================================================

// ini Redux Toolkit

const rootReducer = combineReducers({
    usersPage: UsersSlice.reducer
});

export const store = configureStore({
    reducer: rootReducer
});
