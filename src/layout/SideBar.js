import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCalendar,
  FaSearch,
  FaPlus,
  FaUsersCog,
} from "react-icons/fa";
import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sideBar-link-container">
        <NavLink
          to="/home"
          className="sidebar-link"
          activeClassName="sidebar-link-active"
        >
          <FaHome size="50" />
        </NavLink>
      </div>
      <div className="sideBar-link-container">
        <NavLink
          to="/calendar"
          className="sidebar-link"
          activeClassName="sidebar-link-active"
        >
          <FaCalendar size="50" />
        </NavLink>
      </div>
      <div className="sideBar-link-container">
        <NavLink
          to="/search"
          className="sidebar-link"
          activeClassName="sidebar-link-active"
        >
          <FaSearch size="50" />
        </NavLink>
      </div>
      <div className="sideBar-link-container">
        <NavLink
          to="/add"
          className="sidebar-link"
          activeClassName="sidebar-link-active"
        >
          <FaPlus size="50" />
        </NavLink>
      </div>
      <div className="sideBar-link-container">
        <NavLink
          to="/settings"
          className="sidebar-link"
          activeClassName="sidebar-link-active"
        >
          <FaUsersCog size="50" />
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
