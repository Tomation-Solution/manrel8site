import React, { useState } from "react";
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
  getServicesBanner,
  postServiceRequest,
} from "../../utils/csm-api-calls";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import OurServiceImage from "../../images/new-images/OurServicesNewImage2.jpeg";

function Services() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  const schema = yup.object({
    name: yup.string().required("fullname is a required field"),
    email: yup.string().email().required(),
    type: yup.string().required("type is a required field"),
    service: yup.string().required("service is a required field"),
    company_name: yup.string().required("company name is a required field"),
    message: yup.string().required(),
  });

  const servicesQueryResult = useQuery(
    ["all-service-request"],
    () => getAllServicesPVC({}),
    {
      select: (data) => data.data,
      refetchOnWindowFocus: false,
    }
  );

  const servicesDropdownResult = useQuery(
    ["dropdown-service-request", search, type],
    () => getAllServicesPVC({ search, type }),
    {
      select: (data) => data.data,
      refetchOnWindowFocus: false,
    }
  );

  const servicesBannerResult = useQuery("service-banner", getServicesBanner, {
    select: (data) => {
      console.log(data);

      return data;
    },
    refetchOnWindowFocus: false,
  });

  const {
    register,
    setValue,
    handleSubmit,
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
      toast.success("service request submitted");
    },
    onError: () => {
      toast.error("failed to submit service request");
    },
  });

  const onSubmitHandler = (data) => {
    mutate(data);
  };

  const handleTypeChange = (e) => {
    const selected = e.target.value;
    setType(selected);
    setValue("type", selected);
  };

  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className="services-services">
          <Subscribe />
          <NewNavBar />
          <NewImageBanner
            header={"Services"}
            image={servicesBannerResult.data?.banner_image || OurServiceImage}
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
                <p
                  dangerouslySetInnerHTML={{
                    __html: servicesBannerResult.data?.core_desc,
                  }}
                ></p>
              </div>
              <div className="services-wrap diff">
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
              </div>
              <div className="services-head">
                <h1>Manufacturers Resource Centre (MRC) Services</h1>
                <p
                  dangerouslySetInnerHTML={{
                    __html: servicesBannerResult.data?.mrc_desc,
                  }}
                ></p>
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
                <p
                  dangerouslySetInnerHTML={{
                    __html: servicesBannerResult.data?.mpdcl_desc,
                  }}
                ></p>
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
                  <FormError>{errors.type?.message}</FormError>
                  <h4>Service Type</h4>
                  <select
                    style={{
                      width: "100%",
                      padding: "1rem",
                      borderRadius: "5px",
                    }}
                    onChange={handleTypeChange}
                    value={type}
                  >
                    <option value="">Select Type</option>
                    <option value="CORE">CORE</option>
                    <option value="MRC">MRC</option>
                    <option value="MPDCL">MPDCL</option>
                  </select>
                  {/* <input type="text" {...register("type")} /> */}
                </div>

                <div className="services-card">
                  <FormError>{errors.service?.message}</FormError>
                  <h4>Service</h4>
                  <input
                    type="text"
                    {...register("service")}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setValue("service", e.target.value);
                    }}
                    placeholder="Search for a service"
                  />
                  <div
                    style={{
                      position: "relative",
                      background: "white",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      maxHeight: "200px",
                      overflowY: "auto",
                    }}
                  >
                    {servicesDropdownResult?.data?.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          setValue("service", item.name);
                          setSearch(item.name);
                        }}
                        style={{
                          padding: "0.5rem",
                          borderBottom: "1px solid #eee",
                          cursor: "pointer",
                          backgroundColor: "#fff",
                        }}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
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
