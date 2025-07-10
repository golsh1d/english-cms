import React from "react";
import "./DeleteModal.css";

export default function DeleteModal({ children, onYes, onNo }) {
  function noBtnClicked() {
    onNo()
  }

  function yesBtnClicked() {
    onYes()
  }

  return (
    <div className="DeleteModal-container">
      <div className="DeleteModal-box">
        <span className="DeleteModal-text">{children}</span>
        <div className="DeleteModal-btn-container">
          <button
            className="DeleteModal-btn DeleteModal-no-btn"
            onClick={noBtnClicked}
          >
            No
          </button>
          <button
            className="DeleteModal-btn DeleteModal-yes-btn"
            onClick={yesBtnClicked}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
