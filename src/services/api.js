import axios from "axios";

const api = axios.create({ baseURL: "https://pcdtech.herokuapp.com/users" });

export default api;
