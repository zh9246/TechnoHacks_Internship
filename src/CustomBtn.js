import { Button } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const CustomButtonRoot = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "30px",
  width: "140px",
  boxSizing: "border-box",
  fontWeight: "bold",
  borderRadius: 10,
  backgroundColor: "purple",
  fontSize: "15px",
  color: "white",
  transform: "none",
  transition: "background .3s, border-color .3s, color.3s",
  "&:hover": {
    background: "white",
    color: "black",
  },
  fontFamily: "'Lato', sans-serif",
}));
const CustomBtn = ({ children, onClick }) => {
  return <CustomButtonRoot onClick={onClick}>{children}</CustomButtonRoot>;
};

export default CustomBtn;
