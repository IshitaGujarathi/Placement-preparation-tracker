import axios from "axios";

const API = "http://localhost:8080/api/ai";

const askAI = async (message) => {
  const response = await axios.post(`${API}/chat`, {
    message: message,
  });

  return response.data;
};

export default {
  askAI,
};