import React from "react";
import { ThemeProvider } from "@mui/system";
import { UIProvider } from "../../Ui";
import theme from "../../Styles/theme/Theme";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import Subscribe from "../Subscribe/Subscribe";
import "./Sectoral.scss";
import Vector from "../../images/Vector.png";
import NewNavBar from "../NewNavBar/NewNavBar";
// import { operateData } from "./OperateData";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import {
  getAboutWhereWeOfficesPVC,
  getAboutWhereWeOperateBranchesPVC,
  getAboutWhereWeOperatePVC,
} from "../../utils/csm-api-calls";
import { useQuery } from "react-query";
import { FormError } from "../NewEvents/FormComponents";
import Loader from "../Loader/Loader";

function Operate() {
  const operateResult = useQuery(
    "all-about-operate",
    getAboutWhereWeOperatePVC,
    {
      select: (data) => data.data,
      refetchOnWindowFocus: false,
    }
  );
  const branchQueryResult = useQuery(
    "all-about-operate-branch",
    getAboutWhereWeOperateBranchesPVC,
    {
      select: (data) => data.data,
      refetchOnWindowFocus: false,
    }
  );
  const officeQueryResult = useQuery(
    "all-about-operate-office",
    getAboutWhereWeOfficesPVC,
    {
      select: (data) => data.data,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className="sectoral">
          <Subscribe />
          <NewNavBar />

          {operateResult.isLoading ||
          operateResult.isFetching ||
          branchQueryResult.isLoading ||
          branchQueryResult.isFetching ||
          officeQueryResult.isLoading ||
          officeQueryResult.isFetching ? (
            <Loader
              loading={
                operateResult.isLoading ||
                operateResult.isFetching ||
                branchQueryResult.isLoading ||
                branchQueryResult.isFetching ||
                officeQueryResult.isLoading ||
                officeQueryResult.isFetching
              }
            />
          ) : !operateResult.isError ||
            branchQueryResult.isError ||
            officeQueryResult.isError ? (
            <>
              <NewImageBanner
                image={operateResult.data.main_image}
                header={"Where we Operate"}
                details={["Contact information of our different offices"]}
              />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.367310454374!2d3.3413191932367914!3d6.6011929240879645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228ce24bd1d%3A0x5388ca4742e701eb!2sMAN%20House%2C%20Obafemi%20Awolowo%20Way%2C%20Ikeja%20101233%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1680258368303!5m2!1sen!2sng"
                width="100%"
                title="title1"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="sect-body">
                <div className="cover">
                  <div>
                    <h1 className="head-h1" style={{ color: "#2b3513" }}>
                      The Association has a National Secretariat
                    </h1>

                    <p
                      className="head"
                      style={{ margin: "20px 0px", color: "#2b3513" }}
                    >
                      {operateResult.data.national_secretariat}
                    </p>
                  </div>
                  <div className="corpor">
                    <div className="flex">
                      <img src={Vector} alt="" />
                      <h2 style={{ margin: "20px 0px", color: "#2b3513" }}>
                        MAN Corporate Offices
                      </h2>
                    </div>
                    <p style={{ color: "#2b3513" }}>
                      {operateResult.data.coorprate_office}
                    </p>
                  </div>
                  <div className="house">
                    {officeQueryResult.data.map((item, index) => (
                      <div className="card" key={index}>
                        <h1>{item?.name}</h1>
                        <p>{item?.address}</p>
                        <p>{item?.email}</p>
                        <p>{item?.phone_no}</p>
                        <p>{item?.website}</p>
                      </div>
                    ))}
                  </div>
                  <div className="corpor">
                    <div className="flex">
                      <img src={Vector} alt="" />
                      <h2 style={{ color: "#2b3513" }}>Branch Offices</h2>
                    </div>
                    <p style={{ color: "#2b3513" }}>
                      {operateResult.data.branch_text}
                    </p>
                  </div>
                  <div className="house">
                    {branchQueryResult.data.map((item, index) => (
                      <div className="card" key={index}>
                        <h1>{item.name}</h1>
                        <p style={{ wordBreak: "break-word" }}>
                          {item.manager_name}
                        </p>
                        <p style={{ wordBreak: "break-word" }}>{item.title}</p>
                        <p style={{ wordBreak: "break-word" }}>{item.email}</p>
                        <p style={{ wordBreak: "break-word" }}>
                          {item.address}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <FormError>Can't Fetch Data</FormError>
          )}

          <Wall />
          <Footer />
        </div>
      </UIProvider>
    </ThemeProvider>
  );
}

export default Operate;
