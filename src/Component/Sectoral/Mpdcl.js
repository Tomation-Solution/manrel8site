import React, { useState } from "react";
import { ThemeProvider } from "@mui/system";
import { UIProvider } from "../../Ui";
import theme from "../../Styles/theme/Theme";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Subscribe from "../Subscribe/Subscribe";
import "./Sectoral.scss";
import Vector from "../../images/Vector.png";

import NoPicture from "../../images/new-images/executivesImg/NoPicture.png";

import Board1 from "../../images/new-images/board/Board (1).png";
import Board2 from "../../images/new-images/board/Board (2).png";
import Board3 from "../../images/new-images/board/Board (3).png";
import Board4 from "../../images/new-images/board/Board (4).png";

import PowerFacilities1 from "../../images/new-images/mpdcl/PowerFacilities (1).png";
import PowerFacilities2 from "../../images/new-images/mpdcl/PowerFacilities (2).png";
import PowerFacilities3 from "../../images/new-images/mpdcl/PowerFacilities (3).png";
import PowerFacilities4 from "../../images/new-images/mpdcl/PowerFacilities (4).png";
import PowerFacilities5 from "../../images/new-images/mpdcl/PowerFacilities (5).png";
import PowerFacilities6 from "../../images/new-images/mpdcl/PowerFacilities (6).png";
import PowerFacilities7 from "../../images/new-images/mpdcl/PowerFacilities (7).png";

import RenewEng from "../../images/new-images/mpdcl/RenewEng.png";

import CapacityProg1 from "../../images/new-images/mpdcl/CapacityProg (1).png";
import CapacityProg2 from "../../images/new-images/mpdcl/CapacityProg (2).png";
import CapacityProg3 from "../../images/new-images/mpdcl/CapacityProg (3).png";
import MpdclModal from "../Mpdcl-Modal/MpdclModal";

