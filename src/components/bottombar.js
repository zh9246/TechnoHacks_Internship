import React from "react";

import { Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import insta from "../assets/insta.png";
import fb from "../assets/fb.png";
import lkd from "../assets/lkd.png";
import Box from "@mui/material/Box";

const styles = makeStyles((theme) => ({
  bottombar: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    display: "flex",
    maxWidth: "100%", // Set the container's maximum width to 100%
    overflowX: "hidden",
    justifyContent: "space-between",
    // position: "relative",
    height: "350px",
    alignItems: "flex-start",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    paddingRight: "200px",
    alignItems: "flex-start",
    marginLeft: "px",
  },
  name: {
    color: "purple",

    fontWeight: "bold",
    fontSize: "24px",
    marginLeft: "0px",
    fontFamily: "'Lato', sans-serif",
    marginTop: "-100px",
  },

  note: {
    width: "550px",
    fontFamily: "'Lato', sans-serif",
    marginTop: "20px",
    textAlign: "justify",
    marginLeft: "30px",
  },

  menuItem: {
    cursor: "pointer",

    color: "#ffffff",
  },

  note: {
    width: "550px",
    fontFamily: "'Lato', sans-serif",
    marginTop: "20px",
    textAlign: "justify",
    marginLeft: "0px",
  },

  menuItem: {
    cursor: "pointer",
    color: "#ffffff",
    marginTop: "20px",
    fontFamily: "'Lato', sans-serif",
    fontWeight: "bold",
    fontSize: "18px",
    width: "80px",
    marginLeft: "180px",
    marginRight: "200px",
    "&:hover": {
      color: "purple",
    },
  },

  company: {
    cursor: "pointer",
    color: "#ffffff",
    marginTop: "55px",
    fontFamily: "'Lato', sans-serif",
    fontWeight: "bold",
    fontSize: "25px",
    // flexGrow: 1,
    width: "80px",
    marginLeft: "170px",
    marginRight: "0px",
    "&:hover": {
      color: "purple",
    },
  },
  menuContainer: {
    display: "flex",
    flexDirection: "column",
    marginRight: "50px",
    marginTop: "-40px",
  },

  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",

    marginTop: "40px",
  },
  icon: {
    width: "30px",
    height: "30px",
    cursor: "pointer",
    margin: "8px",
    marginTop: "10px",
  },
}));
function Bottombar() {
  const classes = styles();
  return (
    <Toolbar
      sx={{
        flexGrow: "1.5",
      }}
      position="sticky"
      className={classes.bottombar}
    >
      <Box
        sx={{
          marginLeft: "8px",
        }}
      >
        <div className={classes.titleContainer}>
          <div className={classes.name}>TechnoHack</div>

          <div className={classes.note}>
            Unlock your future in tech with our internship program! Join us and
            dive into the world of cutting-edge technology, hands-on experience,
            and career-boosting opportunities.
          </div>

          <div className={classes.iconContainer}>
            <img src={insta} className={classes.icon} />
            <img src={fb} className={classes.icon} />
            <img src={lkd} className={classes.icon} />
          </div>
        </div>
      </Box>
      <div className={classes.menuContainer}>
        <div className={classes.company}>Company</div>

        <div className={classes.menuItem}>About Us</div>

        <div className={classes.menuItem}>Features</div>

        <div className={classes.menuItem}>Pricing</div>

        <div className={classes.menuItem}>Products</div>
      </div>
    </Toolbar>
  );
}

export default Bottombar;
