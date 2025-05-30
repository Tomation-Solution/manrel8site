import React from "react";
import { Grid, Box } from "@mui/material";
import { Colors } from "../../Styles/theme/Theme";
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
function Section({ renderdata }) {
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
              src={renderdata.slider_image2}
              style={{ objectFit: "contain", backgroundColor: "#2b3513" }}
            />
            <SectionTitle style={{ textAlign: "left" }}>
              Our Vision
            </SectionTitle>
            <SectionDescription sx={{ color: "#2b3513", textAlign: "left" }}>
              <p
                dangerouslySetInnerHTML={{ __html: renderdata.vision_intro }}
              ></p>
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
              <SectionTitle sx={{ color: Colors.white, textAlign: "left" }}>
                Our Mission
              </SectionTitle>
              <SectionDescription
                sx={{
                  color: Colors.white,
                  fontSize: "16px",
                  margin: "20px 0px",
                  fontFamily: "Poppins",
                  textAlign: "left",
                }}
              >
                <p
                  dangerouslySetInnerHTML={{ __html: renderdata.mission_intro }}
                ></p>
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
            <div style={{ padding: "30px 0", textAlign: "left" }}>
              <SectionTitle sx={{ color: Colors.white, textAlign: "left" }}>
                Advocacy Achievements
              </SectionTitle>

              <SectionDescription
                sx={{
                  color: Colors.white,
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  textAlign: "left",
                }}
              >
                <p
                  dangerouslySetInnerHTML={{
                    __html: renderdata.advocacy_intro,
                  }}
                ></p>
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
                    textTransform: "none",
                  }}
                >
                  Continue
                </MyButton>
              </Link>
            </div>
            <img src={After} alt="" style={{ height: "53px", width: "53px" }} />
          </div>
        </SectionItemContainer>

        <SectionItemContainer sx={{ Padding: 0 }}>
          <div>
            <SectionImg src={renderdata.history_image} />
            <SectionTitle sx={{ color: "#2b3513", textAlign: "left" }}>
              Our History
            </SectionTitle>

            <SectionDescription sx={{ color: "##2b3513", textAlign: "left" }}>
              <p
                dangerouslySetInnerHTML={{ __html: renderdata.history_intro }}
              ></p>
            </SectionDescription>
            <div style={{ textAlign: "left" }}>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <MyButton
                  sx={{
                    color: "#2b3513",
                    borderColor: "#2b3513",
                    marginTop: "21px",
                    textTransform: "none",
                  }}
                >
                  See more
                </MyButton>
              </Link>
            </div>
          </div>
        </SectionItemContainer>

        <SectionItemContainer>
          <div>
            <SectionImg
              src={renderdata.join_man_image}
              style={{ objectFit: "contain", backgroundColor: "#ddd" }}
            />
            <SectionTitle sx={{ color: "#2B3513", textAlign: "left" }}>
              Why Join MAN?
            </SectionTitle>

            <SectionDescription
              sx={{
                color: "#2B3513",
                fontSize: "14px",
                fontFamily: "Poppins",
                textAlign: "left",
              }}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: renderdata.why_join_intro,
                }}
              ></p>
            </SectionDescription>

            <div style={{ margin: "60px 20px", textAlign: "left" }}>
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
                    textTransform: "none",
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
              <SectionTitle sx={{ color: Colors.white, textAlign: "left" }}>
                Our Members
              </SectionTitle>
              <SectionDescription
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  textAlign: "left",
                }}
              >
                <p
                  dangerouslySetInnerHTML={{ __html: renderdata.members_intro }}
                ></p>
              </SectionDescription>
              <div style={{ marginLeft: "30px", textAlign: "left" }}>
                <Link to="/our-members" style={{ textDecoration: "none" }}>
                  <MyButton
                    sx={{
                      color: "#fff",
                      borderColor: "#fff",
                      marginTop: "30px",
                      textTransform: "none",
                    }}
                  >
                    Meet our esteemed members
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
