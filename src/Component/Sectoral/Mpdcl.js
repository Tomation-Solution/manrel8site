import React from "react";
import { ThemeProvider } from "@mui/system";
import { UIProvider } from "../../Ui";
import theme from "../../Styles/theme/Theme";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Subscribe from "../Subscribe/Subscribe";
import "./Sectoral.scss";
import Vector from "../../images/Vector.png";
import One from "../../images/mrc1.png";
import Two from "../../images/mrc2.png";
import Three from "../../images/mrc3.png";
import Four from "../../images/mrc4.png";

function Mpdcl() {
  const sectoralList = [
    {
      image: One,
      id: "1",
      content: "Rental Captive Power Supply Project",
      details: [
        "Rental Captive Power Supply ProjectThe rental captive power projects are designed for members that wants to switch from diesel powerto gas power source towards migrating to green manufacturing. MPDCL supports members toseamlessly transit without disrupting their manufacturing operation and we are currently doing thatfor;",
        "➢ D.T.O Industries Ltd at Ogijo: with installed capacity to off-take 2.5MW but will be startingwith 1MW as phase 1, and the project will be commissioned in Q3, 2023.",
      ],
    },
    {
      image: Three,
      id: "2",
      content: "MPDCL Power Supply Facilitation and Eligible Customer Services",
      details: [
        "MPDCL Power Supply Facilitation and Eligible Customer ServicesMPDCL assists members that are interested in migrating as Eligible Customer by providingfacilitation services once they meet the criteria. Some of the ongoing facilitation supports are;",

        "a) Eleganza Industrial City, along Lekki-Epe Expressway:",

        "b) Aarti Steel Industries at Otta; Aarti Steel are interested in applying for the NERC EligibleCustomer Permit.",
      ],
    },
    {
      image: Three,
      id: "3",
      content: "Idu Industrial Cluster Abuja",
      details: [
        "MPDCL facilitating and working with TCN on steady power supply to Idu Industrial cluster throughsupport and collaboration with TCN.",
      ],
    },
    {
      image: Three,
      id: "4",
      content: "NERC Partial Activation Programme of NESI",
      details: [
        "MPDCL is collaborating with Ikeja Electricity Distribution Companies on how industries could access23+ hours/day power supply availability under the Partial Activation Programme of NESI that allowssome DisCos to leverage on partnerships for power supply to manufacturing industries. This initiativewill allow areas with infrastructure deficiency to access more electricity. This is a win win relationshipwith any DisCos that will participate in this scheme because as more member access power supplyon one hand, the DisCo revenue generation would also increase on the other hand.",
      ],
    },
    {
      image: Three,
      id: "5",
      content: "Power and Energy Dialogue with MAN Branches",
      details: [
        "This is MPDCL special scheme to deepen relationship with MAN branches and connect with DisCosas partners in progress to explore how industries challenges can be resolved at the DisCo level toachievement improvement in power supply within the remit of a service level agreement that willlegally bind relationship where it will be applicable.",
      ],
    },
    {
      image: Three,
      id: "6",
      content: "MAN-SUNREF Funds",
      details: [
        "MPDCL facilitate members’ access to the MAN-SUNREF $USD70million funds targeted forindustries to develop their energy improvement projects, energy optimization and energy efficiencyplans.",
        "MPDCL and Research and Advocacy Division of MAN have successfully carried out sensitizationprogramme nationwide for members to have better understanding of the fund to take advantage ofit.",
      ],
    },
    {
      image: Three,
      id: "7",
      content: "MPDCL Energy Audit Exercise",
      details: [
        "MPDCL supports members with power and energy audit in a comprehensive way that details out the factorydiagnosis on energy utilization and wastages including recommendations on how to be more energy efficient.Savings and application of relevant technologies that will be useful for the process are offered as advice tomember factories after the exercise",
      ],
    },
  ];

  const theBoard = [
    { image: "", name: "Engr. Ibrahim Usman", title: "Board Chairman" },
    { image: "", name: "Alhaji Ali Madugu (mni)", title: "" },
    { image: "", name: "Chief John Aluya", title: "" },
    { image: "", name: "Chief John Aluya", title: "" },
    { image: "", name: "Engr. Reginald Odiah", title: "" },
    { image: "", name: "Otunba Francis Meshioye", title: "" },
    {
      image: "",
      name: "Otunba Francis Meshioye",
      title: "Director General MAN",
    },
    { image: "", name: "Mr. Ambrose Oruche", title: "Board Secretary" },
    { image: "", name: "Mr. Oweh O. Mba-Sam", title: "Ag. Managing Director" },
  ];
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className="sectoral">
          <Subscribe />
          <NavBar location="about" />
          <div className="hero_image">
            <div className="cover">
              <h1>MAN Power Development Company Limited (MPDCL).</h1>
              <p>
                The services below are offered by MAN Power Development Company
                Limited (MPDCL).
              </p>
            </div>
          </div>
          <div className="sect-body">
            <div className="cover">
              <div className="about">
                <h1>About MPDCL</h1>
                <p>
                  The Manufacturers Power Development Company Limited (MPDCL) is
                  a 100% wholly owned SpecialPurpose Vehicle of the
                  Manufacturers Association of Nigeria (MAN), incorporated with
                  the Corporate AffairsCommission in 2007 as a Limited Liability
                  Company to channel efforts towards manufacturers
                  energyadequacy advocacy and at the same time facilitating
                  uninterrupted power supply and energy relatedchallenges
                  members may be contending with.
                </p>

                <p>
                  MPDCL also assist power project developers’ access members for
                  various power supply services and at thesame time encourage
                  the members’ transit from fossil fuel power supply sources to
                  environmental friendlysources like renewable energy which
                  would reduce their carbon foot print as the world is embracing
                  smartand green manufacturing.
                </p>
              </div>

              <div className="objectives">
                <p className="obj-left-text">
                  To achieve this mandates, MPDCL provides various power supply
                  interventions to cushion the unabated power supply challenges
                  which has been perennial and some of them are;
                </p>
                <div className="obj-items">
                  <div className="flex">
                    <img src={Vector} alt="" />
                    <p>
                      Encourage members to improve on good energy housekeeping
                      and energy management practicesthrough energy efficiency
                      initiatives as a way of conserving power and be more cost
                      effective sinceuninterrupted power supply is not
                      immediately achievable from the grid.
                    </p>
                  </div>

                  <div className="flex">
                    <img src={Vector} alt="" />
                    <p>
                      Partner with credible Independent Power Project Developers
                      with financial well withal to establishcaptive and
                      distributed power generation solutions to enable
                      industrial clusters or a membercompany operate 24/7.
                    </p>
                  </div>

                  <div className="flex">
                    <img src={Vector} alt="" />
                    <p>
                      Organize trainings around energy management, energy
                      efficiency, electrical, mechanical and smartmanufacturing.
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
                  Engage with strategic partners that are leading energy service
                  providers to facilitate uninterrupted 24/7 power supply and
                  energy management service, and collaborate with experienced
                  professional training institutions for resource availability
                  for capacity building for member industries.
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
                  {theBoard.map((item) => (
                    <div className="board-item">
                      <div className="board-img">
                        <img alt="" src={item.image} />
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
                The services below are offered by MAN Power Development Company
                Limited (MPDCL).
              </h1>

              <h2>Power Facilitation Activities</h2>
              <div className="wrap-g">
                {sectoralList.map((item) => (
                  <div className="card" key={item.content}>
                    <div className="flex">
                      <img src={Vector} alt="" />
                      <h2>{item.content}</h2>
                    </div>
                    <img className="main-img" src={item.image} alt="" />
                    <button>View More</button>
                  </div>
                ))}
              </div>

              <h1 className="service-header">
                RENEWABLE ENERGY AS MEANS OF REDUCING MEMBERS CARBON FOOT PRINT
              </h1>

              <div className="wrap-g">
                <div className="card">
                  <div className="flex">
                    <img src={Vector} alt="" />
                    <h2>Exploring Carbon Credit for Members Benefitt</h2>
                  </div>
                  <img className="main-img" src={Four} alt="" />
                  <button>View More</button>
                </div>
              </div>

              <div className="thrust">
                <h3>MAN ANNUAL ENERGY SECURITY SUMMIT</h3>

                <p>
                  This is MPDCL flagship annual event where players in NESI
                  (including other Captive Power Solutionproviders and renewable
                  energy solution provider and gas suppliers) will converge to
                  brainstorm specificallyon energy adequacy for manufacturers
                  and providing uninterrupted power supply to industries in
                  Nigeria. Theobjective is to act as accountability forum to
                  measure how both GenCos and DisCos support industriesaccess to
                  steady and uninterrupted energy.
                </p>

                <h3>CAPACITY BUILDING PROGRAMMES</h3>

                <p>
                  Good energy and electricity housekeeping leads to energy
                  efficiency. To be up to speed with the latesttechnologies,
                  there is need to close the gaps that is creating poor energy
                  management especially now thatenergy cost is hitting the
                  roof.MPDCL is therefore putting a place training programmes in
                  partnership with leading training institutions andprivate
                  entities. The trainings are structured to impart positively on
                  engineers and technicians with qualitycapacity building that
                  will enable them offer in-house quality service delivery in
                  relevant engineering,manufacturing or production for
                  manufacturers after the attending the training courses and
                  services. Theprogramme will be supported with annual training
                  calendars for interested members companies toincorporate them
                  in their training budget and there will be provision for
                  in-plant training. The partnerships arewith;
                </p>
              </div>

              <div className="wrap-g">
                <div className="card">
                  <div className="flex">
                    <img src={Vector} alt="" />
                    <h2>
                      National Power Training Institute of Nigeria (NAPTINI)
                    </h2>
                  </div>
                  <img className="main-img" src={Four} alt="" />
                  <button>View More</button>
                </div>

                <div className="card">
                  <div className="flex">
                    <img src={Vector} alt="" />
                    <h2>
                      Applied Engineering Technology Initiative Limited (AETI)
                    </h2>
                  </div>
                  <img className="main-img" src={Four} alt="" />
                  <button>View More</button>
                </div>

                <div className="card">
                  <div className="flex">
                    <img src={Vector} alt="" />
                    <h2>
                      Nigerian Electricity Management Safety Agency (NEMSA)
                    </h2>
                  </div>
                  <img className="main-img" src={Four} alt="" />
                  <button>View More</button>
                </div>
              </div>
            </div>
          </div>
          <Wall />
          <Footer />
        </div>
      </UIProvider>
    </ThemeProvider>
  );
}

export default Mpdcl;
