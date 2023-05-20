import React from "react";
import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <div id="Side_contain">
      <div id="wrapper">
        <div className="sidebar-nav">
          <div>
            <div className="sidebar-brand">Board.</div>
            {/* <button className="sidebar-toggler">
              <i className="fa fa-fw fa-bars"></i>{" "}
            </button> */}
          </div>
          <div>
            <a href="#">
              <i className="fa fa-fw fa-dashboard"></i>{" "}
              <span className="Sidebar_Text">Dashboard</span>
            </a>
          </div>
          <div>
            <a href="#">
              <i className="fa fa-fw fa-share"></i>{" "}
              <span className="Sidebar_Text">Transactions</span>
            </a>
          </div>
          <div>
            <a href="#">
              <i className="fa fa-fw fa-file-o "></i>{" "}
              <span className="Sidebar_Text">Schedules</span>
            </a>
          </div>
          <div>
            <a href="#">
              <i className="fa fa-fw fa-user"></i>{" "}
              <span className="Sidebar_Text">Users</span>
            </a>
          </div>
          <div>
            <a href="#">
              <i className="fa fa-fw fa-cog"></i>{" "}
              <span className="Sidebar_Text">Settings</span>
            </a>
          </div>
        </div>
        <div className="footer">
          <a className="footer_text">Help</a>
          <a className="footer_text">Contact Us</a>
        </div>
      </div>
    </div>
  );
}
