import React from 'react'
import './login.css'
// import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {
  return (
    <div className='container d-flex justify-content-center'>
      
      <form>
        <div className='row'>
        <h1 className='heading'>Log In</h1><br/>
        </div>
        <div className='row'>
          <input type="email" className="inputbox" id="email" placeholder="Your Email" />
        </div><br></br>
        <div className='row'>
          <input type="password" className="inputbox" id="password" placeholder="Password" />
        </div>
        <button className='para'>Forgot your password?</button>
        <br />
        <button className='button0'>Log in</button>
        <p class="hr-sect">OR</p><br></br>
        <button className='button1'><img className='image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" />Login with Google</button>

       {/* <p className='para1'>Don’t have an account?
       <button className='btn'>Sign up</button>
       </p> */}
       <p className="para1">
       Don’t have an account?
        <button className="btn3">
          <b>Sign up</b>
        </button>
      </p>
      </form>
    </div>
  )
}

export default Login