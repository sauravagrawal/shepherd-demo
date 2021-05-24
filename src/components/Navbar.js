import React from "react";
import "../assets/css/Navbar.css";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div class="side-menu">
      <div class="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div class="menu">
        <div class="menu-item">
          <NavLink to="/" exact activeClassName="active">
            <DashboardIcon />
          </NavLink>
        </div>
        <div class="menu-item">
          <NavLink to="/sharedNotes" activeClassName="active">
            <AssignmentIcon />
          </NavLink>
        </div>
      </div>
      <div class="usericon">
        <img src="user.jpg" alt="User" />
      </div>
    </div>
  );
}

export default Navbar;
