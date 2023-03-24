import React from "react";
import { Box } from "@mui/material";
import { Colors } from "../../Styles/theme/Theme";
import itemIcon from "../../images/training.svg";
import itemIcon2 from "../../images/discussion-group-light.svg.png";
import itemIcon3 from "../../images/customer-support-light.svg.png";
import {
  InfoContainer,
  InfoHeader,
  InfoItemContainer,
  InfoItemDescription,
  InfoItemImg,
  InfoItemTitle,
  InfoTitle,
} from "../../Styles/InfoBoard";

function InfoBoard() {
  return (
    <Box
      sx={{
        backgroundColor: Colors.primary,
        marginTop: "184px",
        width: "100%",
        marginLeft: 0,
        marginRight: 0,
        padding: "50px 0",
      }}
    >
      {/* <InfoTitle>Why We are Unique</InfoTitle> */}
      <InfoHeader>Why We are Unique</InfoHeader>
      <InfoContainer>
        <InfoItemContainer>
          <InfoItemImg src={itemIcon} />
          <InfoItemTitle>Policy Advocacy</InfoItemTitle>
          <InfoItemDescription></InfoItemDescription>
        </InfoItemContainer>

        <InfoItemContainer>
          <InfoItemImg src={itemIcon2} />
          <InfoItemTitle>Interactive & Networking Platform</InfoItemTitle>
          <InfoItemDescription>
            Get insights and share best practices with like-minded manufacturers
          </InfoItemDescription>
        </InfoItemContainer>

        <InfoItemContainer>
          <InfoItemImg src={itemIcon2} />
          <InfoItemTitle>Sector-specific BMO</InfoItemTitle>
          <InfoItemDescription>Exclusively Manufacturing</InfoItemDescription>
        </InfoItemContainer>

        <InfoItemContainer>
          <InfoItemImg src={itemIcon} />
          <InfoItemTitle>Consultancy, Trainings & Events</InfoItemTitle>
          <InfoItemDescription>
            Consultancy, conferences, trainings, certifications and more for
            manufacturers at all levels
          </InfoItemDescription>
        </InfoItemContainer>

        <InfoItemContainer>
          <InfoItemImg src={itemIcon3} />
          <InfoItemTitle>Experts on Call</InfoItemTitle>
          <InfoItemDescription>
            Go-to-guidance from MAN staff experts, exclusively for MANmembers.
          </InfoItemDescription>
        </InfoItemContainer>
      </InfoContainer>
    </Box>
  );
}

export default InfoBoard;
