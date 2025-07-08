import React from "react";
import "./TableBody.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function TableBody({ props, onDelete }) {
  let tdWidth = `${100 / props.length}%`;

  function deletIconClicked() {
    onDelete();
  }

  return (
    <table className="TableBody-container">
      {props.map((obj) => (
        <tr className="TableBody-row">
          <td className="TableBody-cell" style={{ width: tdWidth }}>
            {obj.name}
          </td>
          <td className="TableBody-cell" style={{ width: tdWidth }}>
            {obj.family}
          </td>
          <td className="TableBody-cell" style={{ width: tdWidth }}>
            {obj.email}
          </td>
          <td className="TableBody-cell" style={{ width: tdWidth }}>
            {obj.phone}
          </td>
          <td className="TableBody-cell" style={{ width: tdWidth }}>
            {obj.address}
          </td>
          <td
            className="TableBody-cell TableBody-trash-icon-wrapper"
            style={{ width: tdWidth }}
            onClick={deletIconClicked}
          >
            <div className="TableBody-trash-icon">
              <DeleteForeverIcon />
            </div>
          </td>
        </tr>
      ))}
    </table>
  );
}
