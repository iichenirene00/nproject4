import React, { useState } from "react";
import "./Row3.css";
import paypal from "../../images/paypal.png";
import refund from "../../images/refund.png";
import creditcard from "../../images/credit-card.png";
import mastercard from "../../images/mastercard.png";
import { Line } from "react-chartjs-2";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Doughnut } from "react-chartjs-2";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import walletbg from "../../images/wallet-with-bg.png";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
export default function Row3() {
  let selected_index = "";
  let selected_data = "";
  let [selected_button, setSelected_button] = useState("1");
  let handleClick = (e) => {
    setSelected_button(e.target.id);
  };
  const t2 = [
    {
      id: "1",
      t2_img: walletbg,
      t2_title: "Total Income",
      t2_price: "$459.1k",
      t2_perct: "42.9%",
      t2_subt: "Income",
      t2_subp: "$39k",
    },
    {
      id: "2",
      t2_img: paypal,
      t2_title: "Total Expenses",
      t2_price: "$316.5k",
      t2_perct: "27.8%",
      t2_subt: "Expenses",
      t2_subp: "$16k",
    },
    {
      id: "3",
      t2_img: refund,
      t2_title: "Total Profit",
      t2_price: "$147.9k",
      t2_perct: "35.1%",
      t2_subt: "Profit",
      t2_subp: "$28k",
    },
  ];

  const t2_filter = t2.filter((item) => item.id === selected_button);
  const transaction = [
    {
      id: 1,
      t_img: paypal,
      t_title: "Paypal",
      t_sub: "Send money",
      price: "+82.6",
      currency: "USD",
    },
    {
      id: 2,
      t_img: walletbg,
      t_title: "Wallet",
      t_sub: "Mac'D",
      price: "+270.69",
      currency: "USD",
    },
    {
      id: 3,
      t_img: refund,
      t_title: "Transfer",
      t_sub: "Refund",
      price: "+637.91",
      currency: "USD",
    },
    {
      id: 4,
      t_img: creditcard,
      t_title: "Credit Card",
      t_sub: "Ordered Food",
      price: "-838.71",
      currency: "USD",
    },
    {
      id: 5,
      t_img: walletbg,
      t_title: "Wallet",
      t_sub: "Starbucks",
      price: "+203.33",
      currency: "USD",
    },
    {
      id: 6,
      t_img: mastercard,
      t_title: "Mastercard",
      t_sub: "Ordered Food",
      price: "-92.45",
      currency: "USD",
    },
  ];
  const data = {
    labels: ["Fashion", "Electronic", "Sport", "Decor"],
    datasets: [
      {
        data: [45, 80, 20, 40],
        backgroundColor: [
          "rgb(113, 221, 55)",
          "rgb(105, 108, 255)",
          " rgb(133, 146, 163)",
          "rgb(3, 195, 236)",
        ],
        borderColor: [
          "rgb(113, 221, 55)",
          "rgb(105, 108, 255)",
          " rgb(133, 146, 163)",
          "rgb(3, 195, 236)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    onHover(hover, element, chart) {
      if (element[0]) {
        selected_data = element[0].element.$context.parsed;
        selected_index = element[0].index;
        chart.draw();
      }
    },
    cutout: 40,
    spacing: 10,
    // segmentStrokeColor: "black",
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const plugins = {
    id: "doughnut label",
    afterDatasetsDraw(chart, args, plugins) {
      const { ctx, data } = chart;
      ctx.save();
      const x = chart.getDatasetMeta(0).data[0].x;
      const y = chart.getDatasetMeta(0).data[0].y;
      //   ctx.strokeStyle = "rgba(255, 128, 0, 0.5)";
      //   ctx.stroke();
      ctx.textAlign = "center";
      ctx.textBaseLine = "middle";
      ctx.font = "24px sans-serif";
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fillText(`${selected_data}`, x, y - 5);
      ctx.font = "16px sans-serif";
      ctx.fillStyle = "rgba(0,0,0,.2)";
      ctx.fillText(`${data.labels[selected_index]}`, x, y + 15);
    },
  };

  const data1 = {
    labels: ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "",
        data: [24, 21, 30, 22, 42, 26, 35, 29],
        pointRadius: [0, 0, 0, 0, 0, 0, 0, 8],
        lineTension: 0.5,
        fill: true,
        backgroundColor: "rgba(105, 108, 255, 0.16)",
        borderColor: "rgb(105, 108, 255)",
      },
    ],
  };

  const options1 = {
    elements: {
      point: {
        pointBackgroundColor: "#fff",
        borderWidth: 3,
      },
    },

    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: "15",
        ticks: {
          display: false,
          stepSize: 10,
        },
        grid: {
          drawBorder: false,
          display: true,
          color: "rgba(50, 71, 92, 0.1)",
        },
        border: {
          width: 0,
        },
      },
      x: {
        ticks: {
          color: "rgba(50, 71, 92, 0.3)",
          font: {
            size: 14,
          },
        },
        color: "rgba(50, 71, 92, 0.1)",
        grid: {
          display: false,
        },
      },
    },
  };

  const data2 = {
    labels: ["Income"],
    datasets: [
      {
        data: [65, 35],
        backgroundColor: ["rgb(105, 108, 255)", "rgb(133, 146, 163)"],
        borderColor: ["rgb(105, 108, 255)", "rgb(133, 146, 163)"],
        borderWidth: 0.4,
      },
    ],
  };

  const options2 = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="third_row">
      <div className="row3">
        <div className="r3top">
          <div className="r3topl">
            <span className="order_title">Order Statistics</span>
            <div className="sales_sub">42.82k Total Sales</div>
          </div>
          <div className="r3topr">
            <MoreVertIcon />
          </div>
        </div>
        <div className="r3bot">
          <div className="r3mid">
            <div className="midl">
              <h4 className="midl_title">8,258</h4>
              <div className="midl_sub">Total Orders</div>
            </div>
            <div className="midr">
              <Doughnut data={data} options={options} plugins={[plugins]} />
            </div>
          </div>
          <div className="allbot">
            <div className="r3mbot">
              <div className="botl b1">
                <PhoneIphoneOutlinedIcon />
              </div>
              <div className="botr">
                <div className="botrl">
                  <span className="bot_title">Electronic</span>
                  <span className="bot_sub">Mobile, Earbuds, TV</span>
                </div>
                <div className="botrr">
                  <span className="bot_sub price">23.8k</span>
                </div>
              </div>
            </div>
            <div className="r3mbot">
              <div className="botl b2">
                <CheckroomOutlinedIcon />
              </div>
              <div className="botr">
                <div className="botrl">
                  <span className="bot_title">Fashion</span>
                  <span className="bot_sub">Tshirt, Jeans, Shoes</span>
                </div>
                <div className="botrr">
                  <span className="bot_sub price">23.8k</span>
                </div>
              </div>
            </div>

            <div className="r3mbot">
              <div className="botl b3">
                <HouseOutlinedIcon />
              </div>
              <div className="botr ">
                <div className="botrl">
                  <span className="bot_title">Decor</span>
                  <span className="bot_sub">Fine Art, Dining</span>
                </div>
                <div className="botrr">
                  <span className="bot_sub price">849</span>
                </div>
              </div>
            </div>

            <div className="r3mbot">
              <div className="botl b4">
                <SportsSoccerOutlinedIcon />
              </div>
              <div className="botr">
                <div className="botrl">
                  <span className="bot_title">Sport</span>
                  <span className="bot_sub">Football, Cricket Kit</span>
                </div>
                <div className="botrr">
                  <span className="bot_sub price">99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row3">
        <div className="t_wrapper">
          <div className="t1">
            <button
              className={
                selected_button === "1" ? "tbutton_selected tbutton" : "tbutton"
              }
              id="1"
              onClick={handleClick}
            >
              INCOME
            </button>
            <button
              className={
                selected_button === "2" ? "tbutton_selected tbutton" : "tbutton"
              }
              id="2"
              onClick={handleClick}
            >
              EXPENSES
            </button>
            <button
              className={
                selected_button === "3" ? "tbutton tbutton_selected" : "tbutton"
              }
              id="3"
              onClick={handleClick}
            >
              PROFIT
            </button>
          </div>
          <div className="t2">
            <img className="wallet" src={t2_filter[0].t2_img} alt="" />
            <div className="t2_word">
              <p className="midl_sub">{t2_filter[0].t2_title}</p>
              <div className="t2_span">
                <span className="t2_price">{t2_filter[0].t2_price}</span>
                <span className="t2_perct">
                  <KeyboardArrowUpOutlinedIcon /> {t2_filter[0].t2_perct}
                </span>
              </div>
            </div>
          </div>
          <div className="t3">
            <Line data={data1} options={options1} />
          </div>
          <div className="t4">
            <div className="t4l_wrapper">
              <div className="t4l">
                <Doughnut data={data2} options={options2} />
              </div>
            </div>
            <div className="t4r">
              <p className="t4r_p">{t2_filter[0].t2_subt} this week</p>
              <p className="t4r_subp">
                {t2_filter[0].t2_subp} less than last week
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row3">
        <div className="r3topp">
          <div className="r3topl">
            <span className="order_title">Transactions</span>
          </div>
          <div className="r3topr">
            <MoreVertIcon />
          </div>
        </div>
        <div className="r3bott">
          {transaction.map((item) => (
            <div className="bot_wrapper" key={item.id}>
              <div className="r3botl">
                <img className="bot_img" src={item.t_img} alt="" />
              </div>
              <div className="r3botr">
                <div className="botrl">
                  <div className="bot_title">{item.t_title}</div>
                  <div className="bot_sub">{item.t_sub}</div>
                </div>
                <div className="botrr">
                  <span className="bot_price">{item.price}</span>
                  <span className="bot_currency">{item.currency}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
