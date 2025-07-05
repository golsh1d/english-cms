import React from "react";
import "./SideNavSm.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useRef } from "react";
import SideNavUl from "../sideNavUl/SideNavUl";

export default function SideNavSm() {
  let sideNavSmElem = useRef();
  let overlayElem = useRef();

  function moveSideNavToRight() {
    sideNavSmElem.current.style.transform = "translateX(0px)";
    overlayElem.current.style.display = "block";
  }

  function moveSideNavToLeft() {
    sideNavSmElem.current.style.transform = "translateX(-300px)";
    overlayElem.current.style.display = "none";
  }

  return (
    <>
      <section className="SideNavSm-icon-and-ul-container">
        <MenuIcon
          onClick={moveSideNavToRight}
          className="SideNavSm-menu-icon"
        />
        <section className="SideNavSm-container" ref={sideNavSmElem}>
          <SideNavUl />
        </section>
      </section>
      <div
        className="overlay"
        onClick={moveSideNavToLeft}
        ref={overlayElem}
      ></div>
    </>
  );
}
