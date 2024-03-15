import React from "react";
import "./CRow1.css";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarIcon from "@mui/icons-material/Star";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import cube from "../../images/cube.png";
Chart.register(...registerables);
export default function Row1() {
  let selected_index = "";
  let selected_data = "";
  const data = {
    labels: ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "line1",
        data: [20, 24, 22, 30, 26, 28, 24, 33],
        pointRadius: [0, 0, 0, 5, 0, 0, 0, 5],
        lineTension: 0.5,
        fill: false,
        borderWidth: 4,
        borderColor: "rgb(105, 108, 255)",
      },
      {
        label: "line2",
        data: [20, 32, 21, 24, 20, 22, 19, 21],
        pointRadius: [0, 0, 0, 0, 0, 0, 0, 0],
        lineTension: 0.5,
        fill: false,
        borderWidth: 4,
        borderColor: "rgba(133, 146, 163,.13)",
        borderDash: [10, 5],
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
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
          color: "rgba(50, 71, 92, 0.3)",
          font: {
            size: 14,
          },
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };
  const borderRadius = 50;
  const borderRadiusAllCorners = {
    topLeft: borderRadius,
    topRight: borderRadius,
    bottomLeft: borderRadius,
    bottomRight: borderRadius,
  };

  const data1 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "",
        data: [20, 14, 16, 18, 12, 22, 17],
        backgroundColor: "rgb(255, 62, 29)",
        stack: "Stack 0",
        borderRadius: borderRadiusAllCorners,
        barPercentage: 0.2,
        borderSkipped: false,
      },
      {
        label: "",
        data: [5, 6, 7, 7, 8, 5, 6],
        backgroundColor: "rgb(133, 146, 163)",
        stack: "Stack 0",
        borderRadius: borderRadiusAllCorners,
        barPercentage: 0.2,
        borderSkipped: false,
      },
    ],
  };
  const options1 = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
        border: {
          width: 0,
        },
      },
      x: {
        ticks: {
          display: true,
          color: "rgba(50, 71, 92, 0.37)",
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };
  const data2 = {
    labels: ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "line1",
        data: [20, 20, 18, 18, 15, 15, 22, 22, 24],
        pointRadius: [0, 0, 0, 0, 0, 0, 0, 0, 8],
        lineTension: 0,
        fill: false,
        borderWidth: 2,
        borderColor: "rgb(255, 171, 0)",
      },
    ],
  };
  const options2 = {
    maintainAspectRatio: false,
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
        display: false,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      x: {
        display: false,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  const data3 = {
    labels: ["1st Week", "2nd Week", "3rd Week", "4th Week"],
    datasets: [
      {
        data: [23, 27, 22, 28],
        backgroundColor: [
          "rgba(113, 221, 55, 0.75)",
          "rgba(113, 221, 55, 0.5)",
          " rgba(113, 221, 55, 0.25)",
          "rgb(113, 221, 55)",
        ],
        borderColor: [
          "rgba(113, 221, 55, 0.75)",
          "rgba(113, 221, 55, 0.5)",
          " rgba(113, 221, 55, 0.25)",
          "rgb(113, 221, 55)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options3 = {
    maintainAspectRatio: false,
    onHover(hover, element, chart) {
      if (element[0]) {
        selected_data = element[0].element.$context.parsed;
        selected_index = element[0].index;
        chart.draw();
      }
    },
    cutout: 40,
    // spacing: 10,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const plugins3 = {
    id: "doughnut label",
    afterDatasetsDraw(chart, args, plugins) {
      const { ctx, data } = chart;
      ctx.save();
      const x = chart.getDatasetMeta(0).data[0].x;
      const y = chart.getDatasetMeta(0).data[0].y;
      ctx.textAlign = "center";
      ctx.textBaseLine = "middle";
      ctx.font = "24px sans-serif";
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fillText(`${selected_data}%`, x, y - 5);
      ctx.font = "12px sans-serif";
      ctx.fillStyle = "rgba(0,0,0,.2)";
      ctx.fillText(`${data.labels[selected_index]}`, x, y + 15);
    },
  };

  return (
    <div className="crow1">
      <div className="r1 r11">
        <div className="ttop">
          <span className="tt">Customer Ratings</span>
          <MoreVertIcon />
        </div>
        <div className="ttmid">
          <div className="ratings">
            <h5 className="rate">4.0</h5>
            <div className="stars">
              <span className="light">
                <StarIcon />
              </span>
              <span className="light">
                <StarIcon />
              </span>
              <span className="light">
                <StarIcon />
              </span>
              <span className="light">
                <StarIcon />
              </span>
              <span className="nolight">
                <StarIcon />
              </span>
            </div>
          </div>
          <div className="points">
            <span className="addp">+5.0</span>
            <span className="pp">Points from last month</span>
          </div>
        </div>
        <div className="chart">
          <Line
            style={{
              padding: "0 10px",
              width: 440,
              height: 206,
            }}
            data={data}
            options={options}
          />
        </div>
      </div>
      <div className="  r1">
        <div className="top22">
          <span className="title22">Overview & Sales Activity</span>
          <span className="sub22">Check out each column for more details</span>
        </div>
        <div className="bot22">
          <Bar
            style={{
              width: 448,
              height: 306,
            }}
            data={data1}
            options={options1}
          />
        </div>
      </div>
      <div className="r2">
        <div className="top">
          <div className="tl row11">
            <div className="top11">
              <p className="title11">Sessions</p>
              <h5 className="sub11">2845</h5>
            </div>
            <div className="line11">
              <Line
                style={{
                  width: 212,
                  height: 106,
                }}
                data={data2}
                options={options2}
              />
            </div>
          </div>
          <div className="tr row11">
            <div className="top33">
              <img className="cube" src={cube} alt="" />
              <MoreVertIcon />
            </div>
            <div className="bot33">
              <p className="order">Order</p>
              <h5 className="dollar">$1,286</h5>
              <span className="dperct">↓ 13.24%</span>
            </div>
          </div>
        </div>
        <div className="bot">
          <div className="botl">
            <div className="botlt">
              <h6 className="lead">Generated Leads</h6>
              <p className="monthly">Monthly Report</p>
            </div>
            <div className="botlb">
              <h5 className="num">4,234</h5>
              <p className="bbperct">↑ 12.8%</p>
            </div>
          </div>
          <div className="botr">
            <Doughnut
              style={{ width: 108, height: 108 }}
              data={data3}
              options={options3}
              plugins={[plugins3]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
