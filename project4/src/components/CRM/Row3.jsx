import React from "react";
import "./CRow3.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import ApexChart from "react-apexcharts";
import usa from "../../images/usa.png";
import brazil from "../../images/brazil.png";
import india from "../../images/india.png";
import australia from "../../images/australia.png";
import china from "../../images/china.png";
import belgium from "../../images/belgium.png";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
export default function Row3() {
  let countries = [
    {
      id: 1,
      img: usa,
      price: "$8,656k",
      icon: <KeyboardArrowUpOutlinedIcon />,
      perct: "25.8%",
      color: "rgb(113, 221, 55)",
      sub: "United states of america",
      rp: "894k",
    },
    {
      id: 2,
      img: brazil,
      price: "$2,415k ",
      icon: <KeyboardArrowDownOutlinedIcon />,
      perct: "-6.2%",
      color: "rgb(255, 62, 29)",
      sub: "Brazil",
      rp: "645k",
    },
    {
      id: 3,
      img: india,
      price: "$865k",
      icon: <KeyboardArrowUpOutlinedIcon />,
      perct: "12.4%",
      color: "rgb(113, 221, 55)",
      sub: "India",
      rp: "148k",
    },
    {
      id: 4,
      img: australia,
      price: "$745k",
      icon: <KeyboardArrowDownOutlinedIcon />,
      perct: "-11.9%",
      color: "rgb(255, 62, 29)",
      sub: "Australia",
      rp: "86k",
    },
    {
      id: 5,
      img: belgium,
      price: "$45k",
      icon: <KeyboardArrowUpOutlinedIcon />,
      perct: "16.2%",
      color: "rgb(113, 221, 55)",
      sub: "Belgium",
      rp: "42k",
    },
    {
      id: 6,
      img: china,
      price: "$12k",
      icon: <KeyboardArrowUpOutlinedIcon />,
      perct: "14.8%",
      color: "rgb(113, 221, 55)",
      sub: "China",
      rp: "8k",
    },
  ];
  const series = [75];
  const options = {
    labels: ["Sales"],
    fill: {
      colors: ["rgb(113, 221, 55)"],
    },
    stroke: {
      lineCap: "round",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "70%",
        },
      },
    },
    width: 8,
  };
  const series5 = [
    {
      name: "1k",
      data: [250, 350, 220, 290, 650, 260, 274, 850],
    },
    {
      name: "2k",
      data: [750, 3350, 1220, 1290, 1650, 260, 1274, 850],
    },
    {
      name: "3k",
      data: [375, 1350, 3220, 2290, 2650, 2260, 1274, 815],
    },
    {
      name: "4k",
      data: [575, 1350, 2220, 3290, 3650, 2260, 1274, 315],
    },
    {
      name: "5k",
      data: [875, 1350, 2220, 3290, 3650, 2260, 1274, 965],
    },
    {
      name: "6k",
      data: [575, 1350, 2220, 2290, 2650, 3260, 1274, 815],
    },
    {
      name: "7k",
      data: [575, 1350, 1220, 1290, 1650, 1260, 3274, 815],
    },
    {
      name: "8k",
      data: [575, 350, 220, 290, 650, 260, 274, 815],
    },
  ];
  const options5 = {
    chart: {
      height: 370,
      width: 448,
      type: "heatmap",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#696cff"],
    xaxis: {
      type: "category",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      labels: {
        style: {
          colors: [
            "rgba(50, 71, 92, 0.38)",
            "rgba(50, 71, 92, 0.38)",
            "rgba(50, 71, 92, 0.38)",
            "rgba(50, 71, 92, 0.38)",
            "rgba(50, 71, 92, 0.38)",
            "rgba(50, 71, 92, 0.38)",
            "rgba(50, 71, 92, 0.38)",
            "rgba(50, 71, 92, 0.38)",
          ],
          fontSize: "14px",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: [
            "rgba(50, 71, 92, 0.38)",
            "rgba(50, 71, 92, 0.38)",
            "rgba(50, 71, 92, 0.38)",
            "rgba(50, 71, 92, 0.38)",
            "rgba(50, 71, 92, 0.38)",
            "rgba(50, 71, 92, 0.38)",
            "rgba(50, 71, 92, 0.38)",
            "rgba(50, 71, 92, 0.38)",
          ],
          fontSize: "14px",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
  };
  return (
    <div className="row33">
      <div className="bg r3left">
        <div className="r3lt">
          <div className="r3ltl">
            <span className="sales">Sales Analytics</span>
            <div className="perct">
              <span className="nump">+42.6%</span>
              <p className="ppp">Than last year</p>
            </div>
          </div>
          <div className="r3ltr">
            <button className="bluebut">2024</button>
          </div>
        </div>
        <ApexChart
          series={series5}
          options={options5}
          type="heatmap"
          width={448}
          height={370}
        />
      </div>
      <div className="bg">
        <div className="r3mt">
          <div className="r3mtl">
            <span className="sbc">Sales by Countries</span>
            <p className="mso">Monthly Sales Overview</p>
          </div>
          <MoreVertIcon />
        </div>
        <div className="r3mb">
          {countries.map((item) => (
            <div className="bcontent" key={item.id}>
              <img className="img" src={item.img} alt="" />
              <div className="midtext">
                <div className="midta">
                  <div className="midtt">
                    <p className="mprice">{item.price}</p>
                    <div className="mip">
                      <span className="micon"> {item.icon}</span>
                      <span className="mperct">{item.perct}</span>
                    </div>
                  </div>
                  <div className="midtb">{item.sub}</div>
                </div>
                <span>{item.rp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg">
        <div className="r3mt">
          <div className="r3mtl">
            <span className="sbc">Sales Stats</span>
          </div>
          <MoreVertIcon />
        </div>
        <ApexChart
          series={series}
          options={options}
          type="radialBar"
          width={448}
          height={370}
        />
      </div>
    </div>
  );
}
