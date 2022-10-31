import { $api } from "../../api/axiosInstance";

export const UsersService = {
    getUsers: async () => {
        const { data } = await $api.get("/users");
        return data;
    }
};
