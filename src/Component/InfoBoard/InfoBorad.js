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
      <InfoTitle>Why Our Members Prefer us</InfoTitle>
      <InfoHeader>Members' Benefit</InfoHeader>
      <InfoContainer>
        <InfoItemContainer>
          <InfoItemImg src={itemIcon} />
          <InfoItemTitle>Trainings & Events</InfoItemTitle>
          <InfoItemDescription>
            Conferences, trainings, certifications and more for manufacturers at
            all levels in every role.
          </InfoItemDescription>
        </InfoItemContainer>
        <InfoItemContainer>
          <InfoItemImg src={itemIcon2} />
          <InfoItemTitle>Discussion Groups</InfoItemTitle>
          <InfoItemDescription>
            Get insights and share best practices with like-minded manufacturers
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
