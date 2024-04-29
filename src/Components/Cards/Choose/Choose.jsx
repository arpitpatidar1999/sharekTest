import React from "react";
import { Box, Typography } from "@mui/material";
import CarouselCars from "../CarouselCars/CarouselCars";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";

const CAR_TYPES = [
  {
    name: "Electric"
  },
  {
    name: "Performance"
  },
  {
    name: "Convertibles"
  },
  {
    name: "Pet friendly"
  },
  {
    name: "Off-roading"
  },

]

const Choose = () => {
  return (
    <Box sx={{height: "784px", backgroundColor: "#EBE0E2"}}>
      <Box fontSize={"36px"} fontWeight={500} padding={"30px"} align={"center"}>
        Choose according to your taste
      </Box>
      <Box
        sx={{
          fontSize: "20px",
          fontWeight: 400,
          padding: "30px",
          padding: "0 420px",
          textAlignlign: "center",
          marginBottom: "5vh"
        }}
      >
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.{" "}
      </Box>
      <div>
        {

        }
      </div>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box
          sx={{
            width: "343px",
            height: "358px",
            backgroundColor: "#FFFFFF",
            margin: "5px",
            borderRadius: "8px",
          }}
        >
          <CarouselCars />
          <Box>
            <Typography
              style={{
                fontSize: "20px",
                marginLeft: "13px",
                marginTop: "14.5px",
                fontWeight: 500,
              }}
            >
              2020 Lexus LS 500h
            </Typography>
            <Box
              style={{
                fontSize: "16px",
                width: "13.75px",
                height: "15px",
                marginLeft: "11px",
                marginTop: "14.5px",
                fontWeight: 400,
                display: "flex",
                alignItems: "center",
              }}
            >
              <LocalGasStationOutlinedIcon style={{ color: "#9D8D92" }} />{" "}
              <span style={{ margin: "0 4px" }}>61%</span>{" "}
              <SpeedOutlinedIcon
                style={{ marginLeft: "12px", color: "#9D8D92" }}
              />{" "}
              <span style={{ margin: "0 4px" }}>12,800</span>
            </Box>
            <Box
              style={{
                textAlign: "right",
                marginTop: "10px",
                marginRight: "20px",
              }}
            >
              <span
                style={{ margin: "0 4px", fontWeight: 700, fontSize: "20px" }}
              >
                AED 600{" "}
                <span style={{ fontWeight: 450, color: "#827379" }}>
                  per day
                </span>
              </span>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "343px",
            height: "358px",
            backgroundColor: "#FFFFFF",
            margin: "5px",
            borderRadius: "8px",
          }}
        >
          <CarouselCars />
          <Box>
            <Typography
              style={{
                fontSize: "20px",
                marginLeft: "13px",
                marginTop: "14.5px",
                fontWeight: 500,
              }}
            >
              2020 Lexus LS 500h
            </Typography>
            <Box
              style={{
                fontSize: "16px",
                width: "13.75px",
                height: "15px",
                marginLeft: "11px",
                marginTop: "14.5px",
                fontWeight: 400,
                display: "flex",
                alignItems: "center",
              }}
            >
              <LocalGasStationOutlinedIcon style={{ color: "#9D8D92" }} />{" "}
              <span style={{ margin: "0 4px" }}>61%</span>{" "}
              <SpeedOutlinedIcon
                style={{ marginLeft: "12px", color: "#9D8D92" }}
              />{" "}
              <span style={{ margin: "0 4px" }}>12,800</span>
            </Box>
            <Box
              style={{
                textAlign: "right",
                marginTop: "10px",
                marginRight: "20px",
              }}
            >
              <span
                style={{ margin: "0 4px", fontWeight: 700, fontSize: "20px" }}
              >
                AED 600{" "}
                <span style={{ fontWeight: 450, color: "#827379" }}>
                  per day
                </span>
              </span>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "343px",
            height: "358px",
            backgroundColor: "#FFFFFF",
            margin: "5px",
            borderRadius: "8px",
          }}
        >
          <CarouselCars />
          <Box>
            <Typography
              style={{
                fontSize: "20px",
                marginLeft: "13px",
                marginTop: "14.5px",
                fontWeight: 500,
              }}
            >
              2020 Lexus LS 500h
            </Typography>
            <Box
              style={{
                fontSize: "16px",
                width: "13.75px",
                height: "15px",
                marginLeft: "11px",
                marginTop: "14.5px",
                fontWeight: 400,
                display: "flex",
                alignItems: "center",
              }}
            >
              <LocalGasStationOutlinedIcon style={{ color: "#9D8D92" }} />{" "}
              <span style={{ margin: "0 4px" }}>61%</span>{" "}
              <SpeedOutlinedIcon
                style={{ marginLeft: "12px", color: "#9D8D92" }}
              />{" "}
              <span style={{ margin: "0 4px" }}>12,800</span>
            </Box>
            <Box
              style={{
                textAlign: "right",
                marginTop: "10px",
                marginRight: "20px",
              }}
            >
              <span
                style={{ margin: "0 4px", fontWeight: 700, fontSize: "20px" }}
              >
                AED 600{" "}
                <span style={{ fontWeight: 450, color: "#827379" }}>
                  per day
                </span>
              </span>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Choose;
