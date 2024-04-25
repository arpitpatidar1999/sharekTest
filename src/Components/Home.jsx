import React from "react";
import { Box, Typography } from "@mui/material";
import Rect from "../assets/Sharek - Master File/Rectangle 6724.png";
import Layover from "../assets/Sharek - Master File/Polygon 4.png";
import Sharek from "../assets/Sharek - Master File/sharek.png";
import K from "../assets/Sharek - Master File/Kkkk.png";
import iPhone from "../assets/Sharek - Master File/iPhone 14 Pro (5).png";
import playStore from "../assets/Downloads/playStore.png";
import appleStore from "../assets/Downloads/appleStore.png";
import scan from "../assets/Downloads/scan.svg";

import OneStop from "./Cards/OneStop/OneStop";

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
          <Box
            sx={{
              zIndex: 3,
              position: "relative",
              display: { sx: "block", md: "flex" },
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "40%" }, p: "100px" }}>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontSize: "48px",
                  fontWeight: "bold",
                }}
              >
                Rent the perfect car for every cccasion!
              </Typography>{" "}
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontSize: "24px",
                }}
              >
                Rent the Perfect Car for Every Ocassion!
              </Typography>{" "}
              <br />
              <Box alignItems={"center"} color={"white"} width={"300px"}>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <img src={appleStore} alt="screen-view" />
                  <img
                    src={playStore}
                    alt="screen-view"
                    style={{ paddingLeft: "5px" }}
                  />
                </Box>

                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                >
                  <br />
                  <Box alignSelf={"center"}>Or</Box>
                  <br />
                  <Box alignSelf={"center"}>Scan to Download</Box>
                  <br />
                </Box>
                <Box display={"flex"} justifyContent={"center"}>
                  <img src={scan} alt="scanner" style={{}} />
                </Box>
              </Box>
            </Box>
            <Box padding={"0"}>
              <img src={iPhone} alt="screen-view" style={{}} />
              {/* <img src={screen} alt="screen-view" style={{position:"absolute",top:"0", left:"0", zIndex:2}} /> */}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box sx={{ height: "683px", backgroundColor: "#EBE0E2" }}></Box>
        <Box sx={{ height: "377px", position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              display:"flex",
              justifyContent:"center"
            //   left: "50%",
            //   transform: "translateX(-50%)",
            }}
          >
            <OneStop />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
