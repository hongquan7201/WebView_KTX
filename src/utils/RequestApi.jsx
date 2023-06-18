import axios from "axios";

const RequestApi = axios.create({
    baseURL: "https://localhost:7102/api/",
});
export default RequestApi;
