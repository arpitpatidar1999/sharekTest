import React from 'react'
import { Box } from '@mui/material'

const Choose = () => {
  return (
    <Box sx={{ height: "784px", backgroundColor: "#EBE0E2" }}>
      <Box fontSize={"36px"} fontWeight={500} padding={"30px"} align={"center"}>
      Choose according to your taste
      </Box>
      <Box sx={{fontSize:"20px", fontWeight:400, padding:"30px", padding:"0 420px",textAlignlign:"center"}}>
      Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.      </Box>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box sx={{width:"343px",height:"358px", backgroundColor:"#FFFFFF",margin:"5px", borderRadius:"8px"}}></Box>
        <Box sx={{width:"343px",height:"358px", backgroundColor:"#FFFFFF",margin:"5px", borderRadius:"8px"}}></Box>
        <Box sx={{width:"343px",height:"358px", backgroundColor:"#FFFFFF",margin:"5px", borderRadius:"8px"}}></Box>
      </Box>
    </Box>
  )
}

export default Choose