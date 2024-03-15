import React from "react";
import "./Analytic.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Row1 from "../components/Analytics/Row1";
import Row2 from "../components/Analytics/Row2";
import Row3 from "../components/Analytics/Row3";
import Row4 from "../components/Analytics/Row4";
import { useSelector } from "react-redux";
export default function Analytic() {
  let isfixed = useSelector((state) => state.fix.isfixed);
  return (
    <div className={isfixed ? "analytic_wrapper_opened" : " analytic_wrapper"}>
      <div className="analytic_content">
        <Sidebar />
        <Header />
        <Row1 />
        <Row2 />
        <Row3 />
        <Row4 />
      </div>
    </div>
  );
}
