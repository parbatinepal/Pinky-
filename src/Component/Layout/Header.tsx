import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#ce93d8" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CLIFFBYTE
          </Typography>
          <Tabs>
            <Link to="/home">
            <Tab label="Home" />
            </Link>
            <Link to="/aboutus">
            <Tab label="AboutUs" />
            </Link>
            <Link to="/studyabroad">
            <Tab label="StudyAbroad" />
            </Link>
            <Link to="\language preparation">
              <Tab label="Language Preparation"/>
            </Link>
            <Link to="\gallery">
              <Tab label="Gallery"/>
            </Link>
            <Link to="\contactus">
              <Tab label="ContactUs"/>
            </Link>
            <Link to="/register">
              <Tab label="Register" />
            </Link>
            <Link to="/login">
            <Tab label="login" />
            </Link>
            <Tab label="logout" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
