import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlineLogin } from "react-icons/ai";
import user_img from "./user.png";

export default function Navbar() {
  const { logout, isAuthenticated,user} = useAuth0();
  return (
    <div className="Navbar">
      <div className="Nav_heading">Dashboard</div>
      <div className="Nav_icons">
        <div class="search-box">
          <input class="search-input" type="text" placeholder="Search..." />
          <button class="search-btn">
            <i className="fa fa-fw fa-search fa-lg"></i>
          </button>
        </div>
        <div className="bell">
          <i className="fa fa-fw fa-bell"></i>
        </div>
        { 
          isAuthenticated ? <button className="log_out_btn"
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
