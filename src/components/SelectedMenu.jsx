import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  MenuItem,
  Menu,
} from "@mui/material";

const options = [
  "Enable notifications",
  "Disable notifications",
  "Show notification preview",
  "Hide notification preview",
];

export default function SelectedMenu() {
  const [anchorEl, setAnchorEl] = useState(null); // Estado del anclaje del menú
  const [selectedIndex, setSelectedIndex] = useState(0); // Índice del ítem seleccionado
  const open = Boolean(anchorEl);

  // Abre el menú al hacer clic en el botón de la lista
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Selecciona un ítem y cierra el menú
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index); // Actualiza el ítem seleccionado
    setAnchorEl(null); // Cierra el menú
  };

  // Cierra el menú
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* Lista que actúa como botón para abrir el menú */}
      <List
        component="nav"
        aria-label="Notification settings"
        sx={{ bgcolor: "background.paper" }}
      >
        <ListItemButton
          id="notification-button"
          aria-haspopup="listbox"
          aria-controls="notification-menu"
          aria-label="notification settings"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary="Notification Settings"
            secondary={options[selectedIndex]} // Muestra la opción seleccionada
          />
        </ListItemButton>
      </List>

      {/* Menú desplegable */}
      <Menu
        id="notification-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "notification-button",
          role: "listbox",
        }}
      >
        {/* Opciones del menú */}
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex} // Marca como seleccionado
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
