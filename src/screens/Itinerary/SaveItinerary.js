import React from "react";
import "./saveitinerary.css";
import pic1 from "../images/newyork.jpeg";
import pic2 from "../images/northwest.jpeg";
import pic3 from "../images/asia.jpeg";


const SaveItinerary = () => {
  return (
    <div className="container">
      <h1 className="head">Save to Itinerary</h1>
      <input type="text" placeholder="Search " className="inputbox" >
      
      </input>

      <div className="row">
        <div className="col-sm-4">
          <img
            src={pic1}
            height="120px"
            width="120px"
            style={{ borderRadius: "1rem", marginTop: "20px" }}
          ></img>
        </div>
        <div className="col-sm-8">
          <p className="p">New York City Baby</p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4">
          <img
            src={pic2}
            height="120px"
            width="120px"
            style={{ borderRadius: "1rem", marginTop: "20px" }}
          ></img>
        </div>
        <div className="col-sm-8">
          <p className="p">Northwest</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <img
            src={pic3}
            height="120px"
            width="120px"
            style={{ borderRadius: "1rem", marginTop: "20px" }}
          ></img>
        </div>
        <div className="col-sm-8">
          <p className="p">East Asia</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <button className="btnplus">+</button>
        </div>
        <div className="col-sm-8">
          <p className="p">Create New Itinerary</p>
        </div>
      </div>
    </div>
  );
};

export default SaveItinerary;
