import React from "react";
import "./Home.css";
import SaleChart from "../../components/saleChart/SaleChart";
import UsersChart from "../../components/usersChart/UsersChart";

export default function Home() {
  return (
    <section className="Home-container">
      <SaleChart />
      <UsersChart />
    </section>
  );
}
