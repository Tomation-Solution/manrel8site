import React from "react";
import { Box } from "@mui/material";
import { Colors } from "../../Styles/theme/Theme";
// import itemIcon from "../../images/new-images/HomeImg/Advocacy.jpeg";
// import Interact from "../../images/new-images/HomeImg/Interact.jpeg";
// import Sector from "../../images/new-images/HomeImg/Sector.jpeg";
// import Export from "../../images/new-images/HomeImg/Export.jpeg";
// import Consult from "../../images/new-images/HomeImg/Consult.jpeg";
import {
  InfoContainer,
  InfoHeader,
  InfoItemContainer,
  InfoItemDescription,
  InfoItemImg,
  InfoItemTitle,
} from "../../Styles/InfoBoard";
import { getWhyWeAreUnique } from "../../utils/csm-api-calls";
import { useQuery } from "react-query";
import { FormError } from "../NewEvents/FormComponents";
import Loader from "../Loader/Loader";

function InfoBoard() {
  const { isLoading, isError, isFetching, data } = useQuery(
    "all-why-we-are-unique-data",
    getWhyWeAreUnique,
    {
      refetchOnWindowFocus: false,
      select: (data) => data.data,
    }
  );

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
      <InfoHeader>Why We Are Unique</InfoHeader>
      {isLoading || isFetching ? (
        <Loader loading={isLoading || isFetching} />
      ) : !isError ? (
        <InfoContainer>
          {data.map((item, index) => (
            <InfoItemContainer key={index}>
              <InfoItemImg src={item.image} />
              <InfoItemTitle>{item.heading}</InfoItemTitle>
              <InfoItemDescription>{item.description}</InfoItemDescription>
            </InfoItemContainer>
          ))}
        </InfoContainer>
      ) : (
        <FormError>Can't fetch why we are unique data</FormError>
      )}
    </Box>
  );
}

export default InfoBoard;
