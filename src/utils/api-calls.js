import axios, { AxiosError } from "axios";
import { privateRequest } from "./axios-utils";

const BASE_URL = `https://rel8-corporate-backend-production.up.railway.app/tenant/man/`;

//LOGIN
export const loginUser = async (payload) => {
  try {
    const loginURL = `${BASE_URL}tenant/auth/login/`;
    const res = await axios.post(loginURL, payload);
    return res.data;
  } catch (error) {
    if (!error?.response) {
      throw new Error("No Server Response");
    } else if (error?.response.status === 400) {
      if (error?.response?.data?.message?.error) {
        throw new Error(error?.response?.data?.message?.error);
      }
      throw new Error("Invalid Credentials");
    } else if (error?.response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      throw new Error("Login Failed");
    }
  }
};

//FORM ONE
export const submitFormOne = async (payload) => {
  try {
    const res = await privateRequest.post(
      "/tenant/prospectivemember/propective_member_manage_form_one/",
      payload
    );
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

export const getFormOne = async () => {
  try {
    const res = await privateRequest.get(
      "/tenant/prospectivemember/propective_member_manage_form_one/"
    );
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//FORM TWO
export const submitFormTwo = async (payload) => {
  try {
    const res = await privateRequest.post(
      "/tenant/prospectivemember/propective_member_manage_form_two/",
      payload
    );
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

export const getFormTwo = async () => {
  try {
    const res = await privateRequest.get(
      "/tenant/prospectivemember/propective_member_manage_form_two/"
    );
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//GET STATUS
export const getStatus = async () => {
  try {
    const res = await privateRequest.get(
      "/tenant/prospectivemember/propective_member_manage_form_one/get_status/"
    );
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//BUY FORM
export const buyForm = async (payload) => {
  try {
    const res = await axios.post(
      `${BASE_URL}tenant/prospectivemember/creation_of_prospective_member/`,
      payload
    );
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//SUBSCRIPTION SUMMARY
export const getSubscriptionSummary = async () => {
  try {
    const res = await privateRequest.get(
      "/tenant/prospectivemember/propective_member_manage_form_one/get_subscriptio_payment_breakdown"
    );
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//Membership payment
export const getMembershipPaymentUrl = async (payload) => {
  const randomNumber = 2;
  try {
    const res = await privateRequest.post(
      `/tenant/dues/process_payment/man_prospective_subscription_payment/${randomNumber}/`,
      payload
    );
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};
