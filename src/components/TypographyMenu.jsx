import React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

export default function TypographyMenu() {
  return (
    <Paper sx={{ width: 230 }}>
      <MenuList>
        {/* Opción con texto corto */}
        <MenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">A short message</Typography>
        </MenuItem>

        {/* Opción con texto largo (sin truncar) */}
        <MenuItem>
          <ListItemIcon>
            <PriorityHighIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">
            A very long text that overflows
          </Typography>
        </MenuItem>

        {/* Opción con texto largo truncado */}
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            A very long text that overflows
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
