import React from "react";
import {
  MyButton,
  WallContainer,
  WallDescription,
  WallItemContainer,
  WallTitle,
} from "../../Styles/Wall";
import { useUIContext } from "../../Ui";
function Wall() {
  const { setSubscribe } = useUIContext();
  return (
    <WallContainer>
      <WallItemContainer>
        <WallTitle>Stay Connected</WallTitle>
        <WallDescription>
          Get the latest Manufacturers news and information delivered to your
          inbox.
        </WallDescription>
        <MyButton
          onClick={() => setSubscribe(true)}
          style={{ marginTop: "30px" }}
        >
          SUBSCRIBE TO UPDATES
        </MyButton>
      </WallItemContainer>
    </WallContainer>
  );
}

export default Wall;
