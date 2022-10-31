import { createSlice } from "@reduxjs/toolkit";
import { todosService } from "../todosService";

const initialState = {
    todosList: [],
    isLoading: false,
    error: null
}

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        getTodosStart(state) {
            state.isLoading = true;
        },
        getTodosEndSuccess(state, { payload }) {
            state.todosList = payload;
        },
        getTodosEndFail(state, { payload }) {
            state.error = payload;
        },
        getTodosEnd(state) {
            state.isLoading = false;
        }
    }
});

const { actions: { getTodosStart, getTodosEndSuccess, getTodosEndFail, getTodosEnd }, reducer: todosReducer } = todosSlice;

export const getTodosAsync = () => async (dispatch) => {
    dispatch(getTodosStart())
    try {
        const data = await todosService.get({ params: { _page: 1, _limit: 15 }});
        dispatch(getTodosEndSuccess(data));
    } catch (error) {
        dispatch(getTodosEndFail(error.message));
    } finally {
        dispatch(getTodosEnd())
    }
};

export default todosReducer;
