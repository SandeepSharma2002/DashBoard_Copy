import React from "react";
import "./Authentication.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export default function Authentication() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="login_container">
      <div className="login_form">
        <div className="sign_in_heading">Sign in</div>
        <p className="sign_in_text"> Sign in to your account</p>
        <din className="btns">
          <a href="/" className="sign_in_btn">
            <span class="auth-sprite google-logo  retina"></span>
            <span class="auth-provider-text">Sign in with Google</span>
          </a>
          <a href="/" className="sign_in_btn">
            <span class="auth-sprite apple-logo  retina"></span>
            <span class="auth-provider-text">Sign in with Apple</span>
          </a>
        </din>
        <form className="login_details">
          <div className="info">
            <label for="email" className="info_text">
              Email Address
            </label>
            <input type="email" className="info_input" />
          </div>
          <div className="info">
            <label for="password" className="info_text">
              Password
            </label>
            <input type="password" className="info_input" />
          </div>
          <div className="link_btn">
            <a href="/">Forgot password?</a>
          </div>
          <Link to = "/dashboard"><button className="sign_in_btn sign_in" onClick={() => loginWithRedirect()}>Sign In</button></Link>
        </form>

        <div className="end_info">
          <div className="end_text">
            Don't have an account?{" "}
            <span className="link_btn">
              <a href="/">Register here</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
