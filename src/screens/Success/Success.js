import React from "react";
import "./success.css";
const Success = () => {
  return (
    <div className="container">
      <h2 className="h2">Success! </h2>
      <p className="p1">
      This has been saved to your itinerary,<br></br> would you like to view the itinerary?
      </p>
      <br></br>
      <button className="btnn1">No</button>
      <button className="btnn2">Yes</button>
    </div>
  );
};

export default Success;
