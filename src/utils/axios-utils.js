import axios from "axios";

export const user_data = JSON.parse(localStorage.getItem("userdata"));

const TOKEN2 = JSON.parse(localStorage.getItem("token"));

const TOKEN = user_data?.token;

const BASE_URL = `https://rel8backend-production.up.railway.app/tenant/man/`;
const BASE_CMS_URL = `https://web-production-9688.up.railway.app/api/`;

export const privateRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Token ${TOKEN || TOKEN2}` },
});


export const cmsRequest = axios.create({
  baseURL: BASE_CMS_URL,
  // headers: { Authorization: `Token ${TOKEN || TOKEN2}` },
});
