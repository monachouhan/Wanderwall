import React from 'react';
import './forgetpasswordEmail.css'

const ForgetPasswordEmail = () => {
  return (
    <div className='container bg-danger'>
      <p className='heading1 '>wanderwell</p>
      <p className='line1'>Forgot your password?<br/>That’s okay.</p><br/>
      <p className='line2'>To reset your password, click the button below.</p><br/><br/>
      <button className='buttonreset'>Reset Password</button><br/><br/><br/>
      <hr/><br/><br/>
      <p className='line2'>Wanderwell is an app for explorers- to browse curated travel<br/> itineraries or create their very own! </p><br/>
      <p className='line3'>Designed in Los Angeles</p>
    </div>
  )
}

export default ForgetPasswordEmail