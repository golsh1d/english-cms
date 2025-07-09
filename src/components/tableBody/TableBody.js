import React, { useState, useEffect } from "react";
import "./TableBody.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function TableBody({ props, onDelete }) {
  const [finalArray, setFinalArray] = useState([]);

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
    onDelete(id);
  }

  return (
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
  );
}
