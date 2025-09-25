import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: "https://faruk-amazon-clone.onrender.com",
});

export {axiosInstance};