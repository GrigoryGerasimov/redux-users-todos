import { actionsTypes } from "./actions";

const { GET_TODOS_START, GET_TODOS_END_SUCCESSFUL, GET_TODOS_END_FAIL } = actionsTypes;

const initialState = {
    todosList: [],
    isLoading: false,
    error: null
};

export const todosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_TODOS_START: {
            return { ...state, isLoading: true };
        }
        case GET_TODOS_END_SUCCESSFUL: {
            return { ...state, isLoading: false, todosList: payload };
        }
        case GET_TODOS_END_FAIL: {
            return { ...state, isLoading: false, error: payload }
        }
        default: {
            return state;
        }
    }
};
