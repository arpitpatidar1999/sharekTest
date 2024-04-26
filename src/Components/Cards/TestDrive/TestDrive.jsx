import React from "react";
import { Box, Button } from "@mui/material";
import toyota from "../../../assets/CarsBrandLogos/toyota.svg"
import audi from "../../../assets/CarsBrandLogos/audi.svg"
import ferrari from "../../../assets/CarsBrandLogos/ferrari.svg"
import tesla from "../../../assets/CarsBrandLogos/tesla.svg"
import bentley from "../../../assets/CarsBrandLogos/bentley.svg"
import ford from "../../../assets/CarsBrandLogos/ford.svg"
import lambo from "../../../assets/CarsBrandLogos/lambo.svg"

const TestDrive = () => {
  return (
    <Box height={"316px"} m={"40px 115px"}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box>
          <Box sx={{ fontSize: "36px", fontWeight: 500, width: "50%" }}>
            Want to test drive your dream car?
          </Box>
          <Box
            sx={{
              fontSize: "20px",
              fontWeight: 400,
              marginTop: "26px",
              width: "90%",
            }}
          >
            You can now drive your car and mule overall the reasons to buy it
            before making a commitment.
          </Box>
        </Box>
        <Box>
          <Button
            sx={{
              height: "44px",
              width: "293px",
              backgroundColor: "#1F1A1C",
              color: "#FFFFFF",
              fontSize: "18px",
              textTransform: "none",
              fontWeight: 500,
              // margin: "46px 0 36px 0",
            }}
          >
            Browse Cars
          </Button>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} mt={"15px"}  width={"auto"}>
        <Box><img src={toyota} alt="toyota-logo" /></Box>
        <Box><img src={audi} alt="audi-logo" /></Box>
        <Box><img src={ferrari} alt="ferrari-logo" /></Box>
        <Box><img src={tesla} alt="tesla-logo" /></Box>
        <Box><img src={bentley} alt="bentley-logo" /></Box>
        <Box><img src={ford} alt="ford-logo" /></Box>
        <Box><img src={lambo} alt="lambo-logo" /></Box>
      </Box>
    </Box>
  );
};

export default TestDrive;
