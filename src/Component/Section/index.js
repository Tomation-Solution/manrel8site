import React from "react";
import { Grid, Box } from "@mui/material";
import { Colors } from "../../Styles/theme/Theme";
import sectionpic from "../../images/new-images/LookintoFuture.png";
import sectionpic2 from "../../images/div21.png";
import sectionpic3 from "../../images/new-images/ContribNoBg.png";
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
            <SectionImg
              src={sectionpic}
              style={{ objectFit: "contain", backgroundColor: "#ddd" }}
            />
            <SectionTitle style={{ textAlign: "center" }}>
              Our Vision
            </SectionTitle>
            <SectionDescription sx={{ color: "#2b3513", textAlign: "center" }}>
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
                MAN promotes the interest of manufacturers by deepening its
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
                MAN promotes manufacturing sector competitiveness, job creation
                and Gross Domestic Product through commitment to research and
                development, new technologies and environmental sustainability.
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
                to={"/about/advocacy-achievements"}
                state={{ from: "home" }}
                style={{ textDecoration: "none" }}
              >
                <MyButton
                  sx={{
                    color: "#fff",
                    borderColor: "#fff",
                    marginTop: "21px",
                    textTransform: "capitalize",
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
            <SectionTitle sx={{ color: "#2b3513", textAlign: "center" }}>
              Our History
            </SectionTitle>
            <SectionDescription sx={{ color: "##2b3513", textAlign: "center" }}>
              The Manufacturers Association of Nigeria (MAN) was established in
              May, 1971 as a company limited by guarantee. The establishment of
              the Association was motivated by the desire to have a focal point
              of communication and consultation between industry on the one
              hand, and the government and general public on the other.
              Hitherto, there was no institutional organ whose central focus was
              to give meaning to the interests, challenges and aspirations of
              the manufacturing sector.
            </SectionDescription>
            <div style={{ textAlign: "center" }}>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <MyButton
                  sx={{
                    color: "#2b3513",
                    borderColor: "#2b3513",
                    marginTop: "21px",
                    textTransform: "capitalize",
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
            <SectionImg
              src={sectionpic3}
              style={{ objectFit: "contain", backgroundColor: "#ddd" }}
            />
            <SectionTitle sx={{ color: "#2B3513", textAlign: "center" }}>
              Why Join MAN?
            </SectionTitle>
            <SectionDescription
              sx={{
                color: "#2B3513",
                fontSize: "14px",
                fontFamily: "Poppins",
                textAlign: "center",
              }}
            >
              MAN is driven by issues that matter to manufacturers. We provide
              forum where members come together to share ideas and create
              relationships. Join us and enjoy these and more privileges.
            </SectionDescription>

            <div style={{ margin: "60px 20px", textAlign: "center" }}>
              <Link
                to="/become-membership"
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
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                >
                  Read more
                </span>
              </Link>
            </div>
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
                Our Members
              </SectionTitle>
              <SectionDescription
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  textAlign: "center",
                }}
              >
                Our member-companies cut across the six geo-political zones of
                Nigeria. They are bonafide manufacturers with existing and
                functional production plants. They are grouped in sectors and
                sub-sectoral groups.
              </SectionDescription>
              <div style={{ marginLeft: "30px", textAlign: "center" }}>
                <Link to="/our-members" style={{ textDecoration: "none" }}>
                  <MyButton
                    sx={{
                      color: "#fff",
                      borderColor: "#fff",
                      marginTop: "30px",
                      textTransform: "capitalize",
                    }}
                  >
                    Meet Our Esteemed Members
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
