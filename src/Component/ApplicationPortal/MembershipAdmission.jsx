import React from "react";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import Wall from "../Wall/Wall";
import "./ApplicationPortal.scss";
import Logo from "../../images/manlogo2.png";
import { Link, Navigate } from "react-router-dom";
import Subscribe from "../Subscribe/Subscribe";
import { toast } from "react-toastify";
import ApplicationNavBar from "./ApplicationNavBar";
import { useMutation, useQuery } from "react-query";
import {
  getFormOne,
  getMembershipPaymentUrl,
  getSubscriptionSummary,
} from "../../utils/api-calls";
import Loader from "../Loader/Loader";
import { formatMoney } from "../../utils/money-formatter";

const MembershipAdmission = () => {
  const user_data = JSON.parse(localStorage.getItem("userdata"));
  const {
    isLoading,
    isFetching,
    isError,
    data: renderdata,
  } = useQuery("subscription-summary", getSubscriptionSummary, {
    refetchOnWindowFocus: false,
    select: (data) => data.data,
  });

  const formoneQueryResult = useQuery("formone-details", getFormOne, {
    refetchOnWindowFocus: false,
    select: (data) => data.results[0].prospective_member_payment_info,
  });

  const payMutationResult = useMutation(getMembershipPaymentUrl, {
    onMutate: () => {
      toast.info("preparing payment gateway", {
        icon: false,
      });
    },
    onSuccess: (data) => {
      toast.success("paymet successfull redirecting", {
        icon: false,
      });
      if (data?.data?.data?.authorization_url) {
        window.open(data?.data?.data?.authorization_url, "_blank");
      }
    },
    onError: (error) => {
      toast.error("payment failed", {
        icon: false,
      });
    },
  });

  const payHandler = () => {
    payMutationResult.mutate({});
  };

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
          <ApplicationNavBar isMembershipAdmission={true} />

          {isFetching ||
          isLoading ||
          formoneQueryResult.isFetching ||
          formoneQueryResult.isLoading ? (
            <Loader
              loading={
                isLoading ||
                isFetching ||
                formoneQueryResult.isFetching ||
                formoneQueryResult.isLoading
              }
            />
          ) : !isError || !formoneQueryResult ? (
            <>
              <div className="membership-admission">
                <div className="has-paid">
                  <h1>
                    wow, you're almost there🥳. All thats left is to pay the
                    membership fee
                  </h1>
                  <p className="header">
                    Heres a break down of all the payment{" "}
                  </p>
                  <div className="payment-summary">
                    <p>
                      <span className="darken">
                        Annual General Meeting Levy:
                      </span>
                      {formatMoney(renderdata.AgmLevy)}
                    </p>
                  </div>

                  <div className="payment-summary">
                    <p>
                      <span className="darken">Legal Levy:</span>
                      {formatMoney(renderdata.legalLevy)}
                    </p>
                  </div>

                  <div className="payment-summary">
                    <p>
                      <span className="darken">
                        Buy Made-in-Nigeria Products Advert Levy:{" "}
                      </span>
                      {formatMoney(renderdata.madeInNgeiraProducts)}
                    </p>
                  </div>

                  {renderdata.is_in_lagos ? (
                    <div className="payment-summary">
                      <p>
                        <span className="darken">
                          Land Use Charge Levy{" "}
                          <small>(for only members in lagos)</small>:{" "}
                        </span>
                        {formatMoney(renderdata?.landUseCharge)}
                      </p>
                    </div>
                  ) : null}

                  <div className="payment-summary">
                    <p>
                      <span className="darken">
                        Special Development Levy{" "}
                        <small>
                          (based on turnover as stated in application form two)
                        </small>
                        :{" "}
                      </span>
                      {formatMoney(renderdata.specialLevy)}
                    </p>
                  </div>

                  <div className="payment-summary">
                    <p>
                      <span className="darken">
                        Annual Subscription Fee
                        <small>
                          (based on turnover as stated in application form two)
                        </small>
                        :
                      </span>
                      {formatMoney(renderdata.annualSub)}
                    </p>
                  </div>

                  <div className="payment-summary">
                    <p>
                      <span className="darken">Total: </span>
                      {formatMoney(renderdata.amountToBePaid)}
                    </p>
                  </div>

                  {formoneQueryResult.data.has_paid_subcription ? (
                    <div className="payment-summary no-bg">
                      <button disabled>
                        Payments already made, awaiting confirmation
                      </button>
                    </div>
                  ) : (
                    <div className="payment-summary no-bg">
                      <button onClick={payHandler}>Pay Fees</button>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="membership-admission">
              <div className="not-paid">
                <h1>
                  You seem to not be eligible to make payments for the
                  membership fees
                </h1>
                <p>This could be as a result of any of the following issues:</p>
                <ul>
                  <li>Application form one was not filled.</li>
                  <li>Application form two was not filled.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default MembershipAdmission;
