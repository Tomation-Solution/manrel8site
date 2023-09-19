import axios from "axios";

export const user_data = JSON.parse(localStorage.getItem("userdata"));

const TOKEN = user_data?.token;

const BASE_URL = `https://web-production-81544.up.railway.app/tenant/man/`;


const CMS_BASE_URL = 'http://23.254.238.194:8000/api'
// const CMS_BASE_URL = process.env.REACT_APP_CMS_URL|| 'localhost:8000/'
// const CMS_BASE_URL = `http://localhost:8000/api`;

export const privateRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Token ${TOKEN}` },
});

export const publicCmsRequest = axios.create({
  baseURL: CMS_BASE_URL,
});