function Mpdcl() {
  const sectoralList = [
    {
      image: PowerFacilities1,
      id: "1",
      content: "Rental Captive Power Supply Project",
      details: [
        "Rental Captive Power Supply ProjectThe rental captive power projects are designed for members that wants to switch from diesel powerto gas power source towards migrating to green manufacturing. MPDCL supports members toseamlessly transit without disrupting their manufacturing operation and we are currently doing thatfor;",
        "➢ D.T.O Industries Ltd at Ogijo: with installed capacity to off-take 2.5MW but will be startingwith 1MW as phase 1, and the project will be commissioned in Q3, 2023.",
      ],
    },
    {
      image: PowerFacilities2,
      id: "2",
      content: "MPDCL Power Supply Facilitation and Eligible Customer Services",
      details: [
        "MPDCL Power Supply Facilitation and Eligible Customer ServicesMPDCL assists members that are interested in migrating as Eligible Customer by providingfacilitation services once they meet the criteria. Some of the ongoing facilitation supports are;",

        "a) Eleganza Industrial City, along Lekki-Epe Expressway:",

        "b) Aarti Steel Industries at Otta; Aarti Steel are interested in applying for the NERC EligibleCustomer Permit.",
      ],
    },
    {
      image: PowerFacilities3,
      id: "3",
      content: "Idu Industrial Cluster Abuja",
      details: [
        "MPDCL facilitating and working with TCN on steady power supply to Idu Industrial cluster throughsupport and collaboration with TCN.",
      ],
    },
    {
      image: PowerFacilities4,
      id: "4",
      content: "NERC Partial Activation Programme of NESI",
      details: [
        "MPDCL is collaborating with Ikeja Electricity Distribution Companies on how industries could access23+ hours/day power supply availability under the Partial Activation Programme of NESI that allowssome DisCos to leverage on partnerships for power supply to manufacturing industries. This initiativewill allow areas with infrastructure deficiency to access more electricity. This is a win win relationshipwith any DisCos that will participate in this scheme because as more member access power supplyon one hand, the DisCo revenue generation would also increase on the other hand.",
      ],
    },
    {
      image: PowerFacilities5,
      id: "5",
      content: "Power and Energy Dialogue with MAN Branches",
      details: [
        "This is MPDCL special scheme to deepen relationship with MAN branches and connect with DisCosas partners in progress to explore how industries challenges can be resolved at the DisCo level toachievement improvement in power supply within the remit of a service level agreement that willlegally bind relationship where it will be applicable.",
      ],
    },
    {
      image: PowerFacilities6,
      id: "6",
      content: "MAN-SUNREF Funds",
      details: [
        "MPDCL facilitate members’ access to the MAN-SUNREF $USD70million funds targeted forindustries to develop their energy improvement projects, energy optimization and energy efficiencyplans.",
        "MPDCL and Research and Advocacy Division of MAN have successfully carried out sensitizationprogramme nationwide for members to have better understanding of the fund to take advantage ofit.",
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

  const renewEnergy = [
    {
      image: RenewEng,
      id: "1",
      content: "Exploring Carbon Credit for Members Benefit",
      details: [
        "With globalization shifting focus to environmentally friendly technologies that encourages smart andgreen manufacturing, MPDCL is interested in technically supporting manufacturers to access costeffective renewable energy power supply solutions like; deploying Tier 1 Solar PVcomponents/equipment with installation on either their office/factory roof tops or ground mounted,including good quality inverters and Battery Storages Systems (BSS) with benefits of funding andcarbon capture.MPDCL is also interested in working with interested technical partners in facilitating other renewableenergy resources like;a. Biomass (on waste-to-wealth scheme) to eliminate urban wasteb. Small Hydro projects of about 1MW capacity to supply power to factories in good proximityto a flowing river.",
      ],
    },
  ];

  const capacityProg = [
    {
      image: CapacityProg1,
      id: "1",
      content: "National Power Training Institute of Nigeria (NAPTINI)",
      details: [
        "National Power Training Institute of Nigeria (NAPTINI): is set up by the Federal Government ofNigeria to develop expertise and skills for engineers and technicians within the power sector. MPDCLis collaborating with NAPTIN to take advantage of their experts’ resource and laboratories to jointlyorganize trainings in Lagos, Port Harcourt and Abuja or Kano.Training objectives; to enrich and improve on the technical know-how on electricity management,energy efficiency and power supply economy for manufacturer’s technical teams.",
      ],
    },
    {
      image: CapacityProg2,
      id: "2",
      content: "Applied Engineering Technology Initiative Limited (AETI)",
      details: [
        "Applied Engineering Technology Initiative Limited (AETI): owners of Michael Stephen Trainingorganisation, is a renowned specialist manufacturing automation training organisation. Thecollaboration will focus on manufacturing engineering that would offer manufacturers smart manufacturing, automation training which would lead to energy savings, smart and efficientproduction including energy management.",
      ],
    },
    {
      image: CapacityProg3,
      id: "3",
      content: "Nigerian Electricity Management Safety Agency (NEMSA)",
      details: [
        "Nigerian Electricity Management Safety Agency (NEMSA): is electricity management safetyregulatory agency for the power sector and industries. MPDCL as MAN energy adequacy advocacyentity also cares about the safety of operators and electricity users. Hence the need to create safetyawareness and close the gaps that will under mind achievement of safe manufacturing at all-timesthereby making the collaboration with the regulator imperative. The awareness will be furthersupported with training through partnership with NEMSA approved training institutions both foreignand local. The collaboration will also include organizing MAN/NEMSA Annual Industrial SafetyWorkshop for MAN member industries.",
      ],
    },
  ];

  const theBoard = [
    { image: Board1, name: "Engr. Ibrahim Usman", title: "Board Chairman" },
    { image: "", name: "Alhaji Ali Madugu (mni)", title: "" },
    { image: Board2, name: "Chief John Aluya", title: "" },
    { image: Board3, name: "Chief John Aluya", title: "" },
    { image: "", name: "Engr. Reginald Odiah", title: "" },
    { image: "", name: "Otunba Francis Meshioye", title: "" },
    {
      image: Board4,
      name: "Mr Segun Ajayi-Kadir (mni)",
      title: "Director General MAN",
    },
    { image: "", name: "Mr. Ambrose Oruche", title: "Board Secretary" },
    { image: "", name: "Mr. Oweh O. Mba-Sam", title: "Ag. Managing Director" },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const showModalHandler = (values) => {
    setSelectedItem({ name: values.content, details: values.details });
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && (
        <MpdclModal
          name={selectedItem.name}
          details={selectedItem.details}
          closefn={() => setShowModal(!showModal)}
        />
      )}
      <ThemeProvider theme={theme}>
        <UIProvider>
          <div className="sectoral">
            <Subscribe />
            <NavBar location="about" />
            <div className="hero_image">
              <div className="cover">
                <h1>MAN Power Development Company Limited (MPDCL).</h1>
                <p>
                  The services below are offered by MAN Power Development
                  Company Limited (MPDCL).
                </p>
              </div>
            </div>
            <div className="sect-body">
              <div className="cover">
                <div className="about">
                  <h1>About MPDCL</h1>
                  <p>
                    The Manufacturers Power Development Company Limited (MPDCL)
                    is a 100% wholly owned SpecialPurpose Vehicle of the
                    Manufacturers Association of Nigeria (MAN), incorporated
                    with the Corporate AffairsCommission in 2007 as a Limited
                    Liability Company to channel efforts towards manufacturers
                    energyadequacy advocacy and at the same time facilitating
                    uninterrupted power supply and energy relatedchallenges
                    members may be contending with.
                  </p>

                  <p>
                    MPDCL also assist power project developers’ access members
                    for various power supply services and at thesame time
                    encourage the members’ transit from fossil fuel power supply
                    sources to environmental friendlysources like renewable
                    energy which would reduce their carbon foot print as the
                    world is embracing smartand green manufacturing.
                  </p>
                </div>

                <div className="objectives">
                  <p className="obj-left-text">
                    To achieve this mandates, MPDCL provides various power
                    supply interventions to cushion the unabated power supply
                    challenges which has been perennial and some of them are;
                  </p>
                  <div className="obj-items">
                    <div className="flex">
                      <img src={Vector} alt="" />
                      <p>
                        Encourage members to improve on good energy housekeeping
                        and energy management practicesthrough energy efficiency
                        initiatives as a way of conserving power and be more
                        cost effective sinceuninterrupted power supply is not
                        immediately achievable from the grid.
                      </p>
                    </div>

                    <div className="flex">
                      <img src={Vector} alt="" />
                      <p>
                        Partner with credible Independent Power Project
                        Developers with financial well withal to
                        establishcaptive and distributed power generation
                        solutions to enable industrial clusters or a
                        membercompany operate 24/7.
                      </p>
                    </div>

                    <div className="flex">
                      <img src={Vector} alt="" />
                      <p>
                        Organize trainings around energy management, energy
                        efficiency, electrical, mechanical and
                        smartmanufacturing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="thrust">
                  <h1>Corporate Thrust</h1>

                  <h3>Vision</h3>

                  <p>
                    To be manufacturers channel for energy adequacy advocacy and
                    continuously promoteinitiatives that would guarantee energy
                    adequacy for manufacturing at all times through energy
                    goodenergy housekeeping, energy management and energy
                    efficiency practices.
                  </p>

                  <h3>Mission</h3>

                  <p>
                    Engage with strategic partners that are leading energy
                    service providers to facilitate uninterrupted 24/7 power
                    supply and energy management service, and collaborate with
                    experienced professional training institutions for resource
                    availability for capacity building for member industries.
                  </p>

                  <h3>Core Values</h3>
                  <p>
                    Integrity and Courtesy in providing services to MAN member
                    industries
                  </p>
                </div>

                <div className="the-board">
                  <h1 className="board-header">The Board</h1>
                  <div className="board-items">
                    {theBoard.map((item, i) => (
                      <div className="board-item" key={i}>
                        <div className="board-img">
                          <img alt="" src={item.image || NoPicture} />
                        </div>

                        <div className="board-text">
                          <h1>{item.name}</h1>
                          <p>{item.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <h1 className="service-header">
                  The services below are offered by MAN Power Development
                  Company Limited (MPDCL).
                </h1>

                <h2>Power Facilitation Activities</h2>
                <div className="wrap-g">
                  {sectoralList.map((item) => (
                    <div className="card" key={item.id}>
                      <div className="flex">
                        <img src={Vector} alt="" />
                        <h2>{item.content}</h2>
                      </div>
                      <img className="main-img" src={item.image} alt="" />
                      <button onClick={() => showModalHandler(item)}>
                        View More
                      </button>
                    </div>
                  ))}
                </div>

                <h1 className="service-header">
                  RENEWABLE ENERGY AS MEANS OF REDUCING MEMBERS CARBON FOOT
                  PRINT
                </h1>

                <div className="wrap-g">
                  {renewEnergy.map((item) => (
                    <div className="card" key={item.id}>
                      <div className="flex">
                        <img src={Vector} alt="" />
                        <h2>{item.content}</h2>
                      </div>
                      <img className="main-img" src={item.image} alt="" />
                      <button onClick={() => showModalHandler(item)}>
                        View More
                      </button>
                    </div>
                  ))}
                </div>

                <div className="thrust">
                  <h3>MAN ANNUAL ENERGY SECURITY SUMMIT</h3>

                  <p>
                    This is MPDCL flagship annual event where players in NESI
                    (including other Captive Power Solutionproviders and
                    renewable energy solution provider and gas suppliers) will
                    converge to brainstorm specificallyon energy adequacy for
                    manufacturers and providing uninterrupted power supply to
                    industries in Nigeria. Theobjective is to act as
                    accountability forum to measure how both GenCos and DisCos
                    support industriesaccess to steady and uninterrupted energy.
                  </p>

                  <h3>CAPACITY BUILDING PROGRAMMES</h3>

                  <p>
                    Good energy and electricity housekeeping leads to energy
                    efficiency. To be up to speed with the latesttechnologies,
                    there is need to close the gaps that is creating poor energy
                    management especially now thatenergy cost is hitting the
                    roof.MPDCL is therefore putting a place training programmes
                    in partnership with leading training institutions andprivate
                    entities. The trainings are structured to impart positively
                    on engineers and technicians with qualitycapacity building
                    that will enable them offer in-house quality service
                    delivery in relevant engineering,manufacturing or production
                    for manufacturers after the attending the training courses
                    and services. Theprogramme will be supported with annual
                    training calendars for interested members companies
                    toincorporate them in their training budget and there will
                    be provision for in-plant training. The partnerships
                    arewith;
                  </p>
                </div>

                <div className="wrap-g">
                  {capacityProg.map((item) => (
                    <div className="card" key={item.id}>
                      <div className="flex">
                        <img src={Vector} alt="" />
                        <h2>{item.content}</h2>
                      </div>
                      <img className="main-img" src={item.image} alt="" />
                      <button onClick={() => showModalHandler(item)}>
                        View More
                      </button>
                    </div>
                  ))}
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
