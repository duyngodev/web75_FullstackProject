import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Colors, DrawerWidth } from "../assets/style/theme_admin.js";
import { Outlet } from "react-router";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${DrawerWidth}px`,
    background: "none",
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  background: Colors.white,
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${DrawerWidth}px)`,
    marginLeft: `${DrawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Search = styled("div")(({ open, theme }) => ({
  position: "relative",
  border: "1px solid black ",
  borderRadius: 25,
  backgroundColor: Colors.white,
  "&:hover": {
    backgroundColor: `1px solid ${Colors.light}`,
  },
  marginLeft: open ? 0 : theme.spacing(4),
  color: Colors.black,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: Colors.light,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "50ch",
      },
    },
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const MyListItemButton = ({
  selected,
  icon,
  text,
  handleNavbarItemClicked,
}) => {
  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={() => handleNavbarItemClicked(text)}
        sx={{
          ...(selected && {
            background: Colors.white,
            borderRadius: 2,
            fontWeight: "bold",
            color: Colors.black,
          }),
        }}>
        <ListItemIcon sx={{ color: selected && Colors.primary }}>
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default function NavDrawer() {
  const theme = useTheme();
  const navigate = useNavigate();
  const select = window.location.href.replace("/admin/", "");

  const [selectedItem, setSelectedItem] = React.useState(
    `${select === "" ? "dashboard" : select}`
  );
  const [open, setOpen] = React.useState(null);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNavbarItemClicked = (item) => {
    setSelectedItem(item);
    navigate(`/admin/${item}`);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" elevation={0} open={open}>
        <Toolbar>
          <IconButton
            color={Colors.black}
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}>
            <MenuIcon />
          </IconButton>
          {!open && (
            <Typography
              fontWeight="bold"
              color={Colors.black}
              variant="h6"
              nowrap
              component="div">
              Admin Dashboard
            </Typography>
          )}
          <Search open={open}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: DrawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DrawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}>
        <DrawerHeader>
          <Typography
            fontWeight="bold"
            color={Colors.black}
            variant="h6"
            nowrap
            component="div"
            mr={1}>
            Admin Dashboard
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <MyListItemButton
            icon={<DashboardIcon />}
            text={"dashboard"}
            handleNavbarItemClicked={handleNavbarItemClicked}
            selected={selectedItem.includes("dashboard")}
          />
          <MyListItemButton
            icon={<ShoppingBasketIcon />}
            text={"products"}
            handleNavbarItemClicked={handleNavbarItemClicked}
            selected={selectedItem.includes("products")}
          />
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}
