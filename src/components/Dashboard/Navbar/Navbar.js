import React from "react";
import "./Navbar.css";
import user from "./user.png";
import { useAuth0 } from "@auth0/auth0-react";
import { IoMdLogOut } from 'react-icons/io';

export default function Navbar() {
  const { logout} = useAuth0();
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
          <i className="fa fa-fw fa-bell fa-lg"></i>
        </div>
        <img class="logo-img" src={user} />
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      <IoMdLogOut/>
    </button>
      </div>

    </div>
  );
}
