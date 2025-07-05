import React from "react";
import "./Home.css";
import SaleChart from "../../components/saleChart/SaleChart";

export default function Home() {
  return (
    <section className="Home-container">
      <SaleChart />
    </section>
  );
}
