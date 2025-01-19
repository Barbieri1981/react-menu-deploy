import React from "react";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function ParentMenuItem({ item, isExpanded, onClick, isSelected }) {
  return (
    <MenuItem
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: isSelected ? "#f5f5f5" : "inherit",
        color: isSelected ? "#000000" : "inherit",
      }}
    >
      <span>{item.label}</span>
      {isExpanded ? (
        <ExpandLessIcon fontSize="small" />
      ) : (
        <ExpandMoreIcon fontSize="small" />
      )}
    </MenuItem>
  );
}
