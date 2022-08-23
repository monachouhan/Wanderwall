import React from 'react';
import './resetpassword.css';

const ResetPassword = () => {
  return (
    <div className='container'>
      <p className='head1'>Reset Password</p>
      <p className='line0'>Please enter a new password to continue</p>
      <input className='box' placeholder='New Password'></input><br/><br/>
      <button className='bbtn'>Update New Password</button>
    </div>
  )
}

export default ResetPassword