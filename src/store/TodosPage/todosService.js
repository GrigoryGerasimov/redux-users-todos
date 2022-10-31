import { $api } from "../../api/axiosInstance";

const todosEndpoint = "todos/"

export const todosService = {
    get: async params => {
        const { data } = await $api.get(todosEndpoint, params);
        return data;
    }
};