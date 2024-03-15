import React, { useEffect, useState } from "react";
import "./Row1.css";
import John from "../../images/illustration-john-light.png";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import wallet from "../../images/wallet.png";
import axios from "axios";

Chart.register(...registerables);

export default function Row1() {
  // let [d, setD] = useState();
  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:8000/api/v1/row1")
  //     .then((data) => {
  //       setD(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // let d_data;
  // let d_option;
  // let data_labels;
  // let data_datasets;
  // if (d !== undefined) {
  //   d_data = d.data.filter((item) => item.name === "r1data");
  //   d_option = d.data.filter((item) => item.name === "r1option");
  //   data_labels = d_data[0].labels;
  //   data_datasets = d_data[0].datasets;
  // }
  // console.log(data_datasets);

  const data = {
    labels: ["", "", "", "", "", ""],
    datasets: [
      {
        label: "",
        data: [12, 33, 18, 24, 22, 32],
        pointRadius: [0, 0, 0, 0, 0, 5],
        lineTension: 0.5,
        fill: true,
        backgroundColor: "rgba(113,221,55,.5)",
        borderColor: "#71DD37",
      },
    ],
  };

  const options = {
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
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div className="first_row">
      <div className="row1 c1">
        <div className="left">
          <h5 className="congrats">Congratulations John !</h5>
          <div className="text">
            You have done 72% more sales today.
            <br />
            Check your new badge in your profile.
          </div>
          <button className="badge">View Badges</button>
        </div>
        <div className="right">
          <img className="john" src={John} alt="" />
        </div>
      </div>
      <div className="row1">
        <div className="word">
          <p className="w_title">Order</p>
          <h5 className="w_sales">276k</h5>
        </div>
        <Line data={data} options={options} />
      </div>
      <div className="row1 c2">
        <div className="wallet_top">
          <img className="wallet" src={wallet} alt="" />
          <MoreVertIcon />
        </div>
        <div className="word w1">
          <p className="w_title">Sales</p>
          <h5 className="w_sales">$4,679</h5>
          <p className="percent">↑ 28.14%</p>
        </div>
      </div>
    </div>
  );
}
