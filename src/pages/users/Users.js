import React from "react";
import "./Users.css";
import TableHead from "../../components/tableHead/TableHead";
import TableBody from "../../components/tableBody/TableBody";
import { useState, useEffect } from "react";

export default function Users() {
  const [tHeadData, setTHeadData] = useState([
    { id: 1, title: "ID" },
    { id: 2, title: "Name" },
    { id: 3, title: "Family Name" },
    { id: 4, title: "Phone" },
    { id: 5, title: "Address" },
    { id: 6, title: "Postal Code" },
  ]);
  const [tBodyData, setTBodyData] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/api/users/")
      .then((res) => res.json())
      .then((data) => setTBodyData(data));
  }, []);

  function sortByFirst() {
    console.log("sort by first");
  }

  function sortByLast() {
    console.log("sort by last");
  }

  function deleteUser() {
    console.log("user deleted");
  }

  return (
    <>
      <TableHead
        props={tHeadData}
        onSortByFirst={sortByFirst}
        onSortByLast={sortByLast}
      />
      {tBodyData && <TableBody props={tBodyData} onDelete={deleteUser} />}
    </>
  );
}
