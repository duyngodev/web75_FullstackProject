import React from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../assets/style/theme_admin.js";
import NavDrawer from "./NavDrawer.jsx";

const Admin = () => {
  return (
    <Box
      sx={{
        displaay: "flex",
        background: Colors.background,
        height: "100vh",
      }}>
      <NavDrawer />
    </Box>
  );
};

export default Admin;
