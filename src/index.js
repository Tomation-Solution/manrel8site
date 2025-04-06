import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";

import Reports from "./Component/Reports/Reports";
import News from "./Component/News/News";
import Members from "./Component/Members/Members";
import ExistingMembers from "./Component/Members/ExistingMembers";
import LatestMembers from "./Component/Members/LatestMembers";
import Services from "./Component/Services/Services";
import InsightMore from "./Component/InsightMore/App";
import Gallery from "./Component/Gallery/App";
import Events from "./Component/Events/Events";
import ScrollToTop from "./Scroll";
import Sectoral from "./Component/Sectoral/Sectoral";
import Operate from "./Component/Sectoral/Operate";
import Mrc from "./Component/Sectoral/Mrc";
import Mpdcl from "./Component/Sectoral/Mpdcl";
import Publications from "./Component/Publications/Publications";
import PublicationDetails from "./Component/Publications/PublicationDetails";
import NewsDetails from "./Component/News/NewsDetails";
import GalleryDetails from "./Component/Gallery/GalleryDetails/GalleryDetails";
import ReportsDetails from "./Component/Reports/ReportsDetails";
import NewAbout from "./Component/NewAbout/NewAbout";
import AdvocacyAchievements from "./Component/NewAbout/AdvocacyAchievements";
import PrivateSector from "./Component/NewAbout/PrivateSector";
import NewCouncil from "./Component/NewAbout/NewCouncil/NewCouncil";
import Insight from "./Component/Insights/Insight";
import NewEvents from "./Component/NewEvents/NewEvents";
import Training from "./Component/Training/Training";
import FAQ from "./Component/FAQ/FAQ";
import NewMemberRequire from "./Component/NewMemberRequire/NewMemberRequire";
import NewMRC from "./Component/NewMRC/NewMRC";
import MRCServices from "./Component/NewMRC/MRCServices";
import MRCContact from "./Component/NewMRC/MRCContact";
import JoinUsPage from "./Component/JoinUsPage/JoinUsPage";
import PurchaseApplication from "./Component/PurchaseApplication/PurchaseApplication";
import MakePayment from "./Component/PurchaseApplication/MakePayment";
import ApplicationPortal from "./Component/ApplicationPortal/ApplicationPortal";
import ApplicationStatus from "./Component/ApplicationPortal/ApplicationStatus";
import { DashBoard } from "./Component/DashBoard/DashBoard";
import HowWeWork from "./Component/NewAbout/HowWeWork";
import PaidPublications from "./Component/PaidPublications/PaidPublications";
import ProspectiveMemberLogin from "./Component/ProspectiveMemberLogin/ProspectiveMemberLogin";
import SingleNews from "./Component/SingleNews/SingleNews";
import MembershipAdmission from "./Component/ApplicationPortal/MembershipAdmission";
import ScrollTooTop from "./Component/ScrollTooTop/ScrollTooTop";
import RevampedEventPage from "./RevampedEventSection/RevampedEventPage";
import {
  REVAMP_EVENTS_BASE_EVENT_URL,
  revampedEventNavigationItems,
} from "./constants/revamped_events_constants";

import RevampedEventFAQ from "./RevampedEventSection/RevampedEventFAQ/RevampedEventFAQ";
import RevampEventHome from "./RevampedEventSection/RevampedEventHome/RevampEventHome";
import RevampedEventRegister from "./RevampedEventSection/RevampedEventRegister/RevampedEventRegister";
import RevampedEventGeneral from "./RevampedEventSection/RevampedEventGeneral/RevampedEventGeneral";
import RevampedEventExhibition from "./RevampedEventSection/RevampedEventExhibition/RevampedEventExhibition";
import RevampedEventSpecialGuest from "./RevampedEventSection/RevampedEventSpecialGuest/RevampedEventSpecialGuest";
import RevampedEventSpeaker from "./RevampedEventSection/RevampedEventSpeaker/RevampedEventSpeaker";
import RevampedEventHost from "./RevampedEventSection/RevampedEventHost/RevampedEventHost";
import RevampedEventHighlights from "./RevampedEventSection/RevampedEventHighlights/RevampedEventHighlights";
import RevampedEventVenue from "./RevampedEventSection/RevampedEventVenue/RevampedEventVenue";
import RevampEventSpeakerDetails from "./RevampedEventSection/RevampedEventSpeaker/RevampEventSpeakerDetails";

