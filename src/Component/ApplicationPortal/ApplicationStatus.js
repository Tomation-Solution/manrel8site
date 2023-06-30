import React, { useEffect } from "react";
import "./ApplicationPortal.scss";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import Logo from "../../images/manlogo2.png";
import Wall from "../Wall/Wall";
import { Link, Navigate } from "react-router-dom";
import Subscribe from "../Subscribe/Subscribe";
import { useQuery } from "react-query";
import { getStatus } from "../../utils/api-calls";
import { toast } from "react-toastify";
import ApplicationNavBar from "./ApplicationNavBar";
import Loader from "../Loader/Loader";

const ApplicationStatus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const user_data = JSON.parse(localStorage.getItem("userdata"));

  const { isLoading, isFetching, isError, data } = useQuery(
    "get-status",
    getStatus,
    {
      refetchOnWindowFocus: false,
      select: (data) => data.data,
    }
  );

  if (!user_data || user_data.has_paid === false) {
    toast.error("Login to access this page");
    return <Navigate to={"/join-now-page"} />;
  }

  return (
    <div className="applicationPortal">
      <UIProvider>
        <Subscribe />
        <div className="logo">
          <Link to={"/"}>
            <img alt="" src={Logo} />
          </Link>
        </div>
        <h1 className="header">Application Status</h1>
        <div className="application-container">
          <ApplicationNavBar isStatusPage={true} />
          <form>
            {isLoading || isFetching ? (
              <Loader loading={isLoading || isFetching} />
            ) : !isError ? (
              <div className="status-track">
                <div className="status-text-con">
                  <div
                    className={`status-item ${
                      data === "approval_in_progress" ? "" : "dotted"
                    }`}
                  >
                    1
                  </div>
                  <p>Approval in Progress</p>
                </div>
                <div className="status-separator"></div>
                <div className="status-text-con">
                  <div
                    className={`status-item ${
                      data === "acknowledgement_of_application" ? "" : "dotted"
                    }`}
                  >
                    2
                  </div>
                  <p>Acknowledgement of Application</p>
                </div>
                <div className="status-separator"></div>
                <div className="status-text-con">
                  <div
                    className={`status-item ${
                      data === "inspection_of_factory_inspection"
                        ? ""
                        : "dotted"
                    }`}
                  >
                    3
                  </div>
                  <p>Factory Inspection</p>
                </div>

                <div className="status-separator"></div>
                <div className="status-text-con">
                  <div
                    className={`status-item ${
                      data ===
                      "review_of_factory_inspection_report_and_presentation_to_national_council"
                        ? ""
                        : "dotted"
                    }`}
                  >
                    4
                  </div>
                  <p>
                    Review of Factory Inspection Report and Presentation to
                    National Council
                  </p>
                </div>

                <div className="status-separator"></div>
                <div className="status-text-con">
                  <div
                    className={`status-item ${
                      data === "ready_for_presentation_of_national_council"
                        ? ""
                        : "dotted"
                    }`}
                  >
                    5
                  </div>
                  <p>Presentation to National Council</p>
                </div>

                <div className="status-separator"></div>
                <div className="status-text-con">
                  <div
                    className={`status-item ${
                      data === "final_approval" ? "" : "dotted"
                    }`}
                  >
                    6
                  </div>
                  <p>Final Approval</p>
                </div>
              </div>
            ) : (
              <h5>cant fetch status data</h5>
            )}
          </form>
        </div>
        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default ApplicationStatus;
