import { createTheme } from "@mui/material/styles";
export const DrawerWidth = 250;

//colors
export const Colors = {
  primary: "#f06292",
  secondary: "#ba68c8",
  light: "#aaa",
  dark: "#0e1b20",
  danger: "#FF5722",
  transparent: "#00000000",
  background: "#f5f5f5",
  white: "#FFFFFF",
  black: "#000000",
};

//css utils
export const cssUtils = {
  bosShadow: "rgba(149,157,165,0.2) 0px 8px 24px",
};
//create theme
export const theme = createTheme({
  palete: {
    primary: { main: Colors.primary },
    secondary: { main: Colors.secondary },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: { background: Colors.transparent },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          color: Colors.primary,
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundColor: Colors.primary,
              "&:hover": { backgroundColor: Colors.light },
              color: Colors.white,
            }),
        }),
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: DrawerWidth,
          background: Colors.transparent,
          color: Colors.light,
        },
      },
    },
  },
});
export default theme;
