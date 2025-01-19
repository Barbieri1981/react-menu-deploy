import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function MenuButton({ onClick }) {
  return (
    <IconButton color="inherit" aria-label="menu" onClick={onClick}>
      <MenuIcon />
    </IconButton>
  );
}
