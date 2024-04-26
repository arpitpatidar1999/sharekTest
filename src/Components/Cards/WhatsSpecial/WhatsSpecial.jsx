import { Box } from "@mui/material";
import React from "react";

const WhatsSpecial = () => {
  return (
    <Box sx={{ height: "529px", backgroundColor: "#EAF2F7" }}>
      <Box fontSize={"36px"} fontWeight={500} padding={"30px"} align={"center"}>
        What’s special about sharek?
      </Box>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box sx={{width:"282px",height:"211px", backgroundColor:"#FFFFFF",margin:"5px", borderRadius:"8px", alignSelf:"end"}}>
          <Box sx={{height:"9.35px",backgroundColor:"#3D0025",width:"159px", m:"23.78px 14px 11.86px 14px"}}></Box>
          <Box sx={{m:"0 15.36px", fontSize:"20px"}}>Your next rental is just a few taps away. Enjoy a smooth, hassle-free experience tailored to your schedule.</Box>
        </Box>
        <Box sx={{width:"343px",height:"358px", backgroundColor:"#FFFFFF",margin:"5px", borderRadius:"8px"}}></Box>
        <Box sx={{width:"282px",height:"211px", backgroundColor:"#FFFFFF",margin:"5px", borderRadius:"8px",alignSelf:"baseline"}}>
            <Box sx={{height:"9.35px",backgroundColor:"#3D0025",width:"159px", m:"23.78px 14px 11.86px 14px"}}></Box>
            <Box sx={{m:"0 15.36px", fontSize:"20px"}}>Drive with confidence with our thorough vehicle and user verification, creating a trusted community. </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WhatsSpecial;
