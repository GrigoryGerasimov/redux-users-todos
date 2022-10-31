import { todosService } from "../todosService";

export const actionsTypes = {
    GET_TODOS_START: "todos/getStart",
    GET_TODOS_END_SUCCESSFUL: "todos/getEndSuccessful",
    GET_TODOS_END_FAIL: "todos/getEndFail"
};

export const actions = {
    getTodosStart() {
        return { type: actionsTypes.GET_TODOS_START }
    },
    getTodosEndSuccess(payload) {
        return { type: actionsTypes.GET_TODOS_END_SUCCESSFUL, payload }
    },
    getTodosEndFailure(payload) {
        return { type: actionsTypes.GET_TODOS_END_FAIL, payload }
    }
};

const { getTodosStart, getTodosEndSuccess, getTodosEndFailure } = actions;

export const getTodosAsync = () => async (dispatch) => {
    dispatch(getTodosStart());
    try {
        const data = await todosService.get({ params: { _page: 3, _limit: 13 }});
        dispatch(getTodosEndSuccess(data));
    } catch (error) {
        dispatch(getTodosEndFailure(error));
    }
};
