import React from "react";
import { Box, Typography } from "@mui/material";
import Rect from "../assets/Sharek - Master File/Rectangle 6724.png";
import Layover from "../assets/Sharek - Master File/Polygon 4.png";
import Sharek from "../assets/Sharek - Master File/sharek.png";
import K from "../assets/Sharek - Master File/Kkkk.png";
import iPhone from "../assets/Sharek - Master File/iPhone 14 Pro.png";

const Home = () => {
  return (
    <Box sx={{ m: 0, p: 0 }}>
      <Box
        sx={{
          // display: "flex",
          // justifyContent: "center",
          //   padding: "100px",
          alignItems: "center",
          //   width: "100%",
          height: "100vh",
          zIndex: 3,
          backgroundColor: "#EBE0E2",
          //   backgroundImage: `url(${Rect})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // position:'relative'
          // backgroundColor: "#9D396E"
        }}
      >
        <Box>
          <Box>
            {" "}
            <img
              src={Rect}
              alt="rectangle"
              style={{
                position: "absolute",
                top: "80px",
                right: "0px",
                zIndex: 1,
                width: "100%",
                height: "auto",
                // opacity:0.5
              }}
            />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <img
                src={Layover}
                alt="Layover Image"
                style={{
                  position: "absolute",
                  top: "0px",
                  right: "29.94px",
                  zIndex: 1,
                  opacity: 0.2,
                }}
              />
              <img
                src={Sharek}
                alt="sharek"
                style={{
                  position: "absolute",
                  top: "0px",
                  right: "0",
                  zIndex: 1,
                  opacity: 0.2,
                }}
              />
              <img
                src={K}
                alt="kkk"
                style={{
                  position: "absolute",
                  top: "80px",
                  right: "0",
                  height: "845.27px",
                  zIndex: 0,
                  opacity: 0.2,
                }}
              />
            </Box>
          </Box>
          <Box sx={{ zIndex: 3, position: "relative", display: "flex" }}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontSize: "50px",
                }}
              >
                Rent the perfect car for every cccasion!
              </Typography>{" "}
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  //   fontFamily: "inter",
                  fontSize: "18px",
                }}
              >
                Rent the Perfect Car for Every Ocassion!
              </Typography>{" "}
            </Box>
            <Box>
              <img src={iPhone} alt="screen-view" style={{}} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box sx={{ height: "490px", backgroundColor: "#EBE0E2" }}></Box>
        <Box sx={{ height: "377px" }}></Box>
      </Box>
    </Box>
  );
};

export default Home;
