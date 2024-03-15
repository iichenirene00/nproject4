import React from "react";
import "./CRow4.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import nathan from "../../images/nathan.png";
import emma from "../../images/Emma.png";
import alma from "../../images/Alma.png";
import travis from "../../images/Travis.png";
import { Doughnut } from "react-chartjs-2";
import henry from "../../images/henry.png";
import herman from "../../images/herman.png";
import hallie from "../../images/hallie.png";
import john from "../../images/john.png";
import msc from "../../images/msc.png";
import vs from "../../images/vs.png";
import pypl from "../../images/pypl.png";
import PersonIcon from "@mui/icons-material/Person";
export default function Row4() {
  const data1 = {
    labels: ["Income"],
    datasets: [
      {
        data: [87, 47],
        backgroundColor: ["rgb(105, 108, 255)", "rgba(133, 146, 163,.16)"],
        borderColor: ["rgb(105, 108, 255)", "rgb(133, 146, 163,.16)"],
        borderWidth: 0.1,
      },
    ],
  };
  const data2 = {
    labels: ["Income"],
    datasets: [
      {
        data: [340, 80],
        backgroundColor: ["rgb(255, 62, 29)", "rgba(133, 146, 163,.16)"],
        borderColor: ["rgb(255, 62, 29)", "rgb(133, 146, 163,.16)"],
        borderWidth: 0.1,
      },
    ],
  };
  const data3 = {
    labels: ["Income"],
    datasets: [
      {
        data: [50, 32],
        backgroundColor: ["rgb(255, 171, 0)", "rgba(133, 146, 163,.16)"],
        borderColor: ["rgb(255, 171, 0)", "rgb(133, 146, 163,.16)"],
        borderWidth: 0.1,
      },
    ],
  };
  const data4 = {
    labels: ["Income"],
    datasets: [
      {
        data: [98, 162],
        backgroundColor: ["rgb(3, 195, 236)", "rgba(133, 146, 163,.16)"],
        borderColor: ["rgb(3, 195, 236)", "rgb(133, 146, 163,.16)"],
        borderWidth: 0.1,
      },
    ],
  };
  const data5 = {
    labels: ["Income"],
    datasets: [
      {
        data: [12, 13],
        backgroundColor: ["rgb(133, 146, 163)", "rgba(133, 146, 163,.16)"],
        borderColor: ["rgb(133, 146, 163)", "rgb(133, 146, 163,.16)"],
        borderWidth: 0.1,
      },
    ],
  };

  const options = {
    cutout: "80%",
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  let members = [
    {
      id: 1,
      img: nathan,
      name: "Nathan Wagner",
      sub: "iOS Developer",
      project: "ZIPCAR",
      tasks: "87/135",
      color: "rgb(105, 108, 255)",
      bgc: "rgba(105, 108, 255, 0.16)",
      donut: (
        <Doughnut
          data={data1}
          options={options}
          style={{
            width: 32,
            height: 32,
          }}
        />
      ),
    },
    {
      id: 2,
      img: emma,
      name: "Emma Bowen",
      sub: "UI/UX Designer",
      project: "BITBANK",
      tasks: "340/420",
      color: "rgb(255, 62, 29)",
      bgc: "rgba(255, 62, 29,0.16)",
      donut: (
        <Doughnut
          data={data2}
          options={options}
          style={{
            width: 32,
            height: 32,
          }}
        />
      ),
    },
    {
      id: 3,
      img2: "AM",
      name: "Adrian McGuire",
      sub: "React developer",
      project: "PAYERS",
      tasks: "50/82",
      color: "rgb(255, 171, 0)",
      bgc: "rgba(255, 171, 0,0.16)",
      donut: (
        <Doughnut
          data={data3}
          options={options}
          style={{
            width: 32,
            height: 32,
          }}
        />
      ),
    },
    {
      id: 4,
      img: alma,
      name: "Alma Gonzalez",
      sub: "Product Manager",
      project: "BRANDI",
      tasks: "98/260",
      color: "rgb(3, 195, 236)",
      bgc: "rgba(3, 195, 236,0.16)",
      donut: (
        <Doughnut
          data={data4}
          options={options}
          style={{
            width: 32,
            height: 32,
          }}
        />
      ),
    },
    {
      id: 5,
      img: travis,
      name: "Travis Collins",
      sub: "VueJs developer",
      project: "AVIATO",
      tasks: "12/25",
      color: "rgb(133, 146, 163)",
      bgc: "rgba(133, 146, 163,0.16)",
      donut: (
        <Doughnut
          data={data5}
          options={options}
          style={{
            width: 32,
            height: 32,
          }}
        />
      ),
    },
  ];

  let customers = [
    {
      id: 1,
      img: henry,
      name: "Henry Barnes",
      email: "jok@puc.co.uk",
      status: "PAID",
      amount: "$459.65",
      color: "rgb(113, 221, 55)",
      bgc: "rgba(113, 221, 55, 0.16)",
      cimg: msc,
    },
    {
      id: 2,
      img: herman,
      name: "Herman Holland",
      email: "sami@lelo.com",
      status: "PENDING",
      amount: "$93.81",
      color: "rgb(255, 171, 0)",
      bgc: "rgba(255, 171, 0,0.16)",
      cimg: vs,
    },
    {
      id: 3,
      img: hallie,
      name: "Hallie Warner",
      email: "initus@odemi.com",
      amount: "$934.34",
      status: "PENDING",
      color: "rgb(255, 171, 0)",
      bgc: "rgba(255, 171, 0,0.16)",
      cimg: vs,
    },
    {
      id: 4,
      img: john,
      name: "John Davidson",
      email: "tum@upkesja.gov",
      amount: "$794.97",
      status: "PAID",
      color: "rgb(113, 221, 55)",
      bgc: "rgba(113, 221, 55, 0.16)",
      cimg: pypl,
    },
    {
      id: 5,
      img1: <PersonIcon />,
      name: "Cora Schmidt",
      email: "wipare@tin.com",
      amount: "$19.49",
      status: "PAID",
      color: "rgb(113, 221, 55)",
      bgc: "rgba(113, 221, 55, 0.16)",
      cimg: msc,
    },
    {
      id: 6,
      img: emma,
      name: "Betty Ross",
      email: "nur@kaomor.edu",
      amount: "$636.27",
      status: "PAID",
      color: "rgb(255, 62, 29)",
      bgc: "rgba(255, 62, 29,0.16)",
      cimg: pypl,
    },
  ];

  return (
    <div className="row44">
      <div className="bg r4left">
        <div className="r4t">
          <span className="ttitle">Team Members</span>
          <MoreVertIcon />
        </div>
        <div className="r4b">
          <table className="table">
            <thead>
              <tr>
                <th className="th th1">NAME</th>
                <th className="th">PROJECT</th>
                <th className="th">TASKS</th>
                <th className="th">PROGRESS</th>
              </tr>
            </thead>
            <tbody>
              {members.map((item) => (
                <tr key={item.id}>
                  <td className="td td1">
                    {item.img !== undefined ? (
                      <img className="iimg" src={item.img} alt="" />
                    ) : (
                      <div className="nimg">{item.img2}</div>
                    )}
                    <div className="name">
                      <p className="tp">{item.name}</p>
                      <p className="tp tpp">{item.sub}</p>
                    </div>
                  </td>
                  <td className="td td2">
                    <span
                      className="pproject"
                      style={{
                        color: `${item.color}`,
                        backgroundColor: `${item.bgc}`,
                      }}
                    >
                      {item.project}
                    </span>
                  </td>
                  <td className="td td2">
                    <p className="tasks">{item.tasks}</p>
                  </td>
                  <td>
                    <div className="donut">{item.donut}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg r4right">
        <table className="table">
          <thead>
            <tr>
              <th className="th th1">CUSTOMER</th>
              <th className="th">AMOUNT</th>
              <th className="th">STATUS</th>
              <th className="th">PAID BY</th>
              <th className="th">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((it) => (
              <tr key={it.id}>
                <td className="td td1">
                  {it.img !== undefined ? (
                    <img className="iimg" src={it.img} alt="" />
                  ) : (
                    <div className="nimg nimg2">{it.img1}</div>
                  )}
                  <div className="name">
                    <p className="tp">{it.name}</p>
                    <p className="tp tpp">{it.email}</p>
                  </div>
                </td>
                <td className="td2">
                  {" "}
                  <span className="tdw tm">{it.amount}</span>
                </td>
                <td className="td2">
                  <span
                    className="pproject"
                    style={{
                      color: `${it.color}`,
                      backgroundColor: `${it.bgc}`,
                    }}
                  >
                    {it.status}
                  </span>
                </td>
                <td className="td2">
                  <img className="cimg" src={it.cimg} alt="" />
                </td>
                <td className="td2">
                  <div className="more">
                    <MoreVertIcon />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
