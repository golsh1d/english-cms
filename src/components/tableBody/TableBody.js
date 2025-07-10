import React, { useState, useEffect } from "react";
import "./TableBody.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteModal from "../deleteModal/DeleteModal";

export default function TableBody({ props, onDelete }) {
  const [finalArray, setFinalArray] = useState([]);
  const [modalIsShown, setModalIsShown] = useState(false);
  const [userID, setUserID] = useState();

  let objLength = Object.keys(props[0]).length;
  let tdWidth = `${100 / objLength}%`;

  useEffect(() => {
    finalArray.length = 0;
    let tempArray = [];

    props.map((obj) => {
      let arr = Object.values(obj);
      tempArray.push(arr);
    });

    setFinalArray(tempArray);
  }, [props]);

  function deletIconClicked(id) {
    setUserID(id);
    setModalIsShown(true);
  }

  function deleteUser(id) {
    onDelete(id);
    setModalIsShown(false);
  }

  function closeModal() {
    setModalIsShown(false);
  }

  return (
    <>
      <table className="TableBody-container">
        {finalArray.map((arr) => (
          <tr className="TableBody-row">
            {arr.map((i) => (
              <td className="TableBody-cell" style={{ width: tdWidth }}>
                {i}
              </td>
            ))}
            <td
              className="TableBody-trash-icon-wrapper"
              style={{ width: tdWidth }}
            >
              <DeleteForeverIcon
                className="TableBody-trash-icon"
                onClick={() => deletIconClicked(arr[0])}
              />
            </td>
          </tr>
        ))}
      </table>
      {modalIsShown && (
        <DeleteModal onYes={() => deleteUser(userID)} onNo={closeModal}>
          Are you sure you want to delete the user?
        </DeleteModal>
      )}
    </>
  );
}
