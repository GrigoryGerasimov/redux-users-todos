import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { todosReducer } from "./reducer";
import { UsersSlice } from "../../UsersPage/reducer";

const rootReducer = combineReducers({
    todosPage: todosReducer,
    usersPage: UsersSlice.reducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
