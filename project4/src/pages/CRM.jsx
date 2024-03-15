import React from "react";
import Header from "../components/Header/Header";
import Row1 from "../components/CRM/Row1";
import Row2 from "../components/CRM/Row2";
import Row3 from "../components/CRM/Row3";
import Row4 from "../components/CRM/Row4";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar/Sidebar";
import "./CRM.css";
export default function CRM() {
  let isfixed = useSelector((state) => state.fix.isfixed);
  return (
    <div className={isfixed ? "crm_wrapper_opened" : " crm_wrapper"}>
      <div className="crm_content">
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
