import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import CheckIcon from "@mui/icons-material/Check";

export default function ChildMenuItem({ child, isSelected, onClick }) {
  return (
    <MenuItem
      onClick={onClick}
      style={{
        fontSize: "0.9em",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: isSelected ? "#f0f0f0" : "inherit",
        color: isSelected ? "#000000" : "inherit",
        whiteSpace: "nowrap", // Evita que el texto pase a otra línea
        overflow: "hidden",  // Oculta el contenido que no cabe
        textOverflow: "ellipsis", // Agrega "..." al texto truncado
      }}
    >
      <Link
        href={child.link}
        underline="none"
        color="inherit"
        style={{
          width: "100%",
          whiteSpace: "nowrap", // Evita que el texto pase a otra línea
          overflow: "hidden",  // Oculta el contenido que no cabe
          textOverflow: "ellipsis", // Agrega "..." al texto truncado
        }}
      >
        {child.label}
      </Link>
      {isSelected && <CheckIcon fontSize="small" />}
    </MenuItem>
  );
}
