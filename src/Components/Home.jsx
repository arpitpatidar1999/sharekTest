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
import FindCars from './Cards/FindCars/FindCars';
import WhatsSpecial from "./Cards/WhatsSpecial/WhatsSpecial";
import Choose from "./Cards/Choose/Choose";
import HostYourCar from "./Cards/HostYourCar/HostYourCar";
import TestDrive from "./Cards/TestDrive/TestDrive";
import styles from './homeStyles.module.css'


const Home = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <div
        style={{
          alignItems: "center",
          height: "100vh",
          zIndex: 3,
          backgroundColor: "#EBE0E2",
          paddingBottom: "10vh"
        }}
      >
        <div>
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
          <div style={{ display: "flex" }}>
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
          </div>
        </div>
        <div
          style={{
            zIndex: 3,
            position: "relative",
            display: "flex",
          }}
        >
          <div style={{ width: "40%", padding: "100px" }}>
            <div
              variant="h6"
              style={{
                color: "white",
                fontSize: "48px",
                fontWeight: "bold",
                marginBottom: "5vh"
              }}
              className={styles.fadeInFromBottom}
            >
              Rent the perfect car for every occasion!
            </div>{" "}
            <div
              variant="h6"
              style={{
                color: "white",
                fontSize: "24px",
                marginBottom: "5vh"
              }}
              className={styles.fadeInFromBottom}
            >
              Rent the Perfect Car for Every Ocassion!
            </div>{" "}
            <br />
            <div style={{ alignItems: "center", color: "white", width: "300px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }} className={styles.fadeInFromBottom}>
                <img src={appleStore} alt="screen-view" />
                <img
                  src={playStore}
                  alt="screen-view"
                  style={{ paddingLeft: "5px" }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <br />
                <div style={{ alignSelf: "center" }} className={styles.fadeInFromBottom}>Or</div>
                <br />
                <div style={{ alignSelf: "center" }} className={styles.fadeInFromBottom}>Scan to Download</div>
                <br />
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={scan} alt="scanner" style={{}} className={styles.fadeInFromBottom} />
              </div>
            </div>
          </div>
          <div style={{ paddingTop: "30px" }}>
            <img src={iPhone} alt="screen-view" style={{}} className={styles.moveIn} />
          </div>
        </div>
      </div>
      <div>
        <div style={{ height: "683px", backgroundColor: "#EBE0E2" }}></div>
        <div style={{ height: "377px", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <OneStop />
          </div>
        </div>
      </div>
      <div><WhatsSpecial /></div>
      <div><FindCars /></div>
      <div><Choose /></div>
      <div><TestDrive /></div>
      <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}><HostYourCar /></div>
    </div>
  );
};

export default Home;
