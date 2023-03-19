import { IconButton, ListItemIcon, Box } from "@mui/material";
import React from "react";
import {
  AppbarContainer,
  Appbarheader,
  MyListItemButton,
  MyList,
  MyBadge,
} from "../../Styles/Appbar";
import { MenuSharp, ShoppingCart, Search } from "@mui/icons-material";
import { useUIContext } from "../../Ui";
import { Colors } from "../../Styles/theme/Theme";

function AppbarMobile({ matches }) {
  const { setDrawerOpen } = useUIContext();
  return (
    <AppbarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuSharp />
      </IconButton>
      <Appbarheader textAlign={"center"} variant="h4">
        Micae
      </Appbarheader>
      <Box
        sx={{ justifyContent: "center", marginLeft: "0px", paddingRight: 0 }}
      >
        <MyList type="row" sx={{ gap: 1 }}>
          <MyListItemButton size>
            <ListItemIcon>
              <Search sx={{ color: Colors.black, padding: 0 }} />
            </ListItemIcon>
          </MyListItemButton>
          <MyListItemButton size>
            <ListItemIcon>
              <MyBadge badgeContent={2} color="secondary">
                <ShoppingCart sx={{ color: Colors.black, padding: 0 }} />
              </MyBadge>
            </ListItemIcon>
          </MyListItemButton>
        </MyList>
      </Box>
    </AppbarContainer>
  );
}

export default AppbarMobile;
