import React from 'react'
import './../Signup.css'
import facebook from './../../../../images/facebook.png'
import google from './../../../../images/google-plus.png'
import linkdin from './../../../../images/linkedin.png'

export default function RightSide() {
  return (
    <div className='signCenter'>
    <h2>
 Create Account
    </h2>
    <div className='d-flex icons'>
      <div className='facebook-icon'> 
      <img src={facebook} alt="" />
      </div>
      <div className='google-icon'><img src={google} alt="" /></div>
      <div className='linkdin-icon'><img src={linkdin} alt="" /></div>
    </div>
    <div className='account'><p>or use your email for registration </p></div>
    <div className='email'>
      <label htmlFor="email" ></label>
      <input type="name" id='email' placeholder='name' />
    </div>
    <div className='email'>
      <label htmlFor="email" ></label>
      <input type="email" id='email' placeholder='Email' />
    </div>
    <div className='password'>
      <label htmlFor="password"></label>
      <input type="Password" id='password' placeholder='password' />
    </div>
    <div className='forget'><p>Forget Password</p></div>
    <div className='margin'>
    <button className='btn'>Sign up</button>
    </div>
    </div>
  )
}
