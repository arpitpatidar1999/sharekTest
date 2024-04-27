import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Paper, Typography, Button, MobileStepper, Box } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Carousel from "react-material-ui-carousel";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import car from '../../../assets/CarsImages/car1.svg'
const theme = createTheme(); // Create a theme object

const images = [
  {
    imgPath:
      car,
    label: 'Image 1',
  },
  {
    imgPath:
      car,
    label: 'Image 2',
  },
  {
    imgPath:
      car,
    label: 'Image 3',
  },
  {
    imgPath:
      car,
    label: 'Image 4',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    // margin: "10px 10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexGrow: 1,
  },
  image: {
    width: "100%",
    borderTopLeftRadius: "8px",
    borderTopRightRadius:"8px"
  },
}));

const CarouselCars = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;
  const [isHovered, setIsHovered] = useState(false);
  

  return (
    <ThemeProvider theme={theme}>
        {/* <Paper square elevation={0} className={classes.header}>
        <Typography>{images[activeStep].label}</Typography>
      </Paper> */}
      
         <Carousel
        className={classes.root}
        animation="slide"
        index={activeStep}
        
        navButtonsAlwaysVisible={isHovered}
        onChangeIndex={setActiveStep}

        indicatorContainerProps={{
          style: {
            position: 'absolute',
            bottom: 10, // Adjust as needed
            left: 0, // Adjust as needed
            right: 0, // Adjust as needed
            margin: '0 auto', // Center horizontally
            zIndex: 999, // Ensure it appears above the images
          }
        }}
        indicatorIconButtonProps={{
          style: {
            // Adjust styles for the indicator dots
          }
        }}
      >
        {images.map((item, index) => (
          <Box position={"relative"}><img
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          key={index}
          className={classes.image}
          src={item.imgPath}
          alt={item.label}
        />
        <BookmarkBorderIcon sx={{position:"absolute", top:"10px", right:"5px",color:"white"}}/>
        </Box>
        ))}
      </Carousel>
      
     
      
      
    </ThemeProvider>
  );
};

export default CarouselCars;
