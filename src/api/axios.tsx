import axios from "axios";


const BASE_URL = "https://e-move-api.onrender.com/api/v1/";
// const BASE_URL = "http://127.0.0.1:8081/api/v1";



export default axios.create({
  baseURL: BASE_URL,
});
