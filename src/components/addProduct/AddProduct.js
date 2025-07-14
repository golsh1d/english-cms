import React from "react";
import "./AddProduct.css";
import { useState } from "react";

export default function AddProduct() {
  const [prdCode, setPrdCode] = useState();
  const [prdName, setPrdName] = useState();
  const [prdPrice, setPrdPrice] = useState();
  const [prdCount, setPrdCount] = useState();

  function addPrdBtnClicked() {
    let prdInfo = {
      code: prdCode,
      name: prdName,
      price: prdPrice,
      count: prdCount,
    };

    fetch(`http://localhost:3000/api/sendproduct/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prdInfo),
    }).then(() => {
      setPrdCode("");
      setPrdName("");
      setPrdPrice("");
      setPrdCount("");
    });
  }

  return (
    <section className="AddProduct-container">
      <div className="AddProduct-title">Add Product</div>
      <div className="AddProduct-input-container">
        <input
          class="AddProduct-input"
          type="text"
          placeholder="Product Code..."
          value={prdCode}
          onChange={(event) => {
            setPrdCode(event.target.value);
          }}
        />
        <input
          class="AddProduct-input"
          type="text"
          placeholder="Product Name..."
          value={prdName}
          onChange={(event) => {
            setPrdName(event.target.value);
          }}
        />
        <input
          class="AddProduct-input"
          type="text"
          placeholder="Product Price..."
          value={prdPrice}
          onChange={(event) => {
            setPrdPrice(event.target.value);
          }}
        />
        <input
          class="AddProduct-input"
          type="text"
          placeholder="Product Count..."
          value={prdCount}
          onChange={(event) => {
            setPrdCount(event.target.value);
          }}
        />
      </div>
      <div className="AddProduct-btn-container">
        <button className="AddProduct-btn" onClick={addPrdBtnClicked}>
          Add
        </button>
      </div>
    </section>
  );
}
