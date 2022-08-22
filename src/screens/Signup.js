import React from "react";
import "./signup.css";
import pic from "./images/google.png";
const Signup = () => {
  return (
    <div className="container">
      <h1 className="h1">Sign up</h1>

      <input type="text" placeholder="Full Name"></input>
      <br></br>
      <input type="text" placeholder="User Name"></input>
      <br></br>
      <input type="text" placeholder ="Your Email"></input>   
      <br></br>
      <input type="text" placeholder="Password"></input>
      <br></br>
      <button className="btn">Sign up</button>
      <br></br>
      <p class="hr-sect">OR</p>
      <br></br>
      <button className="btn2">
        <img src={pic} className="img" />
        <b>Sign up using Google</b>
      </button>
      <p className="p1">
        By signing up, you agreed with our Terms of<br></br>
        Services and Privacy Policy.
      </p>
      <p className="p2">
        Already have account?
        <button className="btn3">
          <b>Log in</b>
        </button>
      </p>
    </div>
  );
};

export default Signup;
