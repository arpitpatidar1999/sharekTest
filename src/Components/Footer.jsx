import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/Footer/Group 4.svg";
import playStore from "../assets/Downloads/playStore.png"
import appleStore from "../assets/Downloads/appleStore.png"
import './Footer.css'

const Footer = () => {
  return (
    <Box>
      <Box
        sx={{ backgroundColor: "#1F1A1C", height: "204px",marginTop:"20px" ,padding: "64px 80px 48px 80px",display:"flex", }}
      >
        <Box marginLeft={"32px"}>
          <img src={Logo} alt="logo" />
        </Box>
        <Box marginLeft={"62px"} display={"flex"} flexDirection={"column"}>
      <Link className="link">
        Services
      </Link>
      <Link className="link">
        Terms and Conditions
      </Link>
      <Link className="link">
        Privacy
      </Link>
      <Link className="link">
        Contact Us
      </Link>
    </Box>
        <Box marginLeft={"62px"} display={"flex"} flexDirection={"column"}>
          <Link className="link">Twitter</Link>
          <Link className="link">LinkedIn</Link>
          <Link className="link">Facebook</Link>
          <Link className="link">GitHub</Link>
          <Link className="link">AngelList</Link>
          <Link className="link">Dribble</Link>
        </Box>
        <Box marginLeft={"62px"} width={"283px"} height={"40px"} display={"flex"} justifyContent={"space-between"}>
            <img src={appleStore} alt="" />
            <img src={playStore} alt="" />
        </Box>
      </Box>
      <Box height={"214px"}>
        
      </Box>
    </Box>
  );
};

export default Footer;
