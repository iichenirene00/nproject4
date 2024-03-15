import React from "react";
import spic from "../images/signpic.png";
import "./Sign.css";
import AppShortcutOutlinedIcon from "@mui/icons-material/AppShortcutOutlined";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Sign() {
  let nav = useNavigate();
  let handleCreate = () => {
    nav("/Create");
  };
  let [data, setData] = useState({
    email: "",
    password: "",
  });
  let handleChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setData({ ...data, [key]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8080/api/v1/sign", data)
      .then((response) => {
        console.log("Sign successfully", response.data);
        if (
          response.data.token !== undefined ||
          response.data.token !== undefined
        ) {
          nav("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="sign">
      <div className="sleft">
        <img className="spic" src={spic} alt="" />
      </div>
      <div className="sright">
        <div className="sright_info">
          <div className="logo">
            <div className="aicon">
              <AppShortcutOutlinedIcon />
            </div>
            <h2 className="sname">sneat</h2>
          </div>
          <h6 className="welcome">Welcome to Sneat! 👋🏻</h6>
          <p className="please">
            Please sign-in to your account and start the <br /> adventure
          </p>
          <div className="accountinfo">
            <span className="acw">
              Admin: <strong>admin@sneat.com</strong> / Pass:{" "}
              <strong>admin</strong>
            </span>
            <span className="acw">
              Client: <strong>client@sneat.com</strong> / Pass:{" "}
              <strong>client</strong>
            </span>
          </div>
          <form action="" method="post" onSubmit={handleSubmit}>
            <div className="all">
              <div className="ip">
                <input
                  onChange={handleChange}
                  className="istyle"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <label htmlFor="email" className="labels">
                Email
              </label>
            </div>
            <div className="all">
              <div className="ip">
                <input
                  onChange={handleChange}
                  className="istyle"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
              <label className="labels" htmlFor="password">
                Password
              </label>
            </div>

            <div className="aline">
              <div className="rcheck">
                <input
                  className="check"
                  type="checkbox"
                  name="check"
                  id="check"
                />
                <label className="remember" htmlFor="check">
                  {" "}
                  Remember Me
                </label>
              </div>
              <span className="forgot">Forgot Password?</span>
            </div>
            <button className="bsign">SIGN IN</button>
          </form>

          <div className="na">
            <p className="new">New on our platform?</p>
            <button className="create" onClick={handleCreate}>
              Create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
