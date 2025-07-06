import React from "react";
import "./SideNavUl.css";
import { Link } from "react-router-dom";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import PercentIcon from "@mui/icons-material/Percent";
import { useRef } from "react";

export default function SideNavUl() {
  let homeLink = useRef();
  let usersLink = useRef();
  let productsLink = useRef();
  let commentsLink = useRef();
  let offsLink = useRef();

  function homeLinkClicked() {
    homeLink.current.classList.toggle("active");
    usersLink.current.classList.remove("active");
    productsLink.current.classList.remove("active");
    commentsLink.current.classList.remove("active");
    offsLink.current.classList.remove("active");
  }

  function usersLinkClicked() {
    usersLink.current.classList.toggle("active");
    homeLink.current.classList.remove("active");
    productsLink.current.classList.remove("active");
    commentsLink.current.classList.remove("active");
    offsLink.current.classList.remove("active");
  }

  function productsLinkClicked() {
    productsLink.current.classList.toggle("active");
    usersLink.current.classList.remove("active");
    homeLink.current.classList.remove("active");
    commentsLink.current.classList.remove("active");
    offsLink.current.classList.remove("active");
  }

  function commentsLinkClicked() {
    commentsLink.current.classList.toggle("active");
    productsLink.current.classList.remove("active");
    usersLink.current.classList.remove("active");
    homeLink.current.classList.remove("active");
    offsLink.current.classList.remove("active");
  }

  function offsLinkClicked() {
    offsLink.current.classList.toggle("active");
    commentsLink.current.classList.remove("active");
    productsLink.current.classList.remove("active");
    usersLink.current.classList.remove("active");
    homeLink.current.classList.remove("active");
  }

  return (
    <ul className="SideNav-list">
      <Link
        to="/"
        className="SideNav-link"
        onClick={homeLinkClicked}
        ref={homeLink}
      >
        <HomeFilledIcon className="SideNav-icon" />
        <li className="SideNav-list-item">Home</li>
      </Link>
      <Link
        to="/users"
        className="SideNav-link"
        onClick={usersLinkClicked}
        ref={usersLink}
      >
        <PersonIcon className="SideNav-icon" />
        <li className="SideNav-list-item">Users</li>
      </Link>
      <Link
        to="/products"
        className="SideNav-link"
        onClick={productsLinkClicked}
        ref={productsLink}
      >
        <ShoppingBagIcon className="SideNav-icon" />
        <li className="SideNav-list-item">Products</li>
      </Link>
      <Link
        to="/comments"
        className="SideNav-link"
        onClick={commentsLinkClicked}
        ref={commentsLink}
      >
        <ModeCommentIcon className="SideNav-icon" />
        <li className="SideNav-list-item">Comments</li>
      </Link>
      <Link
        to="/offs"
        className="SideNav-link"
        onClick={offsLinkClicked}
        ref={offsLink}
      >
        <PercentIcon className="SideNav-icon" />
        <li className="SideNav-list-item">Offs</li>
      </Link>
    </ul>
  );
}