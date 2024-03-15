import React, { useState } from "react";
import "./Sidebar.css";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fixed } from "../../store/fixSlice";
export default function Sidebar() {
  let isfixed = useSelector((state) => state.fix.isfixed);
  let dispatch = useDispatch();

  let [mouse_in, setIn] = useState(false);
  let nav = useNavigate();
  let handleIn = () => {
    setIn(true);
  };
  let handleOut = () => {
    if (isfixed) {
      setIn(true);
    } else {
      setIn(false);
    }
    setOpen(true);
  };

  let [open, setOpen] = useState(true);
  let handleDash = () => {
    setOpen(!open);
  };

  // let [fixed, setFixed] = useState(false);
  let handlefix = () => {
    // setFixed(!fixed);
    dispatch(fixed());
    setIn(true);
  };
  let handleana = () => {
    nav("/");
  };
  let handlecrm = () => {
    nav("/CRM");
  };
  return (
    <div
      className={mouse_in ? "sin sidebar" : "sout sidebar"}
      onMouseEnter={handleIn}
      onMouseLeave={handleOut}
    >
      <div className="sidebar_top">
        <button className={mouse_in ? "control" : "noshow"} onClick={handlefix}>
          <div
            className={
              isfixed ? "control_circle" : "control_circle control_flip"
            }
          >
            <KeyboardArrowRightOutlinedIcon />
          </div>
        </button>
        <AppShortcutIcon
          sx={{ color: "blue", width: "22px", height: "32px" }}
        />
        <h2 className={mouse_in ? "" : "noshow"}>&nbsp; sneat</h2>
      </div>
      <div className="sidebar_bot">
        <button className="buttons b1">
          <h3 className="b_text  b_text1">
            <HomeOutlinedIcon /> &nbsp;{" "}
            <span className={mouse_in ? "da" : "noshow"} onClick={handleDash}>
              Dashboards
              <KeyboardArrowDownOutlinedIcon />
            </span>
          </h3>
        </button>
        <button
          className={mouse_in && open ? "buttons bh" : "noshow"}
          onClick={handleana}
        >
          <h3 className="b_text ">
            <FiberManualRecordIcon
              sx={{ fontSize: "10px", marginLeft: "5px" }}
            />
            &nbsp; &nbsp; <span>Analytics</span>
          </h3>
        </button>
        <button
          className={mouse_in && open ? "buttons bh" : "noshow"}
          onClick={handlecrm}
        >
          <h3 className="b_text ">
            <FiberManualRecordIcon
              sx={{ fontSize: "10px", marginLeft: "5px" }}
            />
            &nbsp; &nbsp; <span>CRM</span>
          </h3>
        </button>
        <button className={mouse_in && open ? "buttons bh" : "noshow"}>
          <h3 className="b_text ">
            <FiberManualRecordIcon
              sx={{ fontSize: "10px", marginLeft: "5px" }}
            />
            &nbsp; &nbsp; <span>eCommerce</span>
          </h3>
        </button>
        <div>
          <p className={mouse_in ? "sub" : "sub sub_close"}>
            <span className={mouse_in ? "" : "noshow"}>APPS & PAGES</span>
          </p>
        </div>
        <button className="buttons bh">
          <h3 className="b_text ">
            <EmailOutlinedIcon />
            &nbsp; <span className={mouse_in ? "" : "noshow"}>Email</span>
          </h3>
        </button>
        <button className="buttons bh">
          <h3 className="b_text ">
            <ChatBubbleOutlineOutlinedIcon />
            &nbsp; <span className={mouse_in ? "" : "noshow"}>Chat</span>
          </h3>
        </button>
        <button className="buttons bh">
          <h3 className="b_text ">
            <CalendarMonthOutlinedIcon />
            &nbsp; <span className={mouse_in ? "" : "noshow"}>Calendar</span>
          </h3>
        </button>
        <button className="buttons bh">
          <h3 className="b_text ">
            <FileCopyOutlinedIcon />
            &nbsp; <span className={mouse_in ? "" : "noshow"}>Invoice</span>
          </h3>
        </button>
      </div>
    </div>
  );
}
