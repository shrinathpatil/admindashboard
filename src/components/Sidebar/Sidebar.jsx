import React, { useContext } from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">MyAdmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span className="dashboard">Dashboard</span>
          </li>
        </ul>
        <ul>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span className="dashboard">Users</span>
            </li>
          </Link>
        </ul>
        <ul>
          <Link to="/hotels" style={{ textDecoration: "none" }}>
            <li>
              <Inventory2OutlinedIcon className="icon" />
              <span className="dashboard">Hotels</span>
            </li>
          </Link>
        </ul>
        <ul>
          <Link to="/rooms" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardOutlinedIcon className="icon" />
              <span className="dashboard">Rooms</span>
            </li>
          </Link>
        </ul>
        <ul>
          <li>
            <LocalShippingOutlinedIcon className="icon" />
            <span className="dashboard">Delivery</span>
          </li>
        </ul>
        <ul>
          <p className="title">USEFUL</p>

          <li>
            <QueryStatsOutlinedIcon className="icon" />
            <span className="dashboard">Stats</span>
          </li>
        </ul>
        <ul>
          <li>
            <NotificationsActiveOutlinedIcon className="icon" />
            <span className="dashboard">Notifications</span>
          </li>
        </ul>
        <ul>
          <p className="title">SERVICE</p>

          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span className="dashboard">System Health</span>
          </li>
        </ul>
        <ul>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span className="dashboard">Logs</span>
          </li>
        </ul>
        <ul>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span className="dashboard">Settings</span>
          </li>
        </ul>
        <ul>
          <p className="title">USER</p>

          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span className="dashboard">Profile</span>
          </li>
        </ul>
        <ul>
          <li>
            <LogoutOutlinedIcon className="icon" />
            <span className="dashboard">LogOut</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
