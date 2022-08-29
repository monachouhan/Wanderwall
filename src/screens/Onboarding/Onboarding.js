import React from 'react'
import './onboarding.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import pic from '../images/myIteneraries.png'

const Onboarding = () => {
  return (
    <div className='container'>
      <img src={pic} height={"30px"} width={"25px"} style={{ marginTop: "30px" }}></img>

      <p className='para'>welcome to</p>
      <h1 className='heading'>wanderwell</h1>
      <p className='para1'>Browse curated travel itineraries<br></br> or create your own journey!</p>
      <br></br>
      <button className='btn'>Log in</button> <br></br>
      <button className='btn'>Create account</button>
    </div>
  )
}

export default Onboarding