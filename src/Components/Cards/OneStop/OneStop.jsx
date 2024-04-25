import React from "react";
import { Box, Button } from "@mui/material";

const OneStop = () => {
  return (
    <Box
      sx={{
        width: "81.25%",
        height: "661px",
        backgroundColor: "#FFFFFF",
        padding: "36px 63px",
        // margin: "20px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)"
      }}
    >
      <Box sx={{ fontSize: "36px", fontWeight: 500, textAlign: "center", position:"relative"}}>
        <Box zIndex={1} position={"relative"}>One stop for all your automobile needs</Box>
        <Box backgroundColor={"#EAF2F7"} width={"481.72px"} height={"36px"} position={"absolute"} top={"20px"} left={"340px"} zIndex={0}></Box>
      </Box>
      <Box
        sx={{
          fontSize: "20px",
          fontWeight: 400,
          textAlign: "center",
          marginTop: "26px",
        }}
      >
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </Box>
      <Box display={"flex"} marginTop={"22px"} justifyContent={"space-between"}>
        <Box
          sx={{
            p: "0 14.93px",
            backgroundColor: "#FAFCFF",
            borderRadius: "8px",
            width: "25%",
            height: "347px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)"
          }}
        >
          <Box display={"flex"} justifyContent={"center"}><Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "40px",
              height: "40px",
              backgroundColor: "black",
              borderRadius: "50%",
              color: "white",
              fontSize: "21.85px",
              fontWeight: 500,
              marginTop: "27px",
            }}
          >
            01
          </Box></Box>
          <Box
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              lineHeight:"42px",
              marginTop: "26px",
            }}
          >
            Find the perfect car to for your next staycation
          </Box>
          <Box sx={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight:"24px",
              marginTop: "26px",
            }}>
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </Box>
        </Box>
        <Box
          sx={{
            p: "0 14.93px",
            backgroundColor: "#FAFCFF",
            borderRadius: "8px",
            width: "25%",
            height: "347px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)"
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
              backgroundColor: "black",
              borderRadius: "50%",
              color: "white",
              fontSize: "21.85px",
              fontWeight: 500,
              marginTop: "27px",
            }}
          >
            02
          </Box></Box>
          <Box
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              lineHeight:"42px",
              marginTop: "26px",
            }}
          >
            Find the perfect car to try before you buy
          </Box>
          <Box sx={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight:"24px",
              marginTop: "26px",
            }}>
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </Box>
        </Box>
        <Box
          sx={{
            p: "0 14.93px",
            backgroundColor: "#FAFCFF",
            borderRadius: "8px",
            width: "25%",
            height: "347px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)"
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
              backgroundColor: "black",
              borderRadius: "50%",
              color: "white",
              fontSize: "21.85px",
              fontWeight: 500,
              marginTop: "27px",
            }}
          >
            03
          </Box></Box>
          <Box
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              lineHeight:"42px",
              marginTop: "26px",
            }}
          >
            Find the perfect car to for your next staycation
          </Box>
          <Box sx={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight:"24px",
              marginTop: "26px",
            }}>
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </Box>
        </Box>
      </Box>
      <Box align={"center"}>
        <Button
          sx={{
            height: "44px",
            width: "293px",
            backgroundColor: "#1F1A1C",
            color: "#FFFFFF",
            fontSize: "18px",
            textTransform: "none",
            fontWeight: 500,
            margin: "46px 0 36px 0",
          }}
        >
          Browse Cars
        </Button>
      </Box>
    </Box>
  );
};

export default OneStop;
