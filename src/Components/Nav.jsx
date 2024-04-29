import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import Logo from "../assets/NavLogo/Logo.svg";
import { useEffect, useState } from "react";
import { useScrollTrigger } from "@mui/material";
import './Nav.css';

const pages = [
  "Browse Cars",
  "About",
  "Become a host",
  "Blog",
  "Referal Program",
];
const settings = ["EN", "AR", "HI"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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


  // const [isVisible, setIsVisible] = useState(true);

  // const trigger = useScrollTrigger({
  //   disableHysteresis: true,
  //   threshold: 0,
  // });

  // useEffect(() => {
  //   setIsVisible(!trigger);
  // }, [trigger]);

  return (
    <AppBar
      position="static"
      // className={isVisible ? "navbar-enter navbar-enter-active" : "navbar-exit navbar-exit-active"}
      style={{
        zIndex: 1,
        height: "80px",
        backgroundColor: "white",
        paddingTop: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "18px 18px",
        // transition: "transform 0.5s ease-in-out",
        // transform: isVisible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <Container maxWidth="xl" style={{}}>
        <Toolbar disableGutters style={{ marginTop: "0px", paddingTop: "0px" }}>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 10,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "purple",
              textDecoration: "none",
            }}
          >
            <img src={Logo} alt="sharek-logo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
            >
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
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                marginTop: "7px",
                width: "100%",
              }}
            >
              <Box>
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography variant="body1" textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                <Button
                  sx={{
                    p: "10px 30px",
                    m: "5px 20px",
                    backgroundColor: "wheat",
                    color: "black",
                    ":hover": { color: "black", backgroundColor: "wheat" },
                  }}
                >
                  {" "}
                  Log In
                </Button>
                <br />
                <Button
                  sx={{
                    p: "10px 30px",
                    m: "5px 20px",
                    backgroundColor: "black",
                    color: "white",
                    ":hover": { color: "black", backgroundColor: "#ccc" },
                  }}
                >
                  {" "}
                  Sign Up
                </Button>
              </Box>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "purple",
              textDecoration: "none",
            }}
          >
            <img src={Logo} alt="sharek-logo" />
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, zIndex: 2 }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontWeight: "500",
                  textTransform:"none"
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip> */}

            {/* <Tooltip title="Change Language"> */}
            <Box sx={{ display: "flex" }}>
              <Box>
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0, zIndex: 2 }}
                >
                  <LanguageIcon
                    sx={{ color: "black", padding: "10px" }}
                  ></LanguageIcon>
                </IconButton>
                {/* </Tooltip> */}
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
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
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Box>
                  <Button
                    sx={{
                      zIndex: 2,
                      p: "10px 30px",
                      m: "0 5px",
                      backgroundColor: "transparent",
                      color: "black",
                      ":hover": { color: "black", backgroundColor: "wheat" },
                    }}
                  >
                    {" "}
                    Log In
                  </Button>
                </Box>
                <Box>
                  <Button
                    sx={{
                      zIndex: 2,
                      p: "10px 30px",
                      m: "0 5px",
                      backgroundColor: "black",
                      color: "white",
                      ":hover": { color: "black", backgroundColor: "wheat" },
                    }}
                  >
                    {" "}
                    Sign Up
                  </Button>
                </Box>
              </Box>
            </Box>

            {/* </Tooltip> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
