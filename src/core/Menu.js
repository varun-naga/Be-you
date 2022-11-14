import { Avatar,Link } from "@mui/material";
import React, { Fragment, useState } from "react";
import { Navigate } from "react-router-dom";
import { deepOrange, deepPurple } from '@mui/material/colors';
import Men from "./Categories/Men";
import Women from "./Categories/Women";
import Kids from "./Categories/Kids";
import Profile from "../user/Profile";
import ProfileDropdown from "./ProfileDropdown";

const Menu = ({isAuthenticated,signout}) => (

  <div style={{height:"55px", backgroundColor: 'black'}}>
      <Link variant="body1" href="/" style={{marginLeft:"20px",marginTop:"10px"}} underline="none">Home</Link>
      <Men />
      <Women />
      <Kids />
      <Link variant="body1" href="/cart" style={{marginLeft:"20px",marginTop:"10px"}} underline="none">Cart</Link>
      {isAuthenticated() && isAuthenticated().user.role === 1 && (
        
        <Link variant="body1" href="/admin/dashboard" style={{marginLeft:"20px",marginTop:"10px"}} underline="none">Dashboard</Link>
      )}
      {!isAuthenticated() && (
        <Fragment>
          
          <Link variant="body1" href="/signup" style={{marginLeft:"20px",marginTop:"10px"}} underline="none">Signup</Link>
          <Link variant="body1" href="/signin" style={{marginLeft:"20px",marginTop:"10px"}} underline="none">Sign In</Link>
          
        </Fragment>
      )}
      {<h2 className="display-4 text-white" style={{marginLeft:"780px",marginTop:"-50px"}}>Be You</h2>}
      {isAuthenticated() &&(<ProfileDropdown/>)}
  </div>
);

export default Menu;
