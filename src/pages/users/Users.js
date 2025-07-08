import React from "react";
import "./Users.css";
import TableHead from "../../components/tableHead/TableHead";
import TableBody from "../../components/tableBody/TableBody";
import { useState } from "react";

export default function Users() {
  const [tHeadData, setTHeadData] = useState([
    { id: 1, title: "Name" },
    { id: 2, title: "Family Name" },
    { id: 3, title: "Email" },
    { id: 4, title: "Phone" },
    { id: 5, title: "Address" },
  ]);

  const [tBodyData, setBodyData] = useState([
    {
      id: 1,
      name: "golshid",
      family: "ebrahimi",
      email: "golshid@gmail.com",
      phone: "09124601305",
      address: "iran karaj",
    },
    {
      id: 2,
      name: "hamid",
      family: "booslik",
      email: "hoohoo@gmail.com",
      phone: "09120001122",
      address: "iran tehran",
    },
    {
      id: 3,
      name: "neda",
      family: "tariverdi",
      email: "nene@gmail.com",
      phone: "09122600520",
      address: "iran darake",
    },
  ]);

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
      <TableBody props={tBodyData} onDelete={deleteUser}/>
    </>
  );
}
