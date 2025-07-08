import React from "react";
import "./TableHead.css";
import { useState, useEffect } from "react";
import SwapVertIcon from "@mui/icons-material/SwapVert";

export default function TableHead({ props, onSortByFirst, onSortByLast }) {
  let tdWidth = `${100 / props.length}%`;
  
  function sortByFirstClicked() {
    onSortByFirst();
  }

  function sortByLastClicked() {
    onSortByLast();
  }

  return (
    <table className="TableHead-container">
      <tr className="TableHead-row">
        {props.map((obj) => (
          <th className="TableHead-cell" style={{ width: tdWidth }}>
            {obj.title}
          </th>
        ))}
        <th
          className="TableHead-cell TableHead-sort-icon-wrapper"
          style={{ width: tdWidth }}
        >
          <SwapVertIcon className="TableHead-sort-icon" />
          <div className="TableHead-sort-icon-sub-menu">
            <div
              className="TableHead-sort-icon-sub-menu-item"
              onClick={sortByFirstClicked}
            >
              sort by first
            </div>
            <div
              className="TableHead-sort-icon-sub-menu-item"
              onClick={sortByLastClicked}
            >
              sort by last
            </div>
          </div>
        </th>
      </tr>
    </table>
  );
}
