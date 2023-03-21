import React from "react";
import "./JoinNowForm.scss";
import { UIProvider } from "../../Ui";
import NewNavBar from "../NewNavBar/NewNavBar";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";

const JoinNowForm = () => {
  return (
    <div className="join-us-now">
      <UIProvider>
        <NewNavBar />
        <div className="form-container">
          <h1 className="main-header">APPLICATION FOR MEMBERSHIP</h1>
          <form>
            <h1>Company Details</h1>
            <label>
              Company Name
              <input type={"text"} />
            </label>
            <label>
              C.A.C. Reg No.
              <input type={"text"} />
            </label>
            <label>
              Tax Idetification Number (TIN)
              <input type={"text"} />
            </label>
            <label>
              Cooprate Office Address
              <input type={"text"} />
            </label>
            <label>
              Cooprate Office Address
              <input type={"text"} />
            </label>
            <div className="half-input">
              <label>
                Bus-Stop
                <input type={"text"} />
              </label>
              <label>
                City
                <input type={"text"} />
              </label>
            </div>
            <div className="half-input">
              <label>
                L.G
                <input type={"text"} />
              </label>
              <label>
                State
                <input type={"text"} />
              </label>
            </div>
            <label>
              Postal Address(if any)
              <input type={"text"} />
            </label>
            <label>
              Telephone No(s) (Including mobile)
              <input type={"text"} />
            </label>
            <label>
              Email Address
              <input type={"text"} />
            </label>
            <h1>Factory Details</h1>
            <label>
              Telephone No(s) (Including mobile)
              <input type={"text"} />
            </label>
            <h5>LEGAL STATUS OF COMPANY</h5>
            <div className="half-input left">
              (Mark In Appropriate Box)
              <label className="radio-btn">
                Sole Ownership
                <input className="radio-input" name="status" type={"radio"} />
              </label>
              <label className="radio-btn">
                Partnership
                <input className="radio-input" name="status" type={"radio"} />
              </label>
              <label className="radio-btn">
                Private Company
                <input className="radio-input" name="status" type={"radio"} />
              </label>
              <label className="radio-btn">
                Public Limited Company
                <input className="radio-input" name="status" type={"radio"} />
              </label>
            </div>
            <h1>NUMBER OF PERMANENT EMPLOYERS</h1>
            <h5>Nigerians</h5>
            <div className="half-input">
              <label>
                Male
                <input type={"text"} />
              </label>
              <label>
                Female
                <input type={"text"} />
              </label>
            </div>

            <h5>Expatriate</h5>
            <div className="half-input">
              <label>
                Male
                <input type={"text"} />
              </label>
              <label>
                Female
                <input type={"text"} />
              </label>
            </div>

            <h5>PRODUCT(S) MANUFACTURED</h5>
            <label>
              Products
              <input type={"text"} />
            </label>
            <label>
              SON/ISON/NAFDAC Certificate(if any)
              <input type={"text"} />
            </label>
            <label>
              <small>Products(extra field for more products, if any)</small>
              <textarea type={"text"} />
            </label>
            <label>
              SON/ISON/NAFDAC Certificate(if any)
              <input type={"text"} />
            </label>
            <label>
              <small>
                SON/ISON/NAFDAC Certificate(extra field for more certificates,
                if any)
              </small>
              <textarea type={"text"} />
            </label>

            <h5>MAJOR RAW MATERIALS USED</h5>
            <label>
              Imported(Indicate/HS Code)
              <input type={"text"} />
            </label>
            <label>
              <small>
                Imported(Indicate/HS Code)(extra field for imported details, if
                any)
              </small>
              <textarea type={"text"} />
            </label>
            <label>
              % of Local Raw Materials
              <input type={"text"} />
            </label>
            <label>
              <small>
                % of Local Raw Materials(extra field for more material details,
                if any)
              </small>
              <textarea type={"text"} />
            </label>

            <h1>SHARE CAPITAL</h1>
            <label>
              Local: NGN %
              <input type={"text"} />
            </label>
            <label>
              Foregin: NGN %
              <input type={"text"} />
            </label>

            <h1>OWNERSHIP STRUCTURE (Equity)</h1>
            <label>
              Local: NGN %
              <input type={"text"} />
            </label>
            <label>
              Foregin: NGN %
              <input type={"text"} />
            </label>

            <h1>TOTAL VALUE OF ASSETS</h1>
            <label>
              Land: NGN
              <input type={"text"} />
            </label>
            <label>
              Building: NGN
              <input type={"text"} />
            </label>
            <label>
              Others: NGN
              <input type={"text"} />
            </label>
            <label>
              Installed Capacity (In tons, kg, units, etc.)
              <input type={"text"} />
            </label>
            <label>
              Sales Turnover NGN (Current/Projected)
              <input type={"text"} />
            </label>

            <h5>ARE YOUR PRODUCTS EXPORTED (Tick as appropriate)</h5>
            <div className="half-input left">
              <label className="radio-btn">
                Yes
                <input className="radio-input" type={"radio"} />
              </label>
              <label className="radio-btn">
                No
                <input className="radio-input" type={"radio"} />
              </label>
            </div>

            <label>
              Companys Contact
              <input type={"text"} />
            </label>

            <label>
              Designation
              <input type={"text"} />
            </label>
            <label>
              Name of Company MD/CEO of the Company
              <input type={"text"} />
            </label>

            <div className="half-input center">
              <label>
                Signature
                <input type={"text"} />
              </label>

              <label>
                Date
                <input type={"date"} />
              </label>
            </div>

            <div className="undertaking">
              <h1>UNDERTAKING</h1>
              <p>
                We undertaking to pay promptly on demand annual subscriptions
                which due on 1st of each year and based on our annual turnover
                as reflected in Audited Accounts, copy (to be supplied to the
                Association) for the preceeding year, and also such levies as
                may be approved by the National or Branch of the Association.
              </p>
              <p className="top-border">Chief Executive</p>
            </div>
            <div className="btn-con">
              <button>SUBMIT</button>
            </div>
          </form>
        </div>
        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default JoinNowForm;
