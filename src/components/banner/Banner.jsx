import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react"
import Carousel from "./Carousel";
const useStyles = makeStyles(() => ({
  banner: {   
    backgroundImage: "url(./banner2.jpg)",
    minHeight: 450,
    paddingTop: 25,
},
bannerContent: {
    display: "flex",
    flexDirection: "coloumn",    
    justifyContent: "space-around",    
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container classname={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Helvetica",
              color: "Coral"
            }}
          >
            IndiCrypto 🚀
            <Typography
              variant="subtitle2"
              style={{
                color: "white",
                transform: "capitalize",
                fontFamily: "Montserrat",
              }}
            >
              "Stay updated on your favorite cryptocurrency with India's own platform for live crypto currency tracking and updates."
            </Typography>
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
