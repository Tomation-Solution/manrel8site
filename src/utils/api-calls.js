import axios, { AxiosError } from "axios";
import { privateRequest } from "./axios-utils";

// const BASE_URL = `https://rel8corporate.watchdoglogisticsng.com/tenant/man/`;
const BASE_URL = `http://localhost:8001/tenant/man/`;

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

//BUY FORM - Updated to handle both traditional and inline payments
export const buyForm = async (payload) => {
  console.log(payload);
  try {
    const res = await axios.post(
      `${BASE_URL}tenant/prospectivemember/creation_of_prospective_member/?payment_type=${payload.paymentType}`,
      payload.data
    );
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

// NEW: Get inline payment configuration
export const getInlinePaymentConfig = async (paymentType) => {
  try {
    const res = await axios.get(
      `${BASE_URL}tenant/prospectivemember/inline_payment_verification/get_payment_config/?payment_type=${paymentType}`
    );
    return res.data;
  } catch (e) {
    console.error(`Failed to get ${paymentType} payment config:`, e);
    throw new AxiosError(e);
  }
};

// NEW: Verify inline payment and create account
export const verifyInlinePayment = async (payload) => {
  console.log("Verifying inline payment:", payload);
  try {
    const endpoint =
      payload.paymentType === "interswitch"
        ? "verify_interswitch_payment"
        : "verify_remita_payment";

    const res = await axios.post(
      `${BASE_URL}tenant/prospectivemember/inline_payment_verification/${endpoint}/`,
      payload.data
    );
    return res.data;
  } catch (e) {
    console.error("Inline payment verification failed:", e);
    throw new AxiosError(e);
  }
};

// NEW: Test payment configuration (useful for debugging)
export const testPaymentConfig = async () => {
  try {
    const res = await axios.post(
      `${BASE_URL}tenant/prospectivemember/inline_payment_verification/test_payment_config/`
    );
    return res.data;
  } catch (e) {
    console.error("Payment config test failed:", e);
    throw new AxiosError(e);
  }
};

// NEW: Bulk verify payments (admin function)
export const bulkVerifyPayments = async (payments) => {
  try {
    const res = await axios.post(
      `${BASE_URL}tenant/prospectivemember/inline_payment_verification/bulk_verify_payment/`,
      { payments }
    );
    return res.data;
  } catch (e) {
    console.error("Bulk payment verification failed:", e);
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

//Verify Member
export const verifyMemberByMembersgipNo = async (payload) => {
  try {
    const res = await axios.post(
      `${BASE_URL}tenant/auth/ManageMemberValidation/`,
      payload
    );
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

// UTILITY FUNCTIONS for Payment Processing

/**
 * Generate unique transaction reference
 * @param {string} prefix - Payment provider prefix (ISW, RMT, etc.)
 * @returns {string} - Unique transaction reference
 */
export const generateTransactionRef = (prefix = "TXN") => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substr(2, 9);
  return `${prefix}-${timestamp}-${random}`;
};

/**
 * Format amount for display
 * @param {number} amount - Amount in naira
 * @returns {string} - Formatted amount
 */
export const formatAmount = (amount) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount);
};

/**
 * Validate payment configuration
 * @param {object} config - Payment configuration object
 * @param {string} paymentType - Type of payment (remita, interswitch)
 * @returns {boolean} - Whether config is valid
 */
export const validatePaymentConfig = (config, paymentType) => {
  if (!config) return false;

  if (paymentType === "remita") {
    return !!(config.merchant_id && config.service_type_id);
  }

  if (paymentType === "interswitch") {
    return !!(config.merchant_code && config.pay_item_id);
  }

  return false;
};

/**
 * Handle payment errors with user-friendly messages
 * @param {Error} error - Error object
 * @param {string} paymentType - Type of payment
 * @returns {string} - User-friendly error message
 */
export const handlePaymentError = (error, paymentType) => {
  console.error(`${paymentType} payment error:`, error);

  if (error?.response?.data?.message?.error) {
    return error.response.data.message.error;
  }

  if (error?.message?.includes("Network")) {
    return "Network error. Please check your connection and try again.";
  }

  if (error?.message?.includes("timeout")) {
    return "Payment request timed out. Please try again.";
  }

  // Default error messages by payment type
  const defaultMessages = {
    remita: "Remita payment failed. Please try again.",
    interswitch: "Interswitch payment failed. Please try again.",
    paystack: "Paystack payment failed. Please try again.",
    flutterwave: "Flutterwave payment failed. Please try again.",
  };

  return defaultMessages[paymentType] || "Payment failed. Please try again.";
};

/**
 * Log payment events for debugging
 * @param {string} event - Event type
 * @param {object} data - Event data
 */
export const logPaymentEvent = (event, data) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`[Payment Event: ${event}]`, data);
  }

  // In production, you might want to send this to your analytics service
  // analytics.track(event, data);
};

/**
 * Check if payment scripts are loaded
 * @param {string} paymentType - Type of payment
 * @returns {boolean} - Whether payment script is loaded
 */
export const isPaymentScriptLoaded = (paymentType) => {
  if (paymentType === "remita") {
    return typeof window !== "undefined" && !!window.RmPaymentEngine;
  }

  if (paymentType === "interswitch") {
    return typeof window !== "undefined" && !!window.webpayCheckout;
  }

  return false;
};

/**
 * Load payment script dynamically
 * @param {string} paymentType - Type of payment
 * @returns {Promise} - Promise that resolves when script is loaded
 */
export const loadPaymentScript = (paymentType) => {
  return new Promise((resolve, reject) => {
    if (isPaymentScriptLoaded(paymentType)) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.async = true;

    if (paymentType === "remita") {
      script.src =
        "https://login.remita.net/payment/v1/remita-pay-inline.bundle.js";
    } else if (paymentType === "interswitch") {
      script.src = "https://newwebpay.qa.interswitchng.com/inline-checkout.js";
    } else {
      reject(new Error(`Unsupported payment type: ${paymentType}`));
      return;
    }

    script.onload = () => {
      // Wait a bit for the script to initialize
      setTimeout(() => {
        if (isPaymentScriptLoaded(paymentType)) {
          resolve();
        } else {
          reject(new Error(`${paymentType} script failed to initialize`));
        }
      }, 100);
    };

    script.onerror = () => {
      reject(new Error(`Failed to load ${paymentType} script`));
    };

    document.body.appendChild(script);
  });
};
