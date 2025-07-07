import React from "react";
import "./Users.css";
import TableHead from "../../components/tableHead/TableHead";
import { useState } from "react";

export default function Users() {
  const [tHeadData, setTHeadData] = useState([
    { id: 1, title: "Name" },
    { id: 2, title: "Family Name" },
    { id: 3, title: "Email" },
    { id: 4, title: "Phone" },
    { id: 5, title: "Address" },
  ]);

  function sortByFirst() {
    console.log("sort by first");
  }

  function sortByLast() {
    console.log("sort by last");
  }

  return (
    <>
      <TableHead
        props={tHeadData}
        onSortByFirst={sortByFirst}
        onSortByLast={sortByLast}
      />
    </>
  );
}
