import React, { useState } from "react";
import {
  Button,
  Popper,
  Paper,
  MenuList,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Divider,
  ClickAwayListener,
} from "@mui/material";
import PhoneAndroid from "@mui/icons-material/PhoneAndroid";
import Router from "@mui/icons-material/Router";
import Wifi from "@mui/icons-material/Wifi";
import SignalCellularAlt from "@mui/icons-material/SignalCellularAlt";
import SupportAgent from "@mui/icons-material/SupportAgent";
import Settings from "@mui/icons-material/Settings";

const TelecomMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpenMenu}>
        Telecom Menu
      </Button>
      <Popper open={open} anchorEl={anchorEl} placement="bottom-start" disablePortal>
        <ClickAwayListener onClickAway={handleCloseMenu}>
          <Paper
            style={{
              width: 320,
              maxWidth: "100%",
              padding: "8px",
            }}
          >
            <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <PhoneAndroid fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Mobile Services" />
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Router fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Internet & Routers" />
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Wifi fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Wi-Fi Plans" />
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <SignalCellularAlt fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Network Coverage" />
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <SupportAgent fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Customer Support" />
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Account Settings" />
              </MenuItem>
            </MenuList>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </div>
  );
};

export default TelecomMenu;
