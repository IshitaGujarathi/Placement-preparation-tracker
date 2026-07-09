import axiosConfig from "../api/axiosConfig";

const authService = {

    register: async (data) => {
        return await axiosConfig.post("/auth/register", data);
    },

    login: async (data) => {
        return await axiosConfig.post("/auth/login", data);
    }

};

export default authService;