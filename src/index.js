import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Reports from "./Component/Reports/Reports";
import reportWebVitals from "./reportWebVitals";
import News from "./Component/News/News";
import Members from "./Component/Members/Members";
import ExistingMembers from "./Component/Members/ExistingMembers";
import LatestMembers from "./Component/Members/LatestMembers";
import Services from "./Component/Services/Services";
import InsightMore from "./Component/InsightMore/App";
import Gallery from "./Component/Gallery/App";
import Events from "./Component/Events/Events";
// import History from "./Component/History/History";
import ScrollToTop from "./Scroll";
// import MembRequire from "./Component/Members/MembRequire";
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
import CodeofConduct from "./Component/NewAbout/CodeofConduct";
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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path='About' element={<About />} /> */}
      {/* <Route path="/exec-committee" element={<ExecutiveCommitee />} /> */}
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
      <Route path="/about/code-of-conduct" element={<CodeofConduct />} />
      <Route path="/about/private-sector" element={<PrivateSector />} />
      <Route path="/about/council-members" element={<NewCouncil />} />
      <Route path="/purchase-application" element={<PurchaseApplication />} />
      <Route path="/application-status" element={<ApplicationStatus />} />

      {/*
      New Join Page
      */}
      <Route path="/join-now-page" element={<JoinUsPage />} />
      <Route path="/make-payment" element={<MakePayment />} />
      <Route path="/app-portal" element={<ApplicationPortal />} />

      <Route path="/insight" element={<Insight />} />
      <Route path="/event-training" element={<NewEvents />} />
      <Route path="/training" element={<Training />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/about-mrc" element={<NewMRC />} />
      <Route path="/mrc-services" element={<MRCServices />} />
      <Route path="/mrc-contact" element={<MRCContact />} />

      {/* <Route path="/about" element={<History />} /> */}
      <Route path="/services" element={<Services />} />
      <Route path="/news" element={<News />} />
      <Route path="/events" element={<Events />} />
      <Route path="/become-membership" element={<Members />} />
      <Route path="/membership-requirement" element={<NewMemberRequire />} />
      <Route path="/existing-membership" element={<ExistingMembers />} />
      <Route path="/our-members" element={<LatestMembers />} />
      <Route path="/insight-more" element={<InsightMore />} />
      <Route path="/sectoral" element={<Sectoral />} />
      <Route path="/operate" element={<Operate />} />
      <Route path="/mrc" element={<Mrc />} />
      <Route path="/mpdcl" element={<Mpdcl />} />
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
