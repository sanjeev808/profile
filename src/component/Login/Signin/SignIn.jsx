import React from 'react'
import './../Signin/Signin.css'
import LeftSide from './LeftSide/LeftSide'
// import facebook from './../../../images/facebook.png'
// import google from './../../../images/google-plus.png'
// import linkdin from './../../../images/linkedin.png'
import RightSide from './RightSide/RightSide'


export default function SignIn() {
  return (
    <div className='signin'>
      <RightSide/>
    <LeftSide />
    </div>
  )
}
