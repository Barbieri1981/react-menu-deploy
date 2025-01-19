import React, { useState } from "react";
import {
  Button,            // Botón para abrir el menú
  Popper,            // Contenedor flotante para posicionar el menú
  Paper,             // Superficie para el menú
  MenuList,          // Contenedor para los elementos del menú
  MenuItem,          // Cada opción individual del menú
  ListItemIcon,      // Contenedor para íconos en el menú
  ListItemText,      // Texto de los elementos del menú
  Divider,           // Línea divisoria entre secciones
  ClickAwayListener, // Detecta clics fuera del menú para cerrarlo
} from "@mui/material";
import Check from "@mui/icons-material/Check"; // Ícono de verificación

export default function DenseMenu() {
  // Estado para controlar si el menú está abierto o cerrado
  const [anchorEl, setAnchorEl] = useState(null);

  // Abre el menú al hacer clic en el botón
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget); // Ancla el menú al botón clickeado
  };

  // Cierra el menú
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // Determina si el menú está abierto
  const open = Boolean(anchorEl);

  return (
    <div>
      {/* Botón para abrir el menú */}
      <Button variant="contained" color="primary" onClick={handleOpenMenu}>
        Open Dense Menu
      </Button>

      {/* Popper: Contenedor flotante para el menú */}
      <Popper open={open} anchorEl={anchorEl} placement="bottom-start" disablePortal>
        {/* Cierra el menú al hacer clic fuera de él */}
        <ClickAwayListener onClickAway={handleCloseMenu}>
          {/* Paper: Superficie visual del menú */}
          <Paper sx={{ width: 320 }}>
            {/* MenuList: Contenedor de los elementos del menú */}
            <MenuList dense>
              {/* Dense: Propiedad que reduce el tamaño del padding y del texto */}
              
              {/* Elementos del menú */}
              <MenuItem>
                <ListItemText inset>Single</ListItemText>
                {/* ListItemText: Muestra el texto de la opción del menú */}
              </MenuItem>
              <MenuItem>
                <ListItemText inset>1.15</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemText inset>Double</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Check /> {/* Ícono de verificación */}
                </ListItemIcon>
                Custom: 1.2
              </MenuItem>

              {/* Divider: Línea divisoria para separar secciones */}
              <Divider />

              <MenuItem>
                <ListItemText>Add space before paragraph</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemText>Add space after paragraph</ListItemText>
              </MenuItem>

              <Divider />

              <MenuItem>
                <ListItemText>Custom spacing...</ListItemText>
              </MenuItem>
            </MenuList>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </div>
  );
}
