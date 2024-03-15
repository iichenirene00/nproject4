import React from "react";
import "./Row2.css";
import ApexChart from "react-apexcharts";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import paypal from "../../images/paypal.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
Chart.register(...registerables);
export default function Row2() {
  const series5 = [78];
  const options5 = {
    chart: {
      height: 350,
      type: "radialBar",
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 90,
        dataLabels: {
          name: {
            fontSize: "16px",
            color: "rgb(105, 108, 255)",
            offsetY: 120,
          },
          value: {
            offsetY: -10,
            fontSize: "22px",
            color: "rgb(105, 108, 255)",
            formatter: function (val) {
              return 78 + "%";
            },
          },
        },
      },
    },
    fill: {
      colors: ["rgb(105, 108, 255)"],
      type: "gradient",
      gradient: {
        gradientToColors: ["rgb(105, 108, 255)"],
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: true,
        opacityFrom: 0.2,
        opacityTo: 1,
        stops: [0, 50, 65],
      },
    },
    stroke: {
      dashArray: 4,
    },
    labels: ["62% Company Growth"],
  };

  const borderRadius = 50;
  const borderRadiusAllCorners = {
    topLeft: borderRadius,
    topRight: borderRadius,
    bottomLeft: borderRadius,
    bottomRight: borderRadius,
  };
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: " 2023",
        data: [18, 7, 15, 29, 18, 12, 9],
        backgroundColor: "rgb(105, 108, 255)",
        stack: "Stack 0",
        borderRadius: borderRadiusAllCorners,
        barPercentage: 0.2,
        borderSkipped: false,
      },
      {
        label: " 2022",
        data: [-13, -18, -9, -14, -5, -17, -15],
        backgroundColor: "rgb(3, 195, 236)",
        stack: "Stack 0",
        borderRadius: borderRadiusAllCorners,
        barPercentage: 0.2,
        borderSkipped: false,
      },
    ],
  };

  const data1 = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
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

  const plugin = {
    beforeInit: function (chart) {
      // Get reference to the original fit function
      const originalFit = chart.legend.fit;

      // Override the fit function
      chart.legend.fit = function fit() {
        // Bind scope in order to use `this` correctly inside it
        originalFit.bind(chart.legend)();
        this.height += 20; // Change the height
      };
    },
  };
  const options = {
    maintainAspectRatio: true,
    scales: {
      y: {
        ticks: {
          display: true,
          color: "rgba(50, 71, 92, 0.37)",
          stepSize: 10,
        },
        grid: {
          drawBorder: false,
          display: true,
          color: "rgba(50, 71, 92, 0.37)",
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
        display: true,
        grid: {
          display: false,
        },
      },
    },

    plugins: {
      legend: {
        align: "start",
        labels: {
          usePointStyle: true,
          boxWidth: 6,
        },
      },
    },
  };

  const data3 = {
    labels: ["", "", "", "", "", ""],
    datasets: [
      {
        label: "",
        data: [12, 33, 18, 24, 22, 32],
        pointRadius: [0, 0, 0, 0, 0, 0],
        lineTension: 0.5,
        fill: false,
        borderColor: "#FFAB00",
        borderWidth: 4,
      },
    ],
  };

  const options3 = {
    elements: {
      point: {
        display: false,
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
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div className="second_row">
      <div className="row2 r1">
        <div className="left">
          <div className="left_top">
            <h5 className="revenue_t">Total Revenue </h5>
          </div>
          <div className="left_bot">
            <Bar data={data} options={options} plugins={[plugin]} />
          </div>
        </div>
        <div className="right">
          <select className="year" name="" id="">
            <option value="">2024</option>
            <option value="">2023</option>
            <option value="">2022</option>
            <option value="">2021</option>
          </select>
          <ApexChart series={series5} options={options5} type="radialBar" />
        </div>
      </div>
      <div className="r2">
        <div className="top">
          <div className="tl row2">
            <div className="wallet_top">
              <img className="wallet" src={paypal} alt="" />
              <MoreVertIcon />
            </div>
            <div className="word w1">
              <p className="w_title">Payments</p>
              <h5 className="w_sales">$2,468</h5>
              <p className="percent">↓ 14.86%</p>
            </div>
          </div>
          <div className="tr row2">
            <div className="word">
              <p className="w_title">Revenue</p>
              <h5 className="w_sales">425k</h5>
            </div>
            <Bar data={data1} options={options1} />
          </div>
        </div>
        <div className="bot row2">
          <div className="botl">
            <div className="botlt">
              <h5 className="revenue_t">Profit Report</h5>
              <div className="year">YEAR 2024</div>
            </div>
            <div className="botlb">
              <p className="bperct">
                <KeyboardArrowUpIcon /> 68.2%
              </p>
              <h5 className="pr_price">$84,686k</h5>
            </div>
          </div>
          <div className="botr">
            <Line data={data3} options={options3} />
          </div>
        </div>
      </div>
    </div>
  );
}
