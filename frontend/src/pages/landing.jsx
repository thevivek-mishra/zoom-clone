import React from "react";
import "../App.css";
import {Link} from 'react-router-dom'
export default function LandingPage() {
  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>ApnaVideoCall</h2>
        </div>
        <div className="navList">
          <p>Join as Guest</p>
          <p>Register</p>
          <div role="button">
            <p>Login</p>
          </div>
        </div>
      </nav>
      <div className="landingMainContainer">
        <div>
           <h1><span style={{color:"#ff9839 "}}>Connect</span> with your loved Once </h1>
           <p>Cover a distance by Apna Video Call</p>
           <div role="button">
            <Link to={"/home"}>Get Started</Link>
           </div>
        </div>
        <div>
          <img src="/mobile.png" alt="mobile photo" />
        </div>
      </div>
    </div>
  );
}
