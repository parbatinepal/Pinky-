import { AppBar, Button, Fade, Menu, MenuItem, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
            
            {/* <Link to="/studyabroad">
            <Tab label="StudyAbroad" />
            </Link> */}

<div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        StudyAbroad
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Study in USA</MenuItem>
        <MenuItem onClick={handleClose}>Study in Japan</MenuItem>
        <MenuItem onClick={handleClose}>Study in Canada</MenuItem>
      </Menu>
    </div>

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
