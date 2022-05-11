import React from "react";
import "./Login.css";
import SignIn from "./Signin/SignIn";
import Signup from "./Signup/Signup";
import { NavLink } from "react-router-dom";




export default function Login({ closeModal }) {

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="d-flex" style={{ marginTop: '20px' }}>
          <NavLink to='/home'>
          <button onClick={() => closeModal(false)}>
            X
          </button>
          </NavLink>
         
        </div>
        <div className="d-flex ">
       
        </div>
        <div className="content">
        
    <SignIn />
        {/* <Signup /> */}
        </div>
      </div>
    </div>
  );
}
