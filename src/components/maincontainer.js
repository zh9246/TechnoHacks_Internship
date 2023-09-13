import React from 'react';
import { makeStyles } from '@mui/styles';
import reg from "../assets/p1.jpg";
import reg1 from "../assets/p2.jpg";
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    backgroundColor: 'white',
    padding: '20px',
    color: 'black',
    height: '450px',
    maxWidth: "100%", // Set the container's maximum width to 100%
    overflowX: "hidden",
  },

  heading: {
    fontSize: '50px',
    fontWeight: 'bold',
    fontFamily: 'Lato, sans-serif',
    textAlign: "left",
    width: '600px',
    marginTop: '40px',
    marginLeft: '10px',
  },
  subtitle: {
    fontSize: '18px',
    fontFamily: 'Lato, sans-serif',
    textAlign: "left",
    width: '550px',
    marginLeft: '10px',
    marginTop: '10px',
  },
  btn:{
    marginTop: "60px",
    marginLeft: theme.spacing(1.5),
  },
  lin:{
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "30px", 
    width: "140px",
    boxSizing: "border-box",
    fontWeight: "bold",
    borderRadius: 10,
    backgroundColor: "#00EBEB",
    fontSize: '15px',
    color: "#000000",
    transform: "none",
    transition: "background .3s, border-color .3s, color.3s" ,
    "&:hover":{
        background: "#9d9fa3"
    },
    fontFamily: "'Lato', sans-serif",
  },
  image1: {
    width: "560px",
    height: "400px",
    borderRadius:'20px'
    
  },
image:{
 float:'right',
  marginTop:'-300px',
},

image2:{
  width: "700px",
  height: "450px",
  borderRadius:'20px',
  marginTop:'100px',
  marginLeft:'110px'
 }
}));

const ContentContainer = () => {
  const classes = useStyles();
  const navigate=useNavigate()
  return (
    <div className={classes.contentContainer}>
      <div>
      <div className={classes.heading}>
      Take your career to the next level with a Techno-Hacks Internship
      </div>
      <div className={classes.subtitle}>
      Unlock your future in tech with our internship program! Join us and dive into the world of cutting-edge technology, hands-on experience, and career-boosting opportunities.
      </div>
      </div>
      <div className={classes.image}>
      <img className={classes.image1} src={reg} alt="" />
      </div>
      
    </div>
    
  );
};  

export default ContentContainer;
