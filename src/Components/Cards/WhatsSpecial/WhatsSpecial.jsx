import { Box, Typography } from "@mui/material";
import React from "react";
import CarouselCars from "../CarouselCars/CarouselCars";
import LocalGasStationOutlinedIcon from '@mui/icons-material/LocalGasStationOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import styles from './whatsSpecialStyles.module.css'


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
        <Box sx={{width:"343px",height:"358px", backgroundColor:"#FFFFFF",margin:"5px", borderRadius:"8px"}}>
          <CarouselCars/>
          <Box><Typography style={{fontSize:'20px', marginLeft: '13px', marginTop: '14.5px', fontWeight: 500}}>
          2020 Lexus LS 500h
          </Typography>
          <Box style={{fontSize:'16px', width:'13.75px', height:'15px', marginLeft: '11px', marginTop: '14.5px', fontWeight: 400, display:"flex", alignItems:'center'}}>
          <LocalGasStationOutlinedIcon style={{color: "#9D8D92"}}/> <span style={{margin:"0 4px"}}>61%</span> <SpeedOutlinedIcon style={{marginLeft:'12px', color: "#9D8D92"}}/> <span style={{margin:"0 4px"}}>12,800</span>
          </Box>
          <Box style={{textAlign: 'right', marginTop:'10px', marginRight:'20px'}}><span style={{margin:"0 4px", fontWeight: 700, fontSize:'20px'}}>AED 600 <span style={{fontWeight:450, color:'#827379'}} >per day</span></span></Box>
          </Box>
        </Box>
        <Box sx={{width:"282px",height:"211px", backgroundColor:"#FFFFFF",margin:"5px", borderRadius:"8px",alignSelf:"baseline"}}>
            <Box sx={{height:"9.35px",backgroundColor:"#3D0025",width:"159px", m:"23.78px 14px 11.86px 14px"}}></Box>
            <Box sx={{m:"0 15.36px", fontSize:"20px"}}>Drive with confidence with our thorough vehicle and user verification, creating a trusted community. </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WhatsSpecial;
