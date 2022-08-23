import React from 'react';
import './forgetpassword.css'

const ForgetPassword = () => {
  return (
    <div className='container'>
      <p className='head1'>Forget Password</p>
      <p className='line'>Enter your email address to reset your password</p>
      <input className='box' placeholder='Your Email'></input><br/><br/>
      <button className='buttonsend'>Send</button>
    </div>
  )
}

export default ForgetPassword;