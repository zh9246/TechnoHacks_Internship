import React from "react";

import Signoutbtn from "./signoutbtn";
import { Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import CustomBtn from "../CustomBtn";

import { useNavigate } from "react-router-dom";

const styles = makeStyles((theme) => ({
  bar: {
    backgroundColor: "black",
    color: "#FFFFFF",
    display: "flex",
    maxWidth: "100%",
    overflowX: "hidden",
    justifyContent: "space-between",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    paddingRight: "370px",
  },

  btn: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "34px",
    width: "150px",
    boxSizing: "border-box",
    fontWeight: "bold",
    borderRadius: 10,
    backgroundColor: "#00EBEB",
    fontSize: "20px",
    color: "#000000",
    transform: "none",
    transition: "background .3s, border-color .3s, color.3s",
    "&:hover": {
      background: "#9d9fa3",
    },
    fontFamily: "'Lato', sans-serif",
  },
  lin: {
    textDecoration: "none",
    marginLeft: "20px",
    marginRight: "830px",
  },
  n: {
    color: "purple",
    fontWeight: "bold",
    fontSize: "24px",

    fontFamily: "'Lato', sans-serif",
  },
}));

function NavBar() {
  const classes = styles();
  const navigate = useNavigate();
  const sign = () => navigate("/signup");
  const logi = () => navigate("/login");
  return (
    <Toolbar position="sticky" className={classes.bar}>
      <div className={classes.n}>TechnoHack</div>
      {/* <div className={classes.menuItem}>
      About Us
      </div>

      <div className={classes.menuItem}>
        Features
      </div>

      <div className={classes.menuItem}>
        Pricing
      </div>

      <div className={classes.menuItem}>
        Products
      </div> */}
      <nav>
        <NavLink className={classes.lin} to="/" activeClassName="active">
          Home
        </NavLink>
      </nav>
      <div>
        <CustomBtn onClick={sign}>SIGN UP</CustomBtn>
      </div>

      <div>
        <Signoutbtn onClick={logi}>Log In</Signoutbtn>
      </div>
    </Toolbar>
  );
}

export default NavBar;
