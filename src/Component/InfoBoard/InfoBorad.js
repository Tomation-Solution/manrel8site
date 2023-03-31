import React from "react";
import { Box } from "@mui/material";
import { Colors } from "../../Styles/theme/Theme";
import itemIcon from "../../images/new-images/HomeImg/Advocacy.jpeg";
import Interact from "../../images/new-images/HomeImg/Interact.jpeg";
import Sector from "../../images/new-images/HomeImg/Sector.jpeg";
import Export from "../../images/new-images/HomeImg/Export.jpeg";
import Consult from "../../images/new-images/HomeImg/Consult.jpeg";
import {
  InfoContainer,
  InfoHeader,
  InfoItemContainer,
  InfoItemDescription,
  InfoItemImg,
  InfoItemTitle,
} from "../../Styles/InfoBoard";

function InfoBoard() {
  return (
    <Box
      sx={{
        backgroundColor: Colors.primary,
        width: "100%",
        marginLeft: 0,
        marginRight: 0,
        padding: "20px",
      }}
    >
      <InfoHeader>Why we are Unique</InfoHeader>
      <InfoContainer>
        <InfoItemContainer>
          <InfoItemImg src={itemIcon} />
          <InfoItemTitle>Policy Advocacy</InfoItemTitle>
          <InfoItemDescription>MANLOC, MANGAS</InfoItemDescription>
        </InfoItemContainer>

        <InfoItemContainer>
          <InfoItemImg src={Interact} />
          <InfoItemTitle>Interactive & Networking Platform</InfoItemTitle>
          <InfoItemDescription>
            Get insights and share best practices with like-minded manufacturers
          </InfoItemDescription>
        </InfoItemContainer>

        <InfoItemContainer>
          <InfoItemImg src={Sector} />
          <InfoItemTitle>Sector-specific BMO</InfoItemTitle>
          <InfoItemDescription>Exclusively Manufacturing</InfoItemDescription>
        </InfoItemContainer>

        <InfoItemContainer>
          <InfoItemImg src={Export} />
          <InfoItemTitle>Exports</InfoItemTitle>
          <InfoItemDescription>
            Export of manufactured products
          </InfoItemDescription>
        </InfoItemContainer>

        <InfoItemContainer>
          <InfoItemImg src={Consult} />
          <InfoItemTitle>Consultancy, Trainings & Events</InfoItemTitle>
          <InfoItemDescription>
            Experts on call, conferences, human capital development,
            certifications and more, for manufacturers at all levels
          </InfoItemDescription>
        </InfoItemContainer>
      </InfoContainer>
    </Box>
  );
}

export default InfoBoard;
