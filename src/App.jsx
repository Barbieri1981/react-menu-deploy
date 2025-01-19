import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import MenuComponent from "./components/MenuComponent";
import SimpleMenu from "./components/SimpleMenu";
import MenuWithHeadersAndDividers from "./components/MenuWithHeadersAndDividers";
import FashionMenu from "./components/FashionMenu";
import TelecomMenu from "./components/TelecomMenu";
import DenseMenu from "./components/DenseMenu";
import SelectedMenu from "./components/SelectedMenu";
import PositionedMenu from "./components/PositionedMenu";
import MenuListComposition from "./components/MenuListComposition";
import AccountMenu from "./components/AccountMenu";
import CustomizedMenus from "./components/CustomizedMenus";
import LongMenu from "./components/LongMenu";
import TypographyMenu from "./components/TypographyMenu";
import TypographyMenuSolution from "./components/TypographyMenuSolution"; // Importar la solución

export default function App() {
  const [selectedMenu, setSelectedMenu] = useState(""); // Estado para el menú seleccionado

  const handleChange = (event) => {
    setSelectedMenu(event.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Menus</h1>

      {/* Selector de menú */}
      <FormControl fullWidth sx={{ marginBottom: "20px" }}>
        <InputLabel id="menu-selector-label">Select a Menu</InputLabel>
        <Select
          labelId="menu-selector-label"
          value={selectedMenu}
          onChange={handleChange}
          label="Select a Menu"
        >
          <MenuItem value="MenuComponent">Existing Menu</MenuItem>
          <MenuItem value="SimpleMenu">Simple Menu</MenuItem>
          <MenuItem value="MenuWithHeadersAndDividers">
            Menu with Headers and Dividers
          </MenuItem>
          <MenuItem value="FashionMenu">Fashion Menu</MenuItem>
          <MenuItem value="TelecomMenu">Telecom Menu</MenuItem>
          <MenuItem value="DenseMenu">Dense Menu</MenuItem>
          <MenuItem value="SelectedMenu">Selected Menu</MenuItem>
          <MenuItem value="PositionedMenu">Positioned Menu</MenuItem>
          <MenuItem value="MenuListComposition">Composed Menu</MenuItem>
          <MenuItem value="AccountMenu">Account Menu</MenuItem>
          <MenuItem value="CustomizedMenus">Customized Menu</MenuItem>
          <MenuItem value="LongMenu">Max Height Menu</MenuItem>
          <MenuItem value="TypographyMenu">Typography Menu</MenuItem>
          <MenuItem value="TypographyMenuSolution">
            Typography Menu Solution
          </MenuItem>
        </Select>
      </FormControl>

      <Box>
        {selectedMenu === "MenuComponent" && <MenuComponent />}
        {selectedMenu === "SimpleMenu" && <SimpleMenu />}
        {selectedMenu === "MenuWithHeadersAndDividers" && (
          <MenuWithHeadersAndDividers />
        )}
        {selectedMenu === "FashionMenu" && <FashionMenu />}
        {selectedMenu === "TelecomMenu" && <TelecomMenu />}
        {selectedMenu === "DenseMenu" && <DenseMenu />}
        {selectedMenu === "SelectedMenu" && <SelectedMenu />}
        {selectedMenu === "PositionedMenu" && <PositionedMenu />}
        {selectedMenu === "MenuListComposition" && <MenuListComposition />}
        {selectedMenu === "AccountMenu" && <AccountMenu />}
        {selectedMenu === "CustomizedMenus" && <CustomizedMenus />}
        {selectedMenu === "LongMenu" && <LongMenu />}
        {selectedMenu === "TypographyMenu" && <TypographyMenu />}
        {selectedMenu === "TypographyMenuSolution" && (
          <TypographyMenuSolution />
        )}
      </Box>
    </div>
  );
}
