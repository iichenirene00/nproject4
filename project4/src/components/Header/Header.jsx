import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import TranslateIcon from "@mui/icons-material/Translate";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
export default function Header() {
  let user = useSelector((state) => state.sign.user);
  let nav = useNavigate();
  let [click, setClick] = useState(false);
  let handleSign = () => {
    nav("/Sign");
  };
  let handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="header_wrapper">
      <div className="header">
        <div className="header_info">
          <div className="info_left">
            <div className="left">
              <button className="search">
                {" "}
                <SearchIcon />{" "}
              </button>
              <p className="stext">Search (Ctrl+/)</p>
            </div>
          </div>
          <div className="info_right">
            <button className="rbutton">
              <TranslateIcon />{" "}
            </button>
            <button className="rbutton">
              <NightlightOutlinedIcon />{" "}
            </button>
            <button className="rbutton">
              <NotificationsNoneOutlinedIcon />{" "}
            </button>
            <button className="rbutton">
              <GridViewOutlinedIcon />
            </button>
            <button className="rbutton" onClick={handleClick}>
              <PersonIcon />
            </button>
            {click ? (
              <div className="info_right_click">
                <div className="rctop">
                  <span className="rcticon">
                    <PersonIcon />
                  </span>
                  <div className="rctopr">
                    <p>{user}</p>
                  </div>
                </div>
                <div className="rcmid">
                  <button className="btt">
                    <span className="rcmicon">
                      <PersonOutlineOutlinedIcon />
                    </span>
                    Profile
                  </button>
                  <button className="btt">
                    <span className="rcmicon">
                      <EmailOutlinedIcon />
                    </span>
                    Inbox
                  </button>
                  <button className="btt">
                    <span className="rcmicon">
                      <ChatBubbleOutlineOutlinedIcon />
                    </span>
                    Chat
                  </button>
                </div>
                <div className="rcmid">
                  <button className="btt">
                    <span className="rcmicon">
                      <SettingsOutlinedIcon />
                    </span>
                    Settings
                  </button>
                  <button className="btt">
                    <span className="rcmicon">
                      <AttachMoneyOutlinedIcon />
                    </span>
                    Pricing
                  </button>
                  <button className="btt">
                    <span className="rcmicon">
                      <HelpOutlineOutlinedIcon />
                    </span>
                    FAQ
                  </button>
                </div>
                <div className="rcbot">
                  <button className="btt" onClick={handleSign}>
                    <span className="rcmicon">
                      <PowerSettingsNewOutlinedIcon />
                    </span>
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
