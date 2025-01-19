import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = useState(null); // Controla el anclaje del menú
  const open = Boolean(anchorEl); // Determina si el menú está abierto

  // Maneja el clic en el botón para abrir el menú
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Maneja el cierre del menú
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* Botón que abre el menú */}
      <Button
        id="positioned-menu-button"
        aria-controls={open ? "positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
        color="secondary"
      >
        Open Positioned Menu
      </Button>

      {/* Menú posicionado */}
      <Menu
        id="positioned-menu"
        aria-labelledby="positioned-menu-button"
        anchorEl={anchorEl} // Elemento de anclaje (el botón)
        open={open} // Abierto o cerrado
        onClose={handleClose} // Acción al cerrar
        anchorOrigin={{
          vertical: "bottom", // Posiciona en la parte inferior del botón
          horizontal: "left", // Alinea al lado izquierdo del botón
        }}
        transformOrigin={{
          vertical: "top", // El menú se alinea desde su parte superior
          horizontal: "left", // El menú se alinea desde su lado izquierdo
        }}
      >
        {/* Opciones del menú */}
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
