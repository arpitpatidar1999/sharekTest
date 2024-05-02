import React, { useEffect, useState } from "react";
import CarouselCars from "../CarouselCars/CarouselCars";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import styles from './chooseStyles.module.css'

const Choose = () => {

  const [cardNumber, setCardNumber]  = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCardNumber(prev => prev + 1); // Increment cardNumber
    }, 200);
  
    // Clean up the interval when the component unmounts or when cardNumber changes
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array for running effect once

  return (
    <div style={{ height: "784px", backgroundColor: "#EBE0E2" }}>
      <div style={{ fontSize: "36px", fontWeight: 500, padding: "30px", textAlign: "center" }} className={styles.fadeInFromBottom}>
        Choose according to your taste
      </div>
      <div style={{ fontSize: "20px", fontWeight: 400, padding: "0 420px", textAlign: "center", marginBottom: "5vh" }} className={styles.fadeInFromBottom}>
        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", columnGap: '3vw' }}>
       {cardNumber >= 0 && <div style={{ width: "343px", height: "358px", backgroundColor: "#FFFFFF", margin: "5px", borderRadius: "8px", animation: `${styles.moveIn} 1s forwards` }}>
          <CarouselCars />
          <div>
            <div style={{ fontSize: "20px", marginLeft: "13px", marginTop: "14.5px", fontWeight: 500 }}>
              2020 Lexus LS 500h
            </div>
            <div style={{ fontSize: "16px", width: "13.75px", height: "15px", marginLeft: "11px", marginTop: "14.5px", fontWeight: 400, display: "flex", alignItems: "center" }}>
              <LocalGasStationOutlinedIcon style={{ color: "#9D8D92" }} />{" "}
              <span style={{ margin: "0 4px" }}>61%</span>{" "}
              <SpeedOutlinedIcon style={{ marginLeft: "12px", color: "#9D8D92" }} />{" "}
              <span style={{ margin: "0 4px" }}>12,800</span>
            </div>
            <div style={{ textAlign: "right", marginTop: "10px", marginRight: "20px" }}>
              <span style={{ margin: "0 4px", fontWeight: 700, fontSize: "20px" }}>
                AED 600{" "}
                <span style={{ fontWeight: 450, color: "#827379" }}>per day</span>
              </span>
            </div>
          </div>
        </div>}
       {cardNumber >= 1 && <div style={{ width: "343px", height: "358px", backgroundColor: "#FFFFFF", margin: "5px", borderRadius: "8px", animation: `${styles.moveIn} 1s forwards` }}>
          <CarouselCars />
          <div>
            <div style={{ fontSize: "20px", marginLeft: "13px", marginTop: "14.5px", fontWeight: 500 }}>
              2020 Lexus LS 500h
            </div>
            <div style={{ fontSize: "16px", width: "13.75px", height: "15px", marginLeft: "11px", marginTop: "14.5px", fontWeight: 400, display: "flex", alignItems: "center" }}>
              <LocalGasStationOutlinedIcon style={{ color: "#9D8D92" }} />{" "}
              <span style={{ margin: "0 4px" }}>61%</span>{" "}
              <SpeedOutlinedIcon style={{ marginLeft: "12px", color: "#9D8D92" }} />{" "}
              <span style={{ margin: "0 4px" }}>12,800</span>
            </div>
            <div style={{ textAlign: "right", marginTop: "10px", marginRight: "20px" }}>
              <span style={{ margin: "0 4px", fontWeight: 700, fontSize: "20px" }}>
                AED 600{" "}
                <span style={{ fontWeight: 450, color: "#827379" }}>per day</span>
              </span>
            </div>
          </div>
        </div>}
       {cardNumber >= 2 && <div style={{ width: "343px", height: "358px", backgroundColor: "#FFFFFF", margin: "5px", borderRadius: "8px", animation: `${styles.moveIn} 1s forwards` }}>
          <CarouselCars />
          <div>
            <div style={{ fontSize: "20px", marginLeft: "13px", marginTop: "14.5px", fontWeight: 500 }}>
              2020 Lexus LS 500h
            </div>
            <div style={{ fontSize: "16px", width: "13.75px", height: "15px", marginLeft: "11px", marginTop: "14.5px", fontWeight: 400, display: "flex", alignItems: "center" }}>
              <LocalGasStationOutlinedIcon style={{ color: "#9D8D92" }} />{" "}
              <span style={{ margin: "0 4px" }}>61%</span>{" "}
              <SpeedOutlinedIcon style={{ marginLeft: "12px", color: "#9D8D92" }} />{" "}
              <span style={{ margin: "0 4px" }}>12,800</span>
            </div>
            <div style={{ textAlign: "right", marginTop: "10px", marginRight: "20px" }}>
              <span style={{ margin: "0 4px", fontWeight: 700, fontSize: "20px" }}>
                AED 600{" "}
                <span style={{ fontWeight: 450, color: "#827379" }}>per day</span>
              </span>
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default Choose;
