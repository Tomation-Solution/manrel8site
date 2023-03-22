import React from "react";
import { useForm } from "react-hook-form";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import Wall from "../Wall/Wall";
import "./ApplicationPortal.scss";
import Logo from "../../images/manlogo2.png";

const ApplicationPortal = () => {
  // const {register, handleSubmit} = useForm()
  return (
    <div className="applicationPortal">
      <UIProvider>
        <div className="logo">
          <img alt="" src={Logo} />
        </div>
        <h1 className="header">Application Portal</h1>
        <div className="application-container">
          <div className="side-navigation">
            <div className="side-navigation-btn green">Application</div>
            <div className="side-navigation-btn">Application Status</div>
            <div className="side-navigation-btn">Log Out</div>
          </div>
          <form>
            <div className="status-track">
              <div className="status-item">1</div>
              <div className="status-separator"></div>
              <div className="status-item dotted">2</div>
            </div>
            <div className="half-input">
              <label>
                Name of Company
                <input type={"text"} />
              </label>
              <label>
                CAC Registration Number
                <input type={"text"} />
              </label>
            </div>
            <div className="half-input">
              <label>
                Tax Identification Number (TIN)
                <input type={"text"} />
              </label>
              <label>
                Corporate office Address
                <input type={"text"} />
              </label>
            </div>
            <div className="half-input">
              <label>
                Office Bus stop
                <input type={"text"} />
              </label>
              <label>
                Office City
                <input type={"text"} />
              </label>
            </div>
            <div className="half-input">
              <label>
                Office LGA
                <input type={"text"} />
              </label>
              <label>
                Office State
                <input type={"text"} />
              </label>
            </div>
            <div className="half-input">
              <label>
                Postal Address (If Any)
                <input type={"text"} />
              </label>
              <label>
                Telephone Number(s) Inc. Mobile
                <input type={"text"} />
              </label>
            </div>
            <div className="half-input">
              <label>
                Email Address
                <input type={"text"} />
              </label>
              <label>
                Website Address
                <input type={"text"} />
              </label>
            </div>
            <div className="half-input">
              <label>
                Email AddressFactory Details(Phone No., Email){" "}
                <input type={"text"} />
              </label>
              <label>
                Legal Status of Company
                <input type={"text"} />
              </label>
            </div>
            <div className="half-input">
              <label>
                Products Manufactured
                <input type={"text"} />
              </label>
              <label>
                SON/ ISON/NAFDAC Certificates (If Any)
                <input type={"text"} />
              </label>
            </div>

            <div className="add-more">
              <img src="" alt="" />
              <p>Add Product Manufactured</p>
            </div>

            <div className="half-input">
              <label>
                Major Raw Materials Used(Indicate if Impoted/HS Code)
                <input type={"text"} />
              </label>
              <label>
                % of Local Raw Materials
                <input type={"text"} />
              </label>
            </div>

            <div className="add-more">
              <img src="" alt="" />
              <p>Add Raw Materials Used</p>
            </div>

            <div className="half-input">
              <label>
                Number of Male Permanent Staff
                <input type={"text"} />
              </label>
              <label>
                Number of Female Permanent Staff
                <input type={"text"} />
              </label>
            </div>

            <div className="half-input">
              <label>
                Number of Male Expatriates
                <input type={"text"} />
              </label>
              <label>
                Number of Female Expatriates
                <input type={"text"} />
              </label>
            </div>

            <div className="half-input">
              <label>
                Email Address
                <input type={"text"} />
              </label>
              <label>
                Website Address
                <input type={"text"} />
              </label>
            </div>

            <div className="half-input">
              <label>
                Local Share Capital
                <input type={"text"} />
              </label>
              <label>
                Foreign Share Capital
                <input type={"text"} />
              </label>
            </div>

            <div className="half-input">
              <label>
                Ownership Structure Equity(local)
                <input type={"text"} />
              </label>
              <label>
                Ownership Structure Equity(Foreign)
                <input type={"text"} />
              </label>
            </div>

            <div className="half-input">
              <label>
                Total Value of Land Asset
                <input type={"text"} />
              </label>
              <label>
                Total Value of Land Asset
                <input type={"text"} />
              </label>
            </div>

            <div className="half-input">
              <label>
                Total Value of Other Asset
                <input type={"text"} />
              </label>
              <label>
                Installed capacity(In tons, Kg, etc)
                <input type={"text"} />
              </label>
            </div>
          </form>
        </div>
        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default ApplicationPortal;
