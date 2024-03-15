import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Row4.css";
import pdf from "../../images/pdf.png";
import client from "../../images/client.png";
import t1 from "../../images/t1.png";
import t2 from "../../images/t2.png";
import t3 from "../../images/t3.png";
import t4 from "../../images/t4.png";
import t5 from "../../images/t5.png";
import chrome from "../../images/chrome.png";
import safari from "../../images/safari.png";
import firefox from "../../images/firefox.png";
import edge from "../../images/edge.png";
import opera from "../../images/opera.png";
import brave from "../../images/brave.png";
import window from "../../images/windows.png";
import mac from "../../images/mac.png";
import ubuntu from "../../images/ubuntu.png";
import linux from "../../images/linux.png";
import cent from "../../images/cent.png";
import usa from "../../images/usa.png";
import brazil from "../../images/brazil.png";
import india from "../../images/india.png";
import australia from "../../images/australia.png";
import china from "../../images/china.png";
import france from "../../images/france.png";
export default function Row4() {
  let [selected_button, setSelected_button] = useState("BROWSER");
  let handleClick = (e) => {
    setSelected_button(e.target.id);
  };
  const table = [
    {
      type: "BROWSER",
      no: 1,
      img: chrome,
      img_p: "Chrome",
      visits: "8.92k",
      perct: "64.91%",
      color: "rgb(113, 221, 55)",
      transform: "translateX(-15.09%)",
    },
    {
      type: "BROWSER",
      no: 2,
      img: safari,
      img_p: "Safari",
      visits: "1.29k",
      perct: "19.03%",
      color: "rgb(105, 108, 255)",
      transform: "translateX(-64.33%)",
    },
    {
      type: "BROWSER",
      no: 3,
      img: firefox,
      img_p: "Firefox",
      visits: "328",
      perct: "3.26%",
      color: "rgb(3, 195, 236)",
      transform: "translateX(-74.18%)",
    },
    {
      type: "BROWSER",
      no: 4,
      img: edge,
      img_p: "Edge",
      visits: "142",
      perct: "3.99%",
      color: "rgb(255, 171, 0)",
      transform: "translateX(-74.97%)",
    },
    {
      type: "BROWSER",
      no: 5,
      img: opera,
      img_p: "Opera",
      visits: "85",
      perct: "2.12%",
      color: "rgb(255, 62, 29)",
      transform: "translateX(-76.75%)",
    },
    {
      type: "BROWSER",
      no: 6,
      img: brave,
      img_p: "Brave",
      visits: "36",
      perct: "1.06%",
      color: "rgb(3, 195, 236)",
      transform: "translateX(-78.24%)",
    },
    {
      type: "SYSTEM",
      no: 1,
      img: window,
      img_p: "Windows",
      visits: "475.26k",
      perct: "61.5%",
      color: "rgb(113, 221, 55)",
      transform: "translateX(-18.5%)",
    },
    {
      type: "SYSTEM",
      no: 2,
      img: mac,
      img_p: "Mac",
      visits: "89.12k",
      perct: "15.67%",
      color: "rgb(105, 108, 255)",
      transform: "translateX(-64.33%)",
    },
    {
      type: "SYSTEM",
      no: 3,
      img: ubuntu,
      img_p: "Ubuntu",
      visits: "38.68k",
      perct: "5.82%",
      color: "rgb(3, 195, 236)",
      transform: "translateX(-74.18%)",
    },
    {
      type: "SYSTEM",
      no: 4,
      img: linux,
      img_p: "Linux",
      visits: "30.27k",
      perct: "5.03%",
      color: "rgb(255, 171, 0)",
      transform: "translateX(-74.97%)",
    },
    {
      type: "SYSTEM",
      no: 5,
      img: chrome,
      img_p: "Chrome",
      visits: "8.34k",
      perct: "3.25%",
      color: "rgb(255, 62, 29)",
      transform: "translateX(-76.75%)",
    },
    {
      type: "SYSTEM",
      no: 6,
      img: cent,
      img_p: "Cent",
      visits: "2.25k",
      perct: "1.76%",
      color: "rgb(3, 195, 236)",
      transform: "translateX(-78.24%)",
    },
    {
      type: "COUNTRY",
      no: 1,
      img: usa,
      img_p: "USA",
      visits: "87.24k",
      perct: "38.12%",
      color: "rgb(113, 221, 55)",
      transform: "translateX(-41.88%)",
    },
    {
      type: "COUNTRY",
      no: 2,
      img: brazil,
      img_p: "Brazil",
      visits: "42.69k",
      perct: "28.23%",
      color: "rgb(105, 108, 255)",
      transform: "translateX(-51.77%)",
    },
    {
      type: "COUNTRY",
      no: 3,
      img: india,
      img_p: "India",
      visits: "12.58k",
      perct: "13.82%",
      color: "rgb(3, 195, 236)",
      transform: "translateX(-66.18%)",
    },
    {
      type: "COUNTRY",
      no: 4,
      img: australia,
      img_p: "Australia",
      visits: "4.13k",
      perct: "12.72%",
      color: "rgb(255, 171, 0)",
      transform: "translateX(-67.28%)",
    },
    {
      type: "COUNTRY",
      no: 5,
      img: china,
      img_p: "China",
      visits: "2.21k",
      perct: "7.11%",
      color: "rgb(255, 62, 29)",
      transform: "translateX(-72.89%)",
    },
    {
      type: "COUNTRY",
      no: 6,
      img: france,
      img_p: "France",
      visits: "1.56k",
      perct: "6.59%",
      color: "rgb(3, 195, 236)",
      transform: "translateX(-73.41%)",
    },
  ];
  const table_filter = table.filter((item) => item.type === selected_button);
  return (
    <div className="fourth_row">
      <div className="row4">
        <div className="r4topp">
          <div className="r4topl">
            <span className="order_title">Activity Timeline</span>
          </div>
          <div className="r4topr">
            <MoreVertIcon />
          </div>
        </div>
        <div className="r4bott">
          <div className="bots" style={{ height: "122px" }}>
            <div className="r4bottl">
              <span className="circle c1"></span>
              <span className="line"></span>
            </div>
            <div className="r4bottr">
              <div className="bottrl">
                <p className="topic">12 Invoices have been paid</p>
                <p className="sub">Invoices have been paid to the company</p>
                <div className="rbot">
                  <img className="pdf" src={pdf} alt="" />
                  <span className="img_sub">Invoices.pdf</span>
                </div>
              </div>
              <div className="bottrr">
                <span className="time">12 min ago</span>
              </div>
            </div>
          </div>
          <div className="bots" style={{ height: "144px" }}>
            <div className="r4bottl">
              <span className="circle c2"></span>
              <span className="line"></span>
            </div>
            <div className="r4bottr">
              <div className="bottrl">
                <p className="topic">Client Meeting</p>
                <p className="sub">Project meeting with john @10:15am</p>
                <div className="rbot rbott">
                  <img className="c" src={client} alt="" />
                  <div className="rbotw">
                    <span className="img_sub ss">Steven Nash (Client)</span>
                    <p className="sub">CEO of ThemeSelection</p>
                  </div>
                </div>
              </div>
              <div className="bottrr">
                <span className="time">45 min ago</span>
              </div>
            </div>
          </div>
          <div className="bots " style={{ height: "110px" }}>
            <div className="r4bottl">
              <span className="circle c3"></span>
              <span className="line"></span>
            </div>
            <div className="r4bottr bot3">
              <div className="bottrl">
                <p className="topic">Create a new project for client</p>
                <p className="sub">5 team members in a project</p>
                <div className="rbot">
                  <img className="c" src={t1} alt="" />
                  <img className="c" src={t2} alt="" />
                  <img className="c" src={t3} alt="" />
                  <img className="c" src={t4} alt="" />
                  <img className="c" src={t5} alt="" />
                </div>
              </div>
              <div className="bottrr">
                <span className="time">2 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row4">
        <div className="t_wrapper">
          <div className="t1">
            <button
              className={
                selected_button === "BROWSER"
                  ? "tbutton_selected tbutton"
                  : "tbutton"
              }
              id="BROWSER"
              onClick={handleClick}
            >
              BROWSER
            </button>
            <button
              className={
                selected_button === "SYSTEM"
                  ? "tbutton_selected tbutton"
                  : "tbutton"
              }
              id="SYSTEM"
              onClick={handleClick}
            >
              OPERATING SYSTEM
            </button>
            <button
              className={
                selected_button === "COUNTRY"
                  ? "tbutton tbutton_selected"
                  : "tbutton"
              }
              id="COUNTRY"
              onClick={handleClick}
            >
              COUNTRY
            </button>
          </div>
          <div className="t2">
            <table className="table">
              <thead className="thead">
                <tr>
                  <th className="th">NO.</th>
                  <th className="th">{selected_button}</th>
                  <th className="th">VISITS</th>
                  <th className="th">DATA IN PERCENTAGE</th>
                </tr>
              </thead>
              <tbody>
                {table_filter.map((item) => (
                  <tr className="trd" key={item.no}>
                    <td className="no">{item.no}</td>
                    <td className="imgw">
                      <img className="img" src={item.img} alt="" />
                      <span className="imgp">{item.img_p}</span>
                    </td>
                    <td className="visit">{item.visits}</td>
                    <td className="no">
                      <div className="bar_wrapper">
                        <div className="bar">
                          <span
                            className="barmid"
                            style={{
                              backgroundColor: `${item.color}`,
                              transform: `${item.transform} `,
                            }}
                          ></span>
                        </div>
                        <span>{item.perct}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
