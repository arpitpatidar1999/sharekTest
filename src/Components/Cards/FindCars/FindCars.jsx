import { Box, Typography } from "@mui/material";
import React from "react";
import mapFG from "../../../assets/Sharek - Master File/EllipseB.png";
import mapBG from "../../../assets/Sharek - Master File/Ellipse1.png";

const FindCars = () => {
  return (
    <Box sx={{ width: "auto", height: "574px", display: "flex" }}>
      {" "}
      <Box position={"relative"} marginLeft={"80px"} marginTop={"40px"}>
        {" "}
        <img
          src={mapFG}
          alt="map"
          style={{ zIndex: 1, marginLeft: "20px" }}
        />{" "}
        <img
          src={mapBG}
          alt="map"
          style={{
            position: "absolute",
            zIndex: -1,
            left: "-20px ",
            top: "10px",
          }}
        />{" "}
      </Box>{" "}
      <Box>
        {" "}
        <Typography
          variant="h6"
          sx={{ color: "black", fontSize: "36px", fontWeight: "bold" }}
        >
          {" "}
          So how will you find cars?{" "}
        </Typography>{" "}
      </Box>{" "}
    </Box>
  );
};
export default FindCars;
