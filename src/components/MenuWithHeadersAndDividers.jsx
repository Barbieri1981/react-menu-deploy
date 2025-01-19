import React, { useState } from "react";
import {
  MenuList,
  MenuItem,
  Button,
  Paper,
  Popper,
  ClickAwayListener,
  Divider,
  ListSubheader,
} from "@mui/material";

export default function MenuWithHeadersAndDividers() {
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
      <Button variant="contained" onClick={handleOpenMenu}>
        Open Menu with Headers
      </Button>
      <Popper open={open} anchorEl={anchorEl} placement="bottom-start" disablePortal>
        <ClickAwayListener onClickAway={handleCloseMenu}>
          <Paper>
            <MenuList>
              <ListSubheader>Category 1</ListSubheader>
              <MenuItem onClick={handleCloseMenu}>Option 1</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Option 2</MenuItem>
              <Divider />
              <ListSubheader>Category 2</ListSubheader>
              <MenuItem onClick={handleCloseMenu}>Option 3</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Option 4</MenuItem>
              <Divider />
              <MenuItem disabled>Disabled Option</MenuItem>
            </MenuList>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </div>
  );
}
