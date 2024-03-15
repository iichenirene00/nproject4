import React from "react";
import "./CRow2.css";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import phone from "../../images/phone.png";
import watch from "../../images/watch.png";
import book from "../../images/book.png";
import shaking from "../../images/shaking.png";
import headphone from "../../images/headphone.png";
import hp from "../../images/hp.png";
import imac from "../../images/imac.png";
import rwatch from "../../images/rwatch.png";
import gnord from "../../images/gnord.png";
import pixel from "../../images/pixel.png";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
Chart.register(...registerables);
export default function Row2() {
  let sales = [
    {
      id: 1,
      img: phone,
      title: "Oneplus Nord",
      sub: "Oneplus",
      price: "$98,348",
    },
    {
      id: 2,
      img: watch,
      title: "Smart Band 4",
      sub: "Xiaomi",
      price: "$15,459",
    },
    {
      id: 3,
      img: book,
      title: "Surface Pro X",
      sub: "Microsoft",
      price: "$4,589",
    },
    {
      id: 4,
      img: shaking,
      title: "iPhone 13",
      sub: "Apple",
      price: "$84,345",
    },
    {
      id: 5,
      img: headphone,
      title: "Bluetooth Earphone",
      sub: "Beats",
      price: "$10,3748",
    },
  ];
  let volume = [
    {
      id: 1,
      img: hp,
      title: "ENVY Laptop",
      sub: "HP",
      price: "12.4k",
      perct: "+12.4%",
      color: "rgb(113, 221, 55)",
      bgc: "rgba(113, 221, 55, 0.16)",
    },
    {
      id: 2,
      img: imac,
      title: "Apple",
      sub: "iMac Pro",
      price: "74.9k",
      perct: "-8.5%",
      color: "rgb(255, 62, 29)",
      bgc: "rgba(255, 62, 29, 0.16)",
    },
    {
      id: 3,
      img: rwatch,
      title: "Smart Watch",
      sub: "Fitbit",
      price: "4.4k",
      perct: "+17.6%",
      color: "rgb(113, 221, 55)",
      bgc: "rgba(113, 221, 55, 0.16)",
    },
    {
      id: 4,
      img: gnord,
      title: "Oneplus Nord",
      sub: "Oneplus",
      price: "12.34k",
      perct: "+13.9%",
      color: "rgb(113, 221, 55)",
      bgc: "rgba(113, 221, 55, 0.16)",
    },

    {
      id: 5,
      img: pixel,
      title: "Pixel 4a",
      sub: "Google",
      price: "8.65k",
      perct: "-11.8%",
      color: "rgb(255, 62, 29)",
      bgc: "rgba(255, 62, 29, 0.16)",
    },
  ];
  let report = [
    {
      id: 1,
      icon: <TrendingUpIcon />,
      title: "Net Profit",
      sub: "12.4k Sales",
      price: "$1,619",
      perct: "18.6%",
      color: "rgb(113, 221, 55)",
      tcolor: "rgb(105, 108, 255)",
      bgc: "rgba(105, 108, 255, 0.16)",
    },
    {
      id: 2,
      icon: <AttachMoneyIcon />,
      title: "Total Income",
      sub: "Sales, Affiliation",
      price: "$3,571",
      perct: "39.6%",
      color: "rgb(113, 221, 55)",
      tcolor: "rgb(113, 221, 55)",
      bgc: "rgba(113, 221, 55, 0.16)",
    },
    {
      id: 3,
      icon: <AccountBalanceWalletOutlinedIcon />,
      title: "Total Expenses",
      sub: "ADVT, Marketing",
      price: "$430",
      perct: "52.8%",
      color: "rgb(113, 221, 55)",
      tcolor: "rgb(133, 146, 163)",
      bgc: "rgba(133, 146, 163, 0.16)",
    },
  ];
  const data1 = {
    labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    datasets: [
      {
        data: [18, 7, 15, 29, 18, 12, 9],
        backgroundColor: [
          "rgba(105, 108, 255,.25)",
          "rgba(105, 108, 255,.25)",
          "rgba(105, 108, 255,.25)",
          "rgba(105, 108, 255,.25)",
          "rgb(105, 108, 255)",
          "rgba(105, 108, 255,.25)",
          "rgba(105, 108, 255,.25)",
        ],
        stack: "Stack 0",
        borderRadius: "5",
        barPercentage: 0.7,
      },
    ],
  };

  const options1 = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      x: {
        ticks: {
          display: true,
          color: "rgba(50, 71, 92, 0.37)",
        },
        border: {
          display: false,
        },
        display: true,
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  };
  return (
    <div className="row2">
      <div className="bg r2left">
        <div className="r2ll">
          <div className="r2llt">
            <h6 className="lltitle">
              Top Products by <span className="tblue">Sales</span>
            </h6>
            <MoreVertIcon />
          </div>
          <div className="r2llb">
            {sales.map((item) => (
              <div className="r2llbt" key={item.id}>
                <img className="lbimg" src={item.img} alt="" />
                <div className="bot">
                  <div className="bleft">
                    <p className="btitle">{item.title}</p>
                    <p className="bsub"> {item.sub}</p>
                  </div>
                  <div className="bright">
                    <p className="bprice">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="r2ll">
          <div className="r2llt">
            <h6 className="lltitle">
              Top Products by <span className="tblue">Volume</span>
            </h6>
            <MoreVertIcon />
          </div>
          <div className="r2llb">
            {volume.map((item) => (
              <div className="r2llbt" key={item.id}>
                <img className="lbimg" src={item.img} alt="" />
                <div className="bot">
                  <div className="bleft">
                    <p className="btitle">{item.title}</p>
                    <p className="bsub"> {item.sub}</p>
                  </div>
                  <div className="bright">
                    <p className="bprice">{item.price}</p>
                    <span
                      className="bperct"
                      style={{
                        backgroundColor: `${item.bgc}`,
                        color: `${item.color}`,
                      }}
                    >
                      {item.perct}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg r2right">
        <div className="r2llt">
          <h6 className="lltitle">
            Earning Report{" "}
            <span className="lltsub">Weekly Earnings Overview</span>
          </h6>
          <MoreVertIcon />
        </div>
        <div className="r2llb bllb">
          {report.map((item) => (
            <div className="r2llbt llbt" key={item.id}>
              <div
                className="bicon"
                style={{
                  backgroundColor: `${item.bgc}`,
                  color: `${item.tcolor}`,
                }}
              >
                {item.icon}
              </div>
              <div className="bot">
                <div className="bleft">
                  <p className="btitle">{item.title}</p>
                  <p className="bsub"> {item.sub}</p>
                </div>
                <div className="bright">
                  <p className="bprice">{item.price}</p>
                  <span
                    className="bperct"
                    style={{
                      color: `${item.color}`,
                    }}
                  >
                    <KeyboardArrowUpOutlinedIcon />
                    <span className="bbbp">{item.perct}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="bar">
            <Bar
              style={{ width: 400, height: 140 }}
              data={data1}
              options={options1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
