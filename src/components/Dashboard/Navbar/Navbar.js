import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlineLogin } from "react-icons/ai";
import user_img from "./user.png";

export default function Navbar() {
  const[Input_toggle, setinput] = useState(false);
  const { logout, isAuthenticated,user} = useAuth0();
  return (
    <div className="Navbar">
      <div className="Nav_heading">Dashboard</div>
      <div className="Nav_icons">
        <div class="search-box">
          <input class= { Input_toggle? "search-input show_input": "search-input"} type="text" placeholder="Search..." />
          <button class="search-btn" onClick={ ()=> setinput(!Input_toggle)}>
            <i className="fa fa-fw fa-search fa-lg"></i>
          </button>
        </div>
        <a className="bell Nav_logo">
          <i className="fa fa-fw fa-bell"></i>
        </a>
        { 
          isAuthenticated ? <button className="log_out_btn Nav_logo" 
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        ><img className="logo-img" src={user_img} alt ="" /></button>:<Link to="/login" className="bell" >
        <AiOutlineLogin/>
      </Link>
        }
      </div>
    </div>
  );
}
