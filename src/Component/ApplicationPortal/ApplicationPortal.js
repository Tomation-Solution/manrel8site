import React, { useEffect, useState } from "react";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import Wall from "../Wall/Wall";
import "./ApplicationPortal.scss";
import Logo from "../../images/manlogo2.png";
import NextPage from "./NextPage";
import { Link, Navigate } from "react-router-dom";
import Subscribe from "../Subscribe/Subscribe";

import PreviousPage from "./PreviousPage";
import { toast } from "react-toastify";
import ApplicationNavBar from "./ApplicationNavBar";

const ApplicationPortal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [next, setNext] = useState(false);

  const setNextHandler = () => {
    setNext(!next);
  };

  const user_data = JSON.parse(localStorage.getItem("userdata"));

  if (!user_data || user_data.has_paid === false) {
    toast.error("Login to access this page");
    return <Navigate to={"/join-now-page"} />;
  }

  return (
    <div className="applicationPortal">
      <UIProvider>
        <Subscribe />
        <div className="logo">
          <Link to="/">
            <img alt="" src={Logo} />
          </Link>
        </div>
        <h1 className="header">Application Portal</h1>
        <div className="application-container">
          <ApplicationNavBar isFormPage={true} />
          {!next ? (
            <PreviousPage nextfn={setNextHandler} />
          ) : (
            <NextPage backfn={setNextHandler} />
          )}
        </div>
        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default ApplicationPortal;
