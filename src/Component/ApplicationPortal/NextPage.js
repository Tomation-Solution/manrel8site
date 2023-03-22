import React, { useEffect } from "react";
import UploadIcon from "../../images/new-images/UploadIcon.png";
import SubscriptionRates from "../../images/new-images/SubscriptionRates.png";

const NextPage = ({ backfn }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <form>
      <div className="status-track">
        <div className="status-item">1</div>
        <div className="status-separator"></div>
        <div className="status-item">2</div>
      </div>
      <div className="half-input spaced">
        <div className="upload-img-con">
          Corporate Affairs Commission (CAC) Forms C02 and C07
          <label className="upload-btn" htmlFor="file-input">
            <img alt="" src={UploadIcon} />
          </label>
          <input type="file" id="file-input" hidden />
        </div>

        <div className="upload-img-con">
          Company’s Certificate of Incorporation
          <label className="upload-btn" htmlFor="file-input">
            <img alt="" src={UploadIcon} />
          </label>
          <input type="file" id="file-input" hidden />
        </div>
      </div>

      <div className="half-input spaced">
        <div className="upload-img-con">
          A Covering Letter on the letter head of your company applying to be
          registered as a member of MAN, stating the breakdown of payments made
          and documents attached.
          <label className="upload-btn" htmlFor="file-input">
            <img alt="" src={UploadIcon} />
          </label>
          <input type="file" id="file-input" hidden />
        </div>

        <div className="upload-img-con">
          Copies of Duly Certified Audited Financial Statement for proceeding
          two (2) years or Business Plan for new companies
          <label className="upload-btn" htmlFor="file-input">
            <img alt="" src={UploadIcon} />
          </label>
          <input type="file" id="file-input" hidden />
        </div>
      </div>

      <div className="half-input spaced">
        <div className="upload-img-con">
          Photocopy of your receipt issued on purchase of Application Form.
          <label className="upload-btn" htmlFor="file-input">
            <img alt="" src={UploadIcon} />
          </label>
          <input type="file" id="file-input" hidden />
        </div>
      </div>

      <h5>
        On receipt of the above, the company will be inspected for verification
        of claims on the Application Form.
      </h5>

      <h1>Special Notice</h1>
      <p className="generic-text">
        All payments should be made vide draft or cheque in favour of
        Manufacturers Association of Nigeria. All payments at the point of
        registration are non-refundable
      </p>
      <p className="generic-text">
        All information fields on the application form must be duly completed
      </p>
      <p className="generic-text">
        Only completed form with complete document will be processed
      </p>
      <p className="generic-text">
        Subscription payable is based on Turnover of the company as contained in
        the certified audited accounts or projected in the business plan of new
        companies
      </p>
      <p className="generic-text">
        All application process must be completed within the year of application
      </p>
      <h1>REVISED SUBSCRIPTION RATES, EFFECTIVE JANUARY 1, 2021</h1>
      <div className="subscription-rates">
        <img alt="" src={SubscriptionRates} />
      </div>
      <div className="btn-con align-center">
        <button onClick={backfn}>Back</button>
        <button>Complete</button>
      </div>
    </form>
  );
};

export default NextPage;
