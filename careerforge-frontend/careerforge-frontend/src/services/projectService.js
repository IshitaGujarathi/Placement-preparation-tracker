import axiosConfig from "../api/axiosConfig";

export default {

    getAll: () => axiosConfig.get("/projects"),

    create: (data) => axiosConfig.post("/projects", data),

    update: (id, data) => axiosConfig.put(`/projects/${id}`, data),

    delete: (id) => axiosConfig.delete(`/projects/${id}`)

};