import axiosConfig from "../api/axiosConfig";

const studyLogService = {

    getAll: () => axiosConfig.get("/studylogs"),

    create: (data) => axiosConfig.post("/studylogs", data),

    update: (id, data) => axiosConfig.put(`/studylogs/${id}`, data),

    delete: (id) => axiosConfig.delete(`/studylogs/${id}`)

};

export default studyLogService;