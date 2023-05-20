import React from "react";
import "./Sidebar.scss";
import { BiHelpCircle } from 'react-icons/bi';

export default function Sidebar() {

  return (
      <div id="Side_contain">
        <div id="wrapper">
          <div  className="sidebar-nav">
            {/* <div>
            <div  className="sidebar-brand">Board.</div>
            <button className="sidebar-toggler"><i  className="fa fa-fw fa-bars"></i> </button>
            </div> */}
            <div>
              <a href="#">
                <i  className="fa fa-fw fa-dashboard"></i> <span className={`Sidebar_Text show_option`}>Dashboard</span> 
              </a>
            </div>
            <div>
              <a href="#">
                <i  className="fa fa-fw fa-share"></i>  <span className="Sidebar_Text show_option">Transactions</span>
              </a>
            </div>
            <div>
              <a href="#">
                <i  className="fa fa-fw fa-file-o "></i>  <span className="Sidebar_Text show_option">Schedules</span>
              </a>
            </div>
            <div>
              <a href="#">
                <i  className="fa fa-fw fa-user"></i>  <span className="Sidebar_Text show_option">Users</span>
              </a>
            </div>
            <div>
              <a href="#">
                <i  className="fa fa-fw fa-cog"></i>  <span className="Sidebar_Text show_option">Settings</span>
              </a>
            </div>
          </div>
          <div className="sidebar-nav">
              <a href="#">{<BiHelpCircle/>}<span className="Sidebar_Text show_option">Help</span> </a>
              <a href="#"> {<BiHelpCircle/>}<span className="Sidebar_Text show_option">Contact Us</span></a>
          </div>
      </div>
    </div>
  );
}
