import axios from "axios";

export const user_data = JSON.parse(localStorage.getItem("userdata"));

const TOKEN = user_data?.token;

// const BASE_URL = `https://rel8corporate.watchdoglogisticsng.com/tenant/man/`;
const BASE_URL = `http://localhost:8001/tenant/man/`;

// const CMS_BASE_URL = "https://api.manufacturersnigeria.org/api";
const CMS_BASE_URL = `http://localhost:8000/api`;

const ORIGIN = window.location.origin;

export const privateRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Token ${TOKEN}`,
    Origin: ORIGIN,
  },
});

export const publicCmsRequest = axios.create({
  baseURL: CMS_BASE_URL,
  headers: {
    Origin: ORIGIN,
  },
});
