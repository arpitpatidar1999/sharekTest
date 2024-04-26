import React from "react";
import { Box, Button } from "@mui/material";
import playStore from "../../../assets/Downloads/playStore.png"
import appleStore from "../../../assets/Downloads/appleStore.png"
import icon from "../../../assets/Sharek - Master File/Featured icon.svg"

const HostYourCar = () => {
  return (
    <Box
      sx={{
        width: "81.25%",
        height: "661px",
        backgroundColor: "#EAF2F7",
        padding: "36px 63px",
        // margin: "20px",
        borderRadius: "20px",
        // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)"
      }}
    >
      <Box sx={{ fontSize: "36px", fontWeight: 500, textAlign: "center" }}>
        <Box>How can you Host your Car on Sharek ?</Box>
      </Box>
      <Box
        sx={{
          fontSize: "20px",
          fontWeight: 400,
          textAlign: "center",
          marginTop: "26px",
        }}
      >
        Sharek was built to empower everyone to make side income
      </Box>
      <Box display={"flex"} marginTop={"22px"} justifyContent={"space-between"}>
        <Box
          sx={{
            p: "0 14.93px",
            backgroundColor: "#FAFCFF",
            borderRadius: "8px",
            width: "25%",
            height: "347px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Box display={"flex"} justifyContent={"center"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
                marginTop: "27px",
              }}
            >
              <img src={icon} alt="Featured-icon-sharek" />
            </Box>
          </Box>
          <Box
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "42px",
              marginTop: "26px",
              textAlign:"center"
            }}
          >
            Earn Passive Income
          </Box>
          <Box
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              marginTop: "26px",
              textAlign:"center"
            }}
          >
            Measure what matters with Untitled’s easy-to-use reports. You can
            filter, export, and drilldown on the data in a couple clicks.
          </Box>
        </Box>
        <Box
          sx={{
            p: "0 14.93px",
            backgroundColor: "#FAFCFF",
            borderRadius: "8px",
            width: "25%",
            height: "347px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Box display={"flex"} justifyContent={"center"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
                marginTop: "27px",
              }}
            >
              <img src={icon} alt="Featured-icon-sharek" />
            </Box>
          </Box>
          <Box
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "42px",
              marginTop: "26px",
              textAlign:"center"
            }}
          >
            Earn Passive Income{" "}
          </Box>
          <Box
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              marginTop: "26px",
              textAlign:"center"
            }}
          >
            Measure what matters with Untitled’s easy-to-use reports. You can
            filter, export, and drilldown on the data in a couple clicks.
          </Box>
        </Box>
        <Box
          sx={{
            p: "0 14.93px",
            backgroundColor: "#FAFCFF",
            borderRadius: "8px",
            width: "25%",
            height: "347px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Box display={"flex"} justifyContent={"center"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
                marginTop: "27px",
              }}
            >
              <img src={icon} alt="Featured-icon-sharek" />
            </Box>
          </Box>
          <Box
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "42px",
              marginTop: "26px",
              textAlign:"center"
            }}
          >
            Earn Passive Income
          </Box>
          <Box
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              marginTop: "26px",
              textAlign:"center"
            }}
          >
            Measure what matters with Untitled’s easy-to-use reports. You can
            filter, export, and drilldown on the data in a couple clicks.
          </Box>
        </Box>
      </Box>
      <Box align={"center"}>
        <Box
          sx={{
            fontSize: "20px",
            fontWeight: 400,
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          Download our App for the best experience
        </Box>
        <Box width={"292.5px"} display={"flex"} justifyContent={"space-around"} margin={"20px"}>
            <img src={appleStore} alt="apple-store-img"/>
            <img src={playStore} alt="play-store-img"/>
        </Box>
      </Box>
    </Box>
  );
};

export default HostYourCar;
