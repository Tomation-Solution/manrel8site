import React from "react";
import { ThemeProvider } from "@mui/system";
import { UIProvider } from "../../Ui";
import theme from "../../Styles/theme/Theme";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import Subscribe from "../Subscribe/Subscribe";
import "./Sectoral.scss";
import Vector from "../../images/Vector3.png";

import CarbonizedEnergy from "../../images/new-images/CarbonizedEnergy.jpeg";

import PowerFacilities1 from "../../images/new-images/Renew1.jpeg";
import PowerFacilities2 from "../../images/new-images/Renew2.jpeg";
import PowerFacilities3 from "../../images/new-images/RenewMore (3).jpeg";
import PowerFacilities4 from "../../images/new-images/mpdcl/PowerFacilities (4).png";
import PowerFacilities5 from "../../images/new-images/RenewMore (2).jpeg";
import PowerFacilities6 from "../../images/new-images/RenewMore (1).jpeg";
import PowerFacilities7 from "../../images/new-images/mpdcl/PowerFacilities (7).png";

import CapacityProg1 from "../../images/new-images/mpdcl/CapacityProg (1).png";
import CapacityProg2 from "../../images/new-images/mpdcl/CapacityProg (2).png";
import CapacityProg3 from "../../images/new-images/mpdcl/CapacityProg (3).png";
import NewNavBar from "../NewNavBar/NewNavBar";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import backImage from "../../images/new-images/SectoralBackGroundImage.jpeg";
import { useQuery } from "react-query";
import { getMPDCLApi } from "../../utils/api-calls2";
import  Preloader from '../Preloader/Preloader'
function Mpdcl() {
  const {isLoading,data} = useQuery('getMPDCLApi',getMPDCLApi)
  
  const sectoralList = [
    {
      image: PowerFacilities1,
      id: "1",
      content: "Rental Gas Captive Power Supply Project",
      details: [
        "Members desiring to switch from diesel power source to gas power source as a means of migrating to green and smart manufacturing are offered rental gas captive power projects solution. This helps to cut investing in acquisition of costly gas generators. MPDCL facilitate seamlessly transition without disrupting members manufacturing operation.",
      ],
    },
    {
      image: PowerFacilities2,
      id: "2",
      content: "MPDCL Power Supply Facilitation and Eligible Customer Services",
      details: [
        "Members that are interested in taking advantage of the Eligible Customer Policy can be supported by MPDCL in providing the facilitation services once they meet the eligibility criteria.",
      ],
    },
    {
      image: PowerFacilities3,
      id: "3",
      content: "Idu Industrial Cluster Abuja",
      details: [
        "The Idu Industrial cluster has a very poor power supply and the challenge is currently receiving attention by MPDCL and TCN whilst collaborating to facilitate the ring-fencing of the cluster as an Eligible Customer. This will guarantee steady power supply through drawing a TCN 132kV line into a new substation to be built by TCN.",
      ],
    },
    {
      image: PowerFacilities4,
      id: "4",
      content: "NERC Partial Activation Programme of NESI",
      details: [
        "The NERC partial activation programme allows some DisCos to leverage on partnerships for power supply to manufacturing industries. This initiative will allow areas with infrastructure deficit to access more electricity. MPDCL is collaborating with Ikeja Electricity Distribution Companies on member industries accessing 23+ hours/day power supply availability under the Partial Activation Programme of NESI",
      ],
    },
    {
      image: PowerFacilities5,
      id: "5",
      content: "Power and Energy Dialogue with MAN Branches",
      details: [
        "This is MPDCL special scheme to deepen relationship with MAN Branches and connect with DisCos as partners in progress to explore how industries challenges can be resolved at the DisCo level to achieve incremental improvement for more power supply to members within their franchise area.",
      ],
    },
    {
      image: PowerFacilities6,
      id: "6",
      content: "MAN-SUNREF Funds",
      details: [
        "Members interested in accessing the MAN-SUNREF $USD70million funds to develop their energy improvement projects, including energy optimization and energy efficiency plans are supported by MPDCL to make their documentation easier, especially those needing Power and Energy Audit which can be conducted in line with SUREF prescribed standards.",
      ],
    },
    {
      image: PowerFacilities7,
      id: "7",
      content: "MPDCL Energy Audit Exercise",
      details: [
        "MPDCL supports members with power and energy audit in a comprehensive way that details out the factorydiagnosis on energy utilization and wastages including recommendations on how to be more energy efficient.Savings and application of relevant technologies that will be useful for the process are offered as advice tomember factories after the exercise",
      ],
    },
  ];

  const capacityProg = [
    {
      image: CapacityProg1,
      id: "1",
      content: "National Power Training Institute of Nigeria (NAPTINI)",
      details: [
        "NAPTIN is set up by the Federal Government of Nigeria to develop expertise and skills for engineers and technicians within the power sector. MPDCL is collaborating with NAPTIN to take advantage of their experts’ resource and laboratories to jointly organize trainings in Lagos, Port Harcourt and Abuja or Kano.",
      ],
    },
    {
      image: CapacityProg2,
      id: "2",
      content: "Applied Engineering Technology Initiative Limited (AETI)",
      details: [
        "AETI, owners of Michael Stephen Training organisation, is a renowned specialist manufacturing automation training organization. The collaboration will focus on manufacturing engineering that would offer manufacturers smart manufacturing, automation training which would lead to energy savings, smart and efficient production including energy management.",
      ],
    },
    {
      image: CapacityProg3,
      id: "3",
      content: "Nigerian Electricity Management Safety Agency (NEMSA)",
      details: [
        "NEMSA is electricity management safety regulatory agency for the power sector and industries. MPDCL as MAN energy advocacy entity also cares about the safety of operators and electricity users in industries. Hence the need to create safety awareness and close the gaps that will under mind achievement of safe manufacturing at all-times thereby making the collaboration with the regulator imperative. The collaboration will also include organizing MAN/NEMSA Annual Industrial Safety Workshop for MAN member industries.",
      ],
    },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <UIProvider>
          <Preloader loading={isLoading}/>
          <div className="sectoral">
            <Subscribe />
            <NewNavBar />
            <NewImageBanner
              image={backImage}
              header={
                "Manufacturers Power Development Company Limited (MPDCL)."
              }
            />
            <div className="sect-body">
              <div className="cover">
                <div className="about">
                  <h1 style={{ color: "#2b3513" }}>Who We Are</h1>
                  <p style={{ color: "#2b3513" }}>
                    The Manufacturers Power Development Company Limited (MPDCL)
                    is a 100% wholly owned company of the Manufacturers
                    Association of Nigeria (MAN), as a Special Purpose Vehicle
                    to channel efforts towards manufacturers energy advocacy and
                    at the same time facilitate uninterrupted power supply and
                    provide necessary intervention on energy related challenges
                    members may be contending with.
                  </p>

                  <p style={{ color: "#2b3513" }}>
                    MPDCL also assist power project developers’ to access
                    members for engagement in various power supply services
                    while also supporting members’ to transit from fossil fuel
                    power supply sources to environmental friendly sources like
                    renewable energy which would reduce their carbon foot print
                    to embrace the new world order of smart and green
                    manufacturing by deploying environmental friendly
                    technology.
                  </p>
                </div>
                <div className="objectives">
                  <h1>Our Objectives</h1>
                  <p className="obj-left-text">
                    MPDCL achieves her objectives through action plans to
                    cushion the unbaiting perennial power supply challenges;
                  </p>
                  <div className="obj-items centered">
                    <div className="flex">
                      <img src={Vector} alt="" />
                      <p>
                        Initiatives and programmes that encourages members to
                        improve on good energy housekeeping and energy
                        management practices through energy efficiency as a way
                        of conserving power and be more cost effective.
                      </p>
                    </div>

                    <div className="flex">
                      <img src={Vector} alt="" />
                      <p>
                        Partner with credible Independent Power Project
                        Developers with financial well withal to establish
                        captive and distributed power generation solutions to
                        enable industrial clusters operate 24/7.
                      </p>
                    </div>

                    <div className="flex">
                      <img src={Vector} alt="" />
                      <p>
                        Initiate and organize trainings that will improve
                        capacity and competence of personnel especially in
                        energy management, energy efficiency, electrical,
                        mechanical and smart manufacturing for industries.
                      </p>
                    </div>
                  </div>
                </div>
                <h1 className="service-header">
                  The services below are offered by Manufacturers Power
                  Development Company Limited (MPDCL).
                </h1>
                <h2>Power Facilitation Activities</h2>
                <div className="wrap-g">
                  {data?.filter((d=>d.type==='POWER_FACILITATION')).map((item) => (
                    <div className="card" key={item.id}>
                      <div className="flex">
                        <img src={Vector} alt="" />
                        <h2 style={{ color: "#2b3513" }}>{item.header}</h2>
                      </div>
                      <p>{item.description}</p>
                      <img className="main-img" src={item.image} alt="" />
                    </div>
                  ))}
                </div>
                <h1 className="service-header" style={{ color: "#2b3513" }}>
                  Renewable Energy Service and Members Decarbonization
                  Initiatives
                </h1>
                <img
                  alt=""
                  src={CarbonizedEnergy}
                  style={{
                    marginBottom: "30px",
                    width: "100%",
                    height: "50vh",
                    objectFit: "cover",
                  }}
                />
                <p style={{ color: "#2b3513" }}>
                  With globalization shifting focus to environmentally friendly
                  technologies which now encourages smart and green
                  manufacturing, MPDCL is technically positioned to support
                  manufacturers to access cost effective renewable energy power
                  supply solutions like; deploying Tier 1 Solar PV
                  components/equipment with installation on, either their
                  office/factory roof tops or ground mounted, with good quality
                  inverters and Battery Storages Systems (BSS) which comes with
                  the benefits of funding without members making any capital
                  contributions especially if the project capacity is above 1MW.
                  Such projects help to reduce member carbon print and Green
                  House Gas emission (GHGE).{" "}
                </p>

                <p style={{ color: "#2b3513" }}>
                  MPDCL also partners and facilitates other renewable energy
                  resources like;
                </p>

                <p style={{ color: "#2b3513" }}>
                  a. Biomass (on waste-to-wealth scheme) to eliminate urban
                  waste
                </p>
                <p style={{ color: "#2b3513" }}>
                  b. Small Hydro Power Projects of about 1MW capacity to supply
                  power to factories in good proximity to a flowing river.
                </p>

                <div className="thrust" style={{ color: "#2b3513" }}>
                  <h3>MAN Annual Energy Secuity Summit</h3>

                  <p style={{ color: "#2b3513" }}>
                    This is MPDCL flagship annual event where players in NESI
                    (including other Captive Power Solution providers and
                    renewable energy solution provider and gas suppliers) will
                    converge to brainstorm specifically on energy adequacy for
                    manufacturers to explore guaranteeing electricity adequacy
                    for industries in Nigeria. The objective is to act as
                    accountability forum to measure how both GenCos and DisCos
                    support industries access to steady and uninterrupted
                    energy.
                  </p>

                  <h3 style={{ color: "#2b3513" }}>
                    Human Capacity Building Programmes
                  </h3>

                  <p style={{ color: "#2b3513" }}>
                    Good energy and electricity housekeeping leads to energy
                    efficiency. To be up to speed with the latest technologies,
                    the need to close the gaps that is creating poor energy
                    management has become imperative especially now that energy
                    cost is hitting the roof. MPDCL is therefore supporting
                    member industries with training programmes in partnership
                    with leading training institutions and private entities.
                  </p>

                  <p style={{ color: "#2b3513" }}>
                    The trainings are structured to attain in-house quality
                    service delivery in relevant engineering, manufacturing or
                    production. The programmes will be supported with annual
                    training calendars with provision for in-plant training with
                    the following partners;
                  </p>
                </div>
                <div className="wrap-g">
                  {data?.filter((d=>d.type==='RENEWABLE_ENERGY')).map((item) => (
                    <div className="card" key={item.id}>
                      <div className="flex">
                        <img src={Vector} alt="" />
                        <h2>{item.header}</h2>
                      </div>
                      <p>{item.description}</p>
                      <img className="main-img" src={item.image} alt="" />
                    </div>
                  ))}
                </div>
                <div className="contact-info">
                  <h1 className="" style={{ color: "#2b3513" }}>
                    Contact Us
                  </h1>
                  <p style={{ color: "#2b3513", fontSize: "18px" }}>
                    Manufacturers Power Development Company Limited (MPDCL)
                  </p>
                  <p
                    style={{
                      color: "#2b3513",
                      fontSize: "18px",
                      margin: "5px 0px",
                    }}
                  >
                    <span style={{ fontWeight: 500, marginRight: "10px" }}>
                      Address:
                    </span>
                    Manufacturers Power Development Company Limited (MPDCL)
                  </p>
                  <p
                    style={{
                      color: "#2b3513",
                      fontSize: "18px",
                      margin: "5px 0px",
                    }}
                  >
                    <span style={{ fontWeight: 500, marginRight: "10px" }}>
                      Phone:
                    </span>
                    0802 307 6531, 01-4542700, 01-4542701, 01-4542702
                  </p>
                  <p
                    style={{
                      color: "#2b3513",
                      fontSize: "18px",
                      margin: "5px 0px",
                    }}
                  >
                    <span style={{ fontWeight: 500, marginRight: "10px" }}>
                      Email:
                    </span>
                    co-ordinator.mpdcl@manufacturersnigeria.org
                  </p>
                </div>
              </div>
            </div>
            <Wall />
            <Footer />
          </div>
        </UIProvider>
      </ThemeProvider>
    </>
  );
}

export default Mpdcl;
