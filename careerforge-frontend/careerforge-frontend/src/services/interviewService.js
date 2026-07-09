import axiosConfig from "../api/axiosConfig";

const interviewService = {

    getAll: () => axiosConfig.get("/interviews"),

    create: (data) => axiosConfig.post("/interviews", data),

    update: (id, data) => axiosConfig.put(`/interviews/${id}`, data),

    delete: (id) => axiosConfig.delete(`/interviews/${id}`)

};

export default interviewService;