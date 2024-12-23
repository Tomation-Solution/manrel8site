import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../../Styles/theme/Theme";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import Wall from "../Wall/Wall";
import "./Services.scss";
import Subscribe from "../Subscribe/Subscribe";
import NewNavBar from "../NewNavBar/NewNavBar";
import { Link } from "react-router-dom";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormError } from "../NewEvents/FormComponents";
import { useMutation, useQuery } from "react-query";
import {
  getAllServicesPVC,
  postServiceRequest,
} from "../../utils/csm-api-calls";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import OurServiceImage from "../../images/new-images/OurServicesNewImage2.jpeg";

import Image1 from "../../images/download4.jpg";
import Image2 from "../../images/download3.jpg";
import Image3 from "../../images/download2.jpg";
import Image4 from "../../images/images1.jpg";
import Image5 from "../../images/images2.jpg";
import Image6 from "../../images/download4.jpg";
import Image7 from "../../images/download3.jpg";
import Image8 from "../../images/download2.jpg";
import Image9 from "../../images/images1.jpg";
import Image10 from "../../images/images2.jpg";
import Image11 from "../../images/download4.jpg";
import Image12 from "../../images/download3.jpg";
import Image13 from "../../images/download2.jpg";

function Services() {
  const schema = yup.object({
    name: yup.string().required("fullname is a required field"),
    email: yup.string().email().required(),
    company_name: yup.string().required("company name is a required field"),
    message: yup.string().required(),
  });

  const servicesQueryResult = useQuery(
    "all-service-request",
    getAllServicesPVC,
    {
      select: (data) => data.data,
      refetchOnWindowFocus: false,
    }
  );

  const {
    register,
    handleSubmit,
      reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company_name: "",
      message: "",
    },
  });

  const { mutate, isLoading } = useMutation(postServiceRequest, {
    onMutate: () => {
      toast.info("submitting service request");
    },
    onSuccess: () => {
      toast.success("Your request has been successfully submitted. You will be contacted soon");
      reset();
    },
    onError: () => {
      toast.error("failed to submit service request");
    },
  });

  const onSubmitHandler = (data) => {
    mutate(data);
  };

  // const services = [
  //   "Membership Services",
  //   "Public Policy Advocacy",
  //   "Specific intervention on Members and Sectoral Problems",
  //   "Economic Research and Analysis",
  //   "Monitoring and Analysing of Government Policies",
  //   "Preparation of Memoranda on Topical Industrial and Economic Issues",
  //   "Liaising Activities for Members",
  //   "Promotion and Organisaton of Trade Mission",
  //   "Promotion of Made-in-Nigeria Products",
  //   "Reconciliation and Harmonisation of Diverse interest of Members",
  //   "Industry Information Dissemination",
  //   "Seminars and Conferences",
  //   "Publications",
  // ];

  const services = [
    { name: "Membership Services", image: Image1 },
    { name: "Public Policy Advocacy", image: Image2 },
    { name: "Specific intervention on Members and Sectoral Problems", image: Image3 },
    { name: "Economic Research and Analysis", image: Image4 },
    { name: "Monitoring and Analysing of Government Policies", image: Image5 },
    { name: "Preparation of Memoranda on Topical Industrial and Economic Issues", image: Image6 },
    { name: "Liaising Activities for Members", image: Image7 },
    { name: "Promotion and Organisaton of Trade Mission", image: Image8 },
    { name: "Promotion of Made-in-Nigeria Products", image: Image9 },
    { name: "Reconciliation and Harmonisation of Diverse interest of Members", image: Image10 },
    { name: "Industry Information Dissemination", image: Image11 },
    { name: "Seminars and Conferences", image: Image12 },
    { name: "Publications", image: Image13 },
    // Add more services and images here
  ];

  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className="services-services">
          <Subscribe />
          <NewNavBar />
          <NewImageBanner
            header={"Services"}
            image={OurServiceImage}
            details={[
              "     The only sector-specific Business Membership Organization (BMO) structured to render advocacy services to its members.",
            ]}
          />
          <Loader loading={isLoading} />

          {servicesQueryResult.isLoading || servicesQueryResult.isFetching ? (
            <Loader
              loading={
                servicesQueryResult.isLoading || servicesQueryResult.isFetching
              }
            />
          ) : !servicesQueryResult.isError ? (
            <div className="services-newservices">
              <div className="services-head">
                <h1>Core Services</h1>
              </div>
              {/* <div className="services-wrap diff">
                {servicesQueryResult.data
                  .reverse()
                  .filter((item) => item.type === "CORE")
                  .map((item, index) => (
                    <div
                      className="services-card"
                      key={index}
                      style={{
                        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${item.image})`,
                      }}
                    >
                      <div className="services-overlay">
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
              </div> */}
              {/* Working Div for General Image */}
              {/* <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "20px",
                  margin: "20px",
                }}
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    style={{
                      position: "relative",
                      backgroundImage: `url(${OurServiceImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "300px",
                      borderRadius: "10px",
                      overflow: "hidden",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "20px",
                        left: "20px",
                        right: "20px",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      <h3
                        style={{
                          color: "white",
                          fontSize: "18px",
                          margin: "0",
                        }}
                      >
                        {service}
                      </h3>
                    </div>
                  </div>
                ))}
              </div> */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "20px",
                  margin: "20px",
                }}
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    style={{
                      position: "relative",
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "300px",
                      borderRadius: "5px",
                      overflow: "hidden",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "20px",
                        left: "20px",
                        right: "20px",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      <h3
                        style={{
                          color: "white",
                          fontSize: "18px",
                          margin: "0",
                        }}
                      >
                        {service.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="services-head">
                <h1>Manufacturers Resource Centre (MRC) Services</h1>
                <p>
                  The Manufacturers Resource Centre is the Business Solution arm
                  of MAN. The Manufacturers Resource Centre is dedicated to
                  proffering business solutions to MAN members, thus developing
                  their businesses, increase their market share and enhancing
                  production excellence.
                </p>
              </div>
              <div className="services-wrap">
                {servicesQueryResult.data
                  .filter((item) => item.type === "MRC")
                  .map((item, index) => (
                    <div
                      className="services-card"
                      key={index}
                      style={{
                        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${item.image})`,
                      }}
                    >
                      <div className="services-overlay">
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="services-btn-center">
                <Link to="/about-mrc">
                  <button>See More</button>
                </Link>
              </div>
              <div className="services-head">
                <h1>MAN Power Development Company Limited (MPDCL).</h1>
              </div>
              <div className="services-wrap dit">
                {servicesQueryResult.data
                  .filter((item) => item.type === "MPDCL")
                  .map((item, index) => (
                    <div
                      className="services-card"
                      key={index}
                      style={{
                        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${item.image})`,
                      }}
                    >
                      <div className="services-overlay">
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="services-btn-center">
                <Link to="/mpdcl">
                  <button>See More</button>
                </Link>
              </div>
            </div>
          ) : (
            <FormError>Can't Fetch Services</FormError>
          )}

          <div className="services-new_member">
            <div className="services-right">
              <div className="services-top">
                <h2>Request Service</h2>
                <p>Let's start by entering your information.</p>
                <p>All fields are required unless otherwise indicated.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="services-card">
                  <FormError>{errors.name?.message}</FormError>
                  <h4>Full name</h4>
                  <input type="text" {...register("name")} />
                </div>
                <div className="services-card">
                  <FormError>{errors.email?.message}</FormError>
                  <h4>Email Address</h4>
                  <input type="email" {...register("email")} />
                </div>
                <div className="services-card">
                  <FormError>{errors.company_name?.message}</FormError>
                  <h4>Company Name</h4>
                  <input type="text" {...register("company_name")} />
                </div>
                <div className="services-card">
                  <FormError>{errors.message?.message}</FormError>
                  <h4>Request Service</h4>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    {...register("message")}
                  ></textarea>
                </div>
                <div className="services-card">
                  <button>Request</button>
                </div>
              </form>
            </div>
          </div>
          <Wall />
          <Footer />
        </div>
      </UIProvider>
    </ThemeProvider>
  );
}

export default Services;
