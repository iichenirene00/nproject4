import React from "react";
import create from "../images/create.png";
import "./Sign.css";
import axios from "axios";
import AppShortcutOutlinedIcon from "@mui/icons-material/AppShortcutOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { submit } from "../store/signSlice";
export default function Create() {
  let [data, setData] = useState({
    user: "",
    email: "",
    password: "",
  });

  let dispatch = useDispatch();

  let nav = useNavigate();
  let handleSign = () => {
    nav("/Sign");
  };
  let handleChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setData({ ...data, [key]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8080/api/v1/create", data)
      .then((response) => {
        console.log("create successfully", response.data);
        if (response.data.message === "create success") {
          nav("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let handleClick = () => {
    dispatch(submit([data.user, data.email]));
  };
  return (
    <div className="sign">
      <div className="sleft">
        <img className="spic" src={create} alt="" />
      </div>
      <div className="sright">
        <div className="sright_info">
          <div className="logo">
            <div className="aicon">
              <AppShortcutOutlinedIcon />
            </div>
            <h2 className="sname">sneat</h2>
          </div>
          <h6 className="welcome">Adventure starts here 🚀</h6>
          <p className="please">Make your app management easy and fun!</p>

          <form action="" method="post" onSubmit={handleSubmit}>
            <div className="all">
              <div className="ip">
                <input
                  onChange={handleChange}
                  className="istyle"
                  type="text"
                  name="user"
                  id="user"
                />
              </div>
              <label htmlFor="user" className="labels">
                Username
              </label>
            </div>
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
                  I agree to privacy policy & terms
                </label>
              </div>
            </div>
            <button className="bsign" type="submit" onClick={handleClick}>
              SIGN UP
            </button>
          </form>

          <div className="na">
            <p className="new">Already have an account?</p>
            <button onClick={handleSign} className="create">
              Sign in instead
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
