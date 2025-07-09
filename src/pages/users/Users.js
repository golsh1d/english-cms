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
  const [isDelete, setIsDelete] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/users/")
      .then((res) => res.json())
      .then((data) => setTBodyData(data))
      .then(setIsDelete(null))
  }, [isDelete]);

  function sortByFirst() {
    let sortedTbodyData = [...tBodyData].sort((a, b) => a.id - b.id);
    setTBodyData(sortedTbodyData);
  }

  function sortByLast() {
    let sortedTbodyData = [...tBodyData].sort((a, b) => b.id - a.id);
    setTBodyData(sortedTbodyData);
  }

  function deleteUser(id) {
    fetch(`http://localhost:3000/api/users/deleteUser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(setIsDelete(true))
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
