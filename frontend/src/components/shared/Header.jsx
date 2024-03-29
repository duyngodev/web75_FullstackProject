import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar, Badge } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const link = "http://localhost:3001/user/logout";
const pages = [
  "Home",
  "Service/CategoryListPage",
  "Service",
  "AboutUs",
  "Event",
  "Contact",
];
const Header = (props) => {
  const { data } = props;
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [login, setLogin] = useState(null);
  const acces_cookie = Cookies.get("access_token");
  const refresh_cookie = Cookies.get("refresh_token");

  useEffect(() => {
    if (acces_cookie || (refresh_cookie && !acces_cookie)) {
      setLogin(true);
    }
    if (!refresh_cookie) {
      setLogin(null);
    }
  }, [refresh_cookie]);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await axios
      .delete(`${link}`, { withCredentials: true })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    navigate("/Home");
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar sx={{ backgroundColor: "#9e553b" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              size="large"
              aria-label="navbar"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block" },
              }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={"/" + page}>
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexGrow: "1",
              justifyContent: "center",
              p: "0 10% 0 20%",
            }}>
            <Link to="/Home">
              <Typography
                variant="h5"
                noWrap
                component="a"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                  fontSize: "30px",
                }}>
                G3Bakery
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              flexGrowth: 0,
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}>
            {login && (
              <Box>
                <IconButton
                  onClick={handleOpenUserMenu}
                  aria-label="account of current user"
                  aria-controls="menu-user"
                  aria-haspopup="true"
                  sx={{ p: 0, mr: 2 }}>
                  <Avatar
                    alt="user"
                    src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
                  />
                </IconButton>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-user"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" sx={{ lineHeight: "1" }}>
                      Profile
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      onClick={handleLogout}
                      sx={{ lineHeight: "1" }}>
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            )}
            {!login && (
              <Box
                sx={{
                  mr: 2,
                  display: "flex",
                  justifyContent: "space between",
                }}>
                <Box
                  sx={{
                    cursor: "pointer",
                    color: "white",
                    "&:hover": { color: "#333" },
                  }}
                  onClick={() => navigate("/login")}>
                  Login
                </Box>
                <span style={{ margin: "0 8px 0 8px" }}> / </span>
                <Box
                  sx={{
                    cursor: "pointer",
                    color: "white",
                    "&:hover": { color: "#333" },
                  }}
                  onClick={() => navigate("/register")}>
                  Sign up
                </Box>
              </Box>
            )}
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              onClick={() => navigate("/cart")}>
              <Badge badgeContent={data?.length} color="primary">
                {" "}
                <ShoppingCartIcon />
              </Badge>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
