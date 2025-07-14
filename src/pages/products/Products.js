import React from "react";
import "./Products.css";
import { useState, useEffect } from "react";
import AddProduct from "../../components/addProduct/AddProduct";
import TableHead from "../../components/tableHead/TableHead";
import TableBody from "../../components/tableBody/TableBody";

export default function Products() {
  const [tHeadData, setTHeadData] = useState([
    { id: 1, title: "ID" },
    { id: 2, title: "Code" },
    { id: 3, title: "Name" },
    { id: 4, title: "Price" },
    { id: 5, title: "Count" },
  ]);
  const [tBodyData, setTBodyData] = useState();
  const [isDelete, setIsDelete] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/`)
      .then((res) => res.json())
      .then((data) => setTBodyData(data))
      .then(setIsDelete(null));
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
    fetch(`http://localhost:3000/api/products/deleteProduct/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(setIsDelete(true));
  }

  return (
    <>
      <AddProduct />
      <TableHead
        props={tHeadData}
        onSortByFirst={sortByFirst}
        onSortByLast={sortByLast}
      />
      {tBodyData && <TableBody props={tBodyData} onDelete={deleteUser} />}
    </>
  );
}
