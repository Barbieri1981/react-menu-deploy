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
import Checkroom from "@mui/icons-material/Checkroom";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import Woman from "@mui/icons-material/Woman";
import Diamond from "@mui/icons-material/Diamond";
import Favorite from "@mui/icons-material/Favorite";
import ColorLens from "@mui/icons-material/ColorLens";

const FashionMenu = () => {
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
      <Button variant="contained" color="secondary" onClick={handleOpenMenu}>
        Open Fashion Menu
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
                  <Checkroom fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Clothing" />
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ShoppingBag fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Bags & Accessories" />
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Woman fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Dresses" />
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Diamond fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Jewelry" />
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Favorite fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Shoes" />
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ColorLens fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Makeup" />
              </MenuItem>
            </MenuList>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </div>
  );
};

export default FashionMenu;
