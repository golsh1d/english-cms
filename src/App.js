import React from "react";
import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import SideNav from "./components/sideNav/SideNav";
import SideNavSm from "./components/sideNavSm/SideNavSm";

export default function App() {
  let router = useRoutes(routes);

  return (
    <div className="App-container">
      <SideNav />
      <SideNavSm />
      {router}
    </div>
  );
}
