import React from "react";
import { Grid, Box } from "@mui/material";
import { Colors } from "../../Styles/theme/Theme";
// import sectionpic from "../../images/div20.png";
import sectionpic from "../../images/new-images/VisionImg.jfif";
import sectionpic2 from "../../images/div21.png";
import sectionpic3 from "../../images/div22.png";
import Before from "../../images/div_before.png";
import After from "../../images/div_after.png";
import theme from "../../Styles/theme/Theme";
import { Link } from "react-router-dom";
import {
  MyButton,
  SectionDescription,
  SectionImg,
  SectionItemContainer,
  SectionTitle,
} from "../../Styles/Section";
function Section() {
  return (
    <Box sx={{ margin: 0, padding: 0 }}>
      <Grid
        container
        justifyContent={"space-evenly"}
        alignContent={"center"}
        sx={{
          padding: "0 50px",
          [theme.breakpoints.down("lg")]: {
            padding: "0 20px",
          },
        }}
      >
        <SectionItemContainer sx={{ Padding: 0 }}>
          <div>
            <SectionImg src={sectionpic} style={{ objectFit: "cover" }} />
            <SectionTitle style={{ textAlign: "center" }}>
              Our Vision
            </SectionTitle>
            <SectionDescription sx={{ color: "#000", textAlign: "center" }}>
              To be the key driver for Industrialization, sustainable Economic
              Growth and Development in Nigeria
            </SectionDescription>
          </div>
        </SectionItemContainer>
        <SectionItemContainer
          sx={{
            backgroundColor: Colors.primary,
            padding: "30px",
            [theme.breakpoints.down("sm")]: {
              padding: "30px 10px",
            },
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <img
              src={Before}
              alt=""
              style={{ height: "53px", width: "53px", alignSelf: "flex-end" }}
            />
            <div style={{ padding: "30px 0px" }}>
              <SectionTitle sx={{ color: Colors.white, textAlign: "center" }}>
                Our Mission
              </SectionTitle>
              <SectionDescription
                sx={{
                  color: Colors.white,
                  fontSize: "16px",
                  margin: "20px 0px",
                  fontFamily: "Poppins",
                  textAlign: "center",
                }}
              >
                1. MAN promotes the interest of manufacturers by deepening its
                advocacy and partnership with national and international
                economic actors in Government, Organized Private Sector, host
                communities and other stakeholders to foster its proactive role
                in policy formulation and implementation.
              </SectionDescription>
              <SectionDescription
                sx={{
                  color: Colors.white,
                  fontSize: "16px",
                  margin: "20px 0px",
                  fontFamily: "Poppins",
                  textAlign: "center",
                }}
              >
                2. MAN promotes manufacturing sector competitiveness,
                contribution to job creation and Gross Domestic Product through
                commitment to research and development, new technologies and
                environmental sustainability.
              </SectionDescription>
            </div>
            <img src={After} alt="" style={{ height: "53px", width: "53px" }} />
          </div>
        </SectionItemContainer>

        <SectionItemContainer
          sx={{
            backgroundColor: Colors.primary,
            padding: "30px",
            [theme.breakpoints.down("sm")]: {
              padding: "30px 10px",
            },
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <img
              src={Before}
              alt=""
              style={{ height: "53px", width: "53px", alignSelf: "flex-end" }}
            />
            <div style={{ padding: "30px 0", textAlign: "center" }}>
              <SectionTitle sx={{ color: Colors.white, textAlign: "center" }}>
                Advocacy Achievements
              </SectionTitle>
              <SectionDescription
                sx={{
                  color: Colors.white,
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  textAlign: "center",
                }}
              >
                Through its continuous advocacy programmes, MAN has recorded
                remarkable achievements in a wide range of areas.
              </SectionDescription>
              <Link
                to={"/about/code-of-conduct"}
                state={{ from: "home" }}
                style={{ textDecoration: "none" }}
              >
                <MyButton
                  sx={{
                    color: "#fff",
                    borderColor: "#fff",
                    marginTop: "21px",
                  }}
                >
                  Continue to page
                </MyButton>
              </Link>
            </div>
            <img src={After} alt="" style={{ height: "53px", width: "53px" }} />
          </div>
        </SectionItemContainer>

        <SectionItemContainer sx={{ Padding: 0 }}>
          <div>
            <SectionImg src={sectionpic2} />
            <SectionTitle sx={{ color: "#8A8A8A", textAlign: "center" }}>
              Our History
            </SectionTitle>
            <SectionDescription sx={{ color: "#8A8A8A", textAlign: "center" }}>
              The Manufacturers Association of Nigeria (MAN) was established in
              May, 1971 as a company limited by guarantee. The establishment of
              the Association was motivated by the desire to have a focal point
              of communication and consultation between industry on the one
              hand, and the government and general public on the other.
              Hitherto, there was no institutional organ whose central focus was
              to give meaning to the interests, problems and aspirations of the
              manufacturing sector.
            </SectionDescription>
            <div style={{ textAlign: "center" }}>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <MyButton
                  sx={{
                    color: "#8A8A8A",
                    borderColor: "#8A8A8A",
                    marginTop: "21px",
                  }}
                >
                  See More
                </MyButton>
              </Link>
            </div>
          </div>
        </SectionItemContainer>

        <SectionItemContainer>
          <div>
            <SectionImg src={sectionpic3} />
            <SectionTitle style={{ textAlign: "center" }}>
              Membership
            </SectionTitle>
            <SectionDescription
              sx={{
                color: "#010001",
                fontSize: "17px",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              The membership requirement steps below detail the process to
              becoming a member of MAN
            </SectionDescription>
            {/* 
            <SectionMember> */}
            <div style={{ margin: "60px 20px", textAlign: "center" }}>
              <Link
                to="/membership-requirement"
                style={{
                  textDecoration: "none",
                  color: "#2c3513",
                  fontWeight: "600",
                }}
              >
                <span
                  style={{
                    padding: "10px 20px",
                    border: "1px solid #d3d3d3",
                    borderRadius: "10px",
                  }}
                >
                  See More {"> "}
                </span>
              </Link>
            </div>
            {/* </SectionMember> */}
          </div>
        </SectionItemContainer>

        <SectionItemContainer
          sx={{
            backgroundColor: Colors.primary,
            padding: "30px",
            [theme.breakpoints.down("sm")]: {
              padding: "30px 10px",
            },
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <img
              src={Before}
              alt=""
              style={{ height: "53px", width: "53px", alignSelf: "flex-end" }}
            />
            <div style={{ padding: "30px 0", fontFamily: "Poppins" }}>
              <SectionTitle sx={{ color: Colors.white, textAlign: "center" }}>
                Why Join MAN?
              </SectionTitle>
              <SectionDescription
                sx={{
                  color: Colors.white,
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  textAlign: "center",
                }}
              >
                MAN is driven by issues that matter to manufacturers. If
                anything is holding you back from joining MAN, do not fret, MAN
                is here to help. Join us and enjoy the following privileges
              </SectionDescription>
              <SectionDescription
                sx={{
                  color: Colors.white,
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  textAlign: "center",
                }}
              >
                Recognized as a Credible Manufacturer ….
              </SectionDescription>
              <SectionDescription
                sx={{
                  color: Colors.white,
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  textAlign: "center",
                }}
              >
                Be among the members whose views are sought when policy
                decisions are about to be made ….
              </SectionDescription>
              <SectionDescription
                sx={{
                  color: Colors.white,
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  textAlign: "center",
                }}
              >
                With our Economic Surveys, forecasts, and Analysis you gain
                insight into Firsthand Information to help you plan ….
              </SectionDescription>
              <SectionDescription
                sx={{
                  color: Colors.white,
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  textAlign: "center",
                }}
              >
                Members’ views are well represented in policy formulation
                primarily as it affects manufacturers ….
              </SectionDescription>
              <SectionDescription
                sx={{
                  color: Colors.white,
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  textAlign: "center",
                }}
              >
                MAN strives to intervene in members’ regulatory and operational
                issues ….
              </SectionDescription>
              <div style={{ marginLeft: "30px", textAlign: "center" }}>
                <Link
                  to="/become-membership"
                  style={{ textDecoration: "none" }}
                >
                  <MyButton
                    sx={{
                      color: "#fff",
                      borderColor: "#fff",
                      marginTop: "21px",
                    }}
                  >
                    Read More
                  </MyButton>
                </Link>
              </div>
            </div>
            <img src={After} alt="" style={{ height: "53px", width: "53px" }} />
          </div>
        </SectionItemContainer>
      </Grid>
    </Box>
  );
}

export default Section;
