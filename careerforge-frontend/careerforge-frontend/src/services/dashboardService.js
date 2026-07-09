import axiosConfig from "../api/axiosConfig";

const dashboardService = {

    getData: () => axiosConfig.get("/dashboard")

};

export default dashboardService;