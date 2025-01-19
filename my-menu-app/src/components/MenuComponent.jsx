import React, { useState, useEffect } from "react";
import Menu from "@mui/material/Menu";
import ParentMenuItem from "./ParentMenuItem";
import ChildMenuItem from "./ChildMenuItem";
import MenuButton from "./MenuButton";
import menuData from "../data/menu.json";

export default function MenuComponent() {
  const [anchorEl, setAnchorEl] = useState(null); // Controla el menú padre
  const [expandedMenu, setExpandedMenu] = useState(null); // Controla qué ítem del menú está expandido
  const [selectedChild, setSelectedChild] = useState(null); // Controla el ítem hijo seleccionado
  const [selectedParent, setSelectedParent] = useState(null); // Controla el menú padre del hijo seleccionado

  // Al cargar la página, verifica la URL actual y selecciona el hijo correspondiente
  useEffect(() => {
    const currentPath = window.location.pathname;
    menuData.forEach((parent) => {
      parent.children.forEach((child) => {
        if (child.link === currentPath) {
          setSelectedChild(child.id); // Marca el hijo correspondiente como seleccionado
          setSelectedParent(parent.id); // Expande el menú padre correspondiente
          setExpandedMenu(parent.id); // Asegura que el menú esté expandido
        }
      });
    });
  }, []);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget); // Abre el menú padre
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleExpandMenu = (id) => {
    setExpandedMenu((prev) => (prev === id ? null : id)); // Alterna el submenú
  };

  const handleSelectChild = (parentId, childId) => {
    setSelectedChild(childId); // Marca el ítem hijo como seleccionado
    setSelectedParent(parentId); // Guarda el ítem padre del hijo seleccionado
    setExpandedMenu(parentId); // Mantiene expandido el submenú del padre
    handleCloseMenu(); // Cierra el menú
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Botón del menú hamburguesa */}
      <MenuButton onClick={handleOpenMenu} />

      {/* Menú principal */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        sx={{
          "& .MuiPaper-root": {
            width: "250px", // Estilo personalizado para el ancho del menú
          },
        }}
      >
        {menuData.map((item) => (
          <div key={item.id}>
            <ParentMenuItem
              item={item}
              isExpanded={expandedMenu === item.id}
              onClick={() => handleExpandMenu(item.id)}
              isSelected={selectedParent === item.id}
            />

            {/* Submenú */}
            {expandedMenu === item.id && (
              <div style={{ paddingLeft: "20px", background: "#fafafa" }}>
                {item.children.map((child) => (
                  <ChildMenuItem
                    key={child.id}
                    child={child}
                    isSelected={selectedChild === child.id}
                    onClick={() => handleSelectChild(item.id, child.id)}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </Menu>
    </div>
  );
}
