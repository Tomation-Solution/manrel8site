import React from "react";
import {
  MyButton,
  WallContainer,
  WallDescription,
  WallItemContainer,
  WallTitle,
} from "../../Styles/Wall";
import { useUIContext } from "../../Ui";
import { useQuery } from "react-query";
import { newsletterUIGet } from "../../utils/csm-api-calls";

function Wall() {
  const { setSubscribe } = useUIContext();
  const { data } = useQuery("newsletter-ui", newsletterUIGet, {
    refetchOnWindowFocus: false,
  });

  return (
    <WallContainer>
      <WallItemContainer>
        <WallTitle>{data?.header ? data.header : "Stay Connected"}</WallTitle>
        <WallDescription>
          {data?.description ? (
            <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
          ) : (
            "Get the latest Manufacturers news and information delivered to your inbox."
          )}
        </WallDescription>
        <MyButton
          onClick={() => setSubscribe(true)}
          style={{ marginTop: "30px" }}
        >
          {data?.btn_text ? data.btn_text : "SUBSCRIBE TO UPDATES"}
        </MyButton>
      </WallItemContainer>
    </WallContainer>
  );
}

export default Wall;
