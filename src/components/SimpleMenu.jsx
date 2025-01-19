import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpenMenu}>
        Open Simple Menu
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>Option 1</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Option 2</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Option 3</MenuItem>
      </Menu>
    </div>
  );
}
