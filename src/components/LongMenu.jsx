import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// Opciones del menú
const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

// Altura máxima para el menú
const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = useState(null); // Controla el anclaje del menú
  const open = Boolean(anchorEl);

  // Abre el menú
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Cierra el menú
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* Botón para abrir el menú */}
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      {/* Menú con scroll interno */}
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5, // Define la altura máxima
              width: "20ch", // Ancho del menú
            },
          },
        }}
      >
        {/* Renderiza las opciones */}
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"} // Marca el ítem seleccionado
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
