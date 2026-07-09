import axiosConfig from "../api/axiosConfig";

const dsaService = {

    getAll: () => axiosConfig.get("/dsa"),

    create: (data) => axiosConfig.post("/dsa", data),

    update: (id, data) => axiosConfig.put(`/dsa/${id}`, data),

    delete: (id) => axiosConfig.delete(`/dsa/${id}`)

};

export default dsaService;