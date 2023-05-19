import { AxiosError } from "axios";
import { publicCmsRequest } from "./axios-utils";

//PUBLICATIONS
export const getPaidPublications = async () => {
  try {
    const res = await publicCmsRequest.get(
      `/publications/public/paid-publication`
    );
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

export const payForPublication = async (payload) => {
  try {
    const res = await publicCmsRequest.post(`/payments/publications`, payload);
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

export const getFreePublication = async () => {
  try {
    const res = await publicCmsRequest.get(`/publications/public`);
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

export const getPublicationType = async () => {
  try {
    const res = await publicCmsRequest.get(`/publications/type/public`);
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//NEWS
export const getNews = async () => {
  try {
    const res = await publicCmsRequest.get(`/news/public`);
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//REPORTS
export const getReports = async () => {
  try {
    const res = await publicCmsRequest.get(`/reports/public`);
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//Gallery
export const getGallery = async () => {
  try {
    const res = await publicCmsRequest.get(`/gallery/public`);
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//EVENTS
export const getEvents = async () => {
  try {
    const res = await publicCmsRequest.get(`/events/public`);
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

export const eventTrainingRegister = async (payload) => {
  try {
    const res = await publicCmsRequest.post(
      `/payments/event-training-registration`,
      payload
    );
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//TRAININGS
export const getTrainings = async () => {
  try {
    const res = await publicCmsRequest.get(`/trainings/public`);
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//Service Request
export const postServiceRequest = async (payload) => {
  try {
    const res = await publicCmsRequest.post(
      `/services/request-service`,
      payload
    );
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//Contact Us
export const postContactRequest = async (payload) => {
  try {
    const res = await publicCmsRequest.post(`/aboutus/contact`, payload);
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//NewLetter
export const postNewLetter = async (payload) => {
  try {
    const res = await publicCmsRequest.post(
      `/services/newsletter-subscription`,
      payload
    );
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//AGM API ENDPOINTS
//Members Registration
export const memberRegistration = async (payload) => {
  try {
    const res = await publicCmsRequest.post(
      `/payments/member-agm-registration`,
      payload
    );
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//Luncheon Prices
export const luncheonPricesGetAll = async () => {
  try {
    const res = await publicCmsRequest.get(`/payments/luncheon/public`);
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//Exhibitor boots
export const exhibitorBootsGetAll = async () => {
  try {
    const res = await publicCmsRequest.get(`/payments/exhibition-boot/public`);
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//Exhibitor registration
export const exhibitorRegistration = async (payload) => {
  try {
    const res = await publicCmsRequest.post(
      `/payments/exhibitor-agm-registration`,
      payload
    );
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//Exhibition participants
export const exhibitionParticipantsRegistration = async (payload) => {
  try {
    const res = await publicCmsRequest.post(
      `/payments/others-agm-registration`,
      payload
    );
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//Invitation Verification
export const InvitationVerification = async (payload) => {
  try {
    const res = await publicCmsRequest.post(
      `/payments/agm-invitation-verification`,
      payload
    );
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};
