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
    const res = await publicCmsRequest.post(`/payments/initialize/`, payload);
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
export const getEventBanner = async () => {
  try {
    const res = await publicCmsRequest.get(`/events/event-banner/`);
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

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
      `/payments/event-training-registration?gatewaytype=${payload.paymentGateWay}`,
      payload
    );
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//TRAININGS
export const getTrainingBanner = async () => {
  try {
    const res = await publicCmsRequest.get(`/trainings/training-banner/`);
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

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
    const res = await publicCmsRequest.post(`/aboutus/contact`, {
      ...payload,
      frontend_url: window.location.href,
    });
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

export const postEmailVerification = async ({ token, email }) => {
  try {
    const res = await publicCmsRequest.post(`/aboutus/contact/verify`, {
      token,
      email,
    });
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

export const newsletterUIGet = async () => {
  const res = await publicCmsRequest.get("/services/newsletter-ui/");
  return res.data;
};

// EVENT AND MEDIA
export const eventAndMediaGet = async () => {
  const res = await publicCmsRequest.get("/events/event-media/");
  return res.data;
};

// BANNERS
export const whyJoinBannerGet = async () => {
  const res = await publicCmsRequest.get("/membership/why-join-banner/");
  return res.data;
};

export const joinStepBannerGet = async () => {
  const res = await publicCmsRequest.get("/membership/join-step-banner/");
  return res.data;
};

export const ourMembersBannerGet = async () => {
  const res = await publicCmsRequest.get("/membership/our-members-banner/");
  return res.data;
};

export const sectorialBannerGet = async () => {
  const res = await publicCmsRequest.get("/structure/sectorial-banner/");
  return res.data;
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

//PVC-Services
export const getServicesBanner = async () => {
  try {
    const res = await publicCmsRequest.get(`services/service-banner/`);
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

export const getAllServicesPVC = async (params) => {
  try {
    const res = await publicCmsRequest.get(`services/all-services/public`, {
      params,
    });
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//FOOTER CONTENT
export const getFooterContentPublic = async () => {
  try {
    const res = await publicCmsRequest.get(`/homepage/footer/content/`);
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

export const getSlidersApi = async () => {
  const resp = await publicCmsRequest.get(
    "/homepage/add-slider/get_slider/?page_size=20"
  );

  return resp.data.results;
};
//PVC-Homepage
export const getHomepagePVC = async () => {
  try {
    const res = await publicCmsRequest.get(`/membership/home-main/`);
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//PVC-Why we are unique
export const getWhyWeAreUnique = async () => {
  try {
    const res = await publicCmsRequest.get(
      `/membership/why-we-are-unique/public`
    );
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//PVC-AboutUs

//history
export const getAboutHistoryPVC = async () => {
  try {
    const res = await publicCmsRequest.get(`/aboutus/history`);
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//advocacy
export const getAboutAdvocacyPVC = async () => {
  try {
    const res = await publicCmsRequest.get(`/aboutus/advocacy`);
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//sector
export const getAboutSectorPVC = async () => {
  try {
    const res = await publicCmsRequest.get(`/aboutus/affilliate`);
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//Our Executives
export const getAboutOurExecutivesPVC = async () => {
  try {
    const res = await publicCmsRequest.get(`/aboutus/our-executives/public`);
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//how we work
export const getAboutHowWeWorkPVC = async () => {
  try {
    const res = await publicCmsRequest.get(`/aboutus/how-we-work`);
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//where we operate
export const getAboutWhereWeOperatePVC = async () => {
  try {
    const res = await publicCmsRequest.get(`/aboutus/how-we-operate`);
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//where we operate branch
export const getAboutWhereWeOperateBranchesPVC = async () => {
  try {
    const res = await publicCmsRequest.get(
      `/aboutus/how-we-operate/branch/public`
    );
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//where we operate office
export const getAboutWhereWeOfficesPVC = async () => {
  try {
    const res = await publicCmsRequest.get(
      `/aboutus/how-we-operate/office/public`
    );
    return res.data;
  } catch (e) {
    throw new AxiosError(e);
  }
};

//AGM Revamped Section
export const getAgmHomepage = async () => {
  try {
    const res = await publicCmsRequest.get(`/agmcms/homepage`);
    return res.data;
  } catch (error) {
    throw new AxiosError(error);
  }
};

export const getAgmProgrammePage = async () => {
  try {
    const res = await publicCmsRequest.get(`/agmcms/programme`);
    return res.data;
  } catch (error) {
    throw new AxiosError(error);
  }
};

export const getAgmVenuePage = async () => {
  try {
    const res = await publicCmsRequest.get(`/agmcms/venue`);
    return res.data;
  } catch (error) {
    throw new AxiosError(error);
  }
};

export const getAgmExhibitionPage = async () => {
  try {
    const res = await publicCmsRequest.get(`/agmcms/exhibition`);
    return res.data;
  } catch (error) {
    throw new AxiosError(error);
  }
};

export const getAllAgmPrograms = async () => {
  try {
    const res = await publicCmsRequest.get(`/agmcms/program-public`);
    return res.data;
  } catch (error) {
    throw new AxiosError(error);
  }
};

export const getAllAgmSpeakers = async () => {
  try {
    const res = await publicCmsRequest.get(`/agmcms/speakers-public`);
    return res.data;
  } catch (error) {
    throw new AxiosError(error);
  }
};

export const getAllAgmPreviousExhibitionImages = async () => {
  try {
    const res = await publicCmsRequest.get(
      `/agmcms/previous-exhibition-images-public`
    );
    return res.data;
  } catch (error) {
    throw new AxiosError(error);
  }
};

export const getAllAgmFaqs = async () => {
  try {
    const res = await publicCmsRequest.get(`/agmcms/faq-public`);
    return res.data;
  } catch (error) {
    throw new AxiosError(error);
  }
};

export const getAGMEvent = async () => {
  try {
    const res = await publicCmsRequest.get(`/events/get-agm-event`);
    return res.data;
  } catch (error) {
    throw new AxiosError(error);
  }
};

export const getMrcContactPageDetails = async () => {
  try {
    const res = await publicCmsRequest.get(`/structure/mrc-contact`);
    return res.data;
  } catch (error) {
    throw new AxiosError(error);
  }
};

export const getAllAdverts = async () => {
  try {
    const res = await publicCmsRequest.get(`/membership/advertisement-public`);
    return res.data;
  } catch (error) {
    throw new AxiosError(error);
  }
};
