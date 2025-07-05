import React from "react";
import "./SideNavUl.css";
import { Link } from "react-router-dom";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import PercentIcon from "@mui/icons-material/Percent";

export default function SideNavUl() {
  return (
    <ul className="SideNav-list">
      <Link to="/" className="SideNav-link">
        <HomeFilledIcon className="SideNav-icon" />
        <li className="SideNav-list-item">Home</li>
      </Link>
      <Link to="/users" className="SideNav-link">
        <PersonIcon className="SideNav-icon" />
        <li className="SideNav-list-item">Users</li>
      </Link>
      <Link to="/products" className="SideNav-link">
        <ShoppingBagIcon className="SideNav-icon" />
        <li className="SideNav-list-item">Products</li>
      </Link>
      <Link to="/comments" className="SideNav-link">
        <ModeCommentIcon className="SideNav-icon" />
        <li className="SideNav-list-item">Comments</li>
      </Link>
      <Link to="/offs" className="SideNav-link">
        <PercentIcon className="SideNav-icon" />
        <li className="SideNav-list-item">Offs</li>
      </Link>
    </ul>
  );
}