const client = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <QueryClientProvider client={client}>
      <ToastContainer />
      <ScrollTooTop />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* REVAMPED EVENTS */}

          <Route
            path={REVAMP_EVENTS_BASE_EVENT_URL}
            element={<RevampedEventPage />}
          >
            <Route index element={<RevampEventHome />} />

            <Route
              path={
                revampedEventNavigationItems.find(
                  (item) => item.title === "FAQS"
                ).link
              }
              element={<RevampedEventFAQ />}
            />

            {/* PUT ALL YOUR LINKS HERE*/}

            {/* MAKE THE LINKS SIMILAR WITH THIS */}

            <Route
              // path="/revamped-events/register"
              path={
                revampedEventNavigationItems.find(
                  (item) => item.title === "register"
                ).link
              }
              element={<RevampedEventRegister />}
            />

            <Route
              // path="/revamped-events/speaker"
              path={
                revampedEventNavigationItems.find(
                  (item) => item.title === "speaker(s)"
                ).link
              }
              element={<RevampedEventSpeaker />}
            />

            <Route
              // path="/revamped-events/speaker"
              path={
                revampedEventNavigationItems.find(
                  (item) => item.title === "speaker(s)"
                ).link + "/details/:id"
              }
              element={<RevampEventSpeakerDetails />}
            />

            <Route
              // path="/revamped-events/general"
              path={
                revampedEventNavigationItems.find(
                  (item) => item.title === "programme"
                ).link
              }
              element={<RevampedEventGeneral />}
            />
            <Route
              // path="/revamped-events/exhibition"
              path={
                revampedEventNavigationItems.find(
                  (item) => item.title === "exhibition"
                ).link
              }
              element={<RevampedEventExhibition />}
            />

            <Route
              path="/revamped-events/specialguest"
              element={<RevampedEventSpecialGuest />}
            />
            <Route
              path="/revamped-events/host"
              element={<RevampedEventHost />}
            />
            <Route
              path="/revamped-events/hightlight/:id"
              element={<RevampedEventHighlights />}
            />
            <Route
              // path="/revamped-events/venue"
              path={
                revampedEventNavigationItems.find(
                  (item) => item.title === "venue"
                ).link
              }
              element={<RevampedEventVenue />}
            />

            {/* PUT ALL YOUR LINKS HERE*/}
          </Route>

          {/* REVAMPED EVENTS */}

          <Route path="/" element={<App />} />
          <Route path="/publications" element={<Publications />} />
          <Route
            path="/publications-details/:id"
            element={<PublicationDetails />}
          />
          <Route path="/news-details/:id" element={<NewsDetails />} />
          <Route path="/gallery-details/:id" element={<GalleryDetails />} />

          <Route path="/report-details/:id" element={<ReportsDetails />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="/about" element={<NewAbout />} />
          <Route
            path="/about/advocacy-achievements"
            element={<AdvocacyAchievements />}
          />
          <Route path="/about/private-sector" element={<PrivateSector />} />
          <Route path="/about/council-members" element={<NewCouncil />} />
          <Route path="/about/how-we-work" element={<HowWeWork />} />
          <Route
            path="/purchase-application"
            element={<PurchaseApplication />}
          />
          <Route path="/application-status" element={<ApplicationStatus />} />
          <Route
            path="/membership-admission"
            element={<MembershipAdmission />}
          />
          <Route path="/dashboard" element={<DashBoard />} />

          {/*
      New Join Page
      */}
          <Route path="/join-now-page" element={<JoinUsPage />} />
          <Route path="/make-payment" element={<MakePayment />} />
          <Route path="/app-portal" element={<ApplicationPortal />} />

          <Route path="/media_event" element={<Insight />} />
          <Route path="/event-training" element={<NewEvents />} />
          <Route path="/training" element={<Training />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about-mrc" element={<NewMRC />} />
          <Route path="/mrc-services" element={<MRCServices />} />
          <Route path="/mrc-contact" element={<MRCContact />} />

          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/become-membership" element={<Members />} />
          <Route
            path="/membership-requirement"
            element={<NewMemberRequire />}
          />
          <Route
            path="/prospective-member-login"
            element={<ProspectiveMemberLogin />}
          />
          <Route path="/single-news/:id" element={<SingleNews />} />

          <Route path="/paid-publications" element={<PaidPublications />} />
          <Route path="/existing-membership" element={<ExistingMembers />} />
          <Route path="/our-members" element={<LatestMembers />} />
          <Route path="/insight-more" element={<InsightMore />} />
          <Route path="/sectoral" element={<Sectoral />} />
          <Route path="/operate" element={<Operate />} />
          <Route path="/mrc" element={<Mrc />} />
          <Route path="/mpdcl" element={<Mpdcl />} />
        </Routes>
      </BrowserRouter>
      {/* <ReactQueryDevtools position="bottom-right" /> */}
    </QueryClientProvider>
  </>
);
reportWebVitals();
