import axiosConfig from "../api/axiosConfig";

const certificationService = {

    getAll: () => axiosConfig.get("/certifications"),

    create: (data) => axiosConfig.post("/certifications", data),

    update: (id, data) => axiosConfig.put(`/certifications/${id}`, data),

    delete: (id) => axiosConfig.delete(`/certifications/${id}`)

};

export default certificationService;