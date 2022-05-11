import React, { useState } from 'react'
import './Sidebar.css'
import sanjeev from './../../images/sanjeev.jpeg'
import Login from '../Login/Login.jsx'
import { NavLink } from 'react-router-dom'


export default function Sidebar() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className='sidebar1'>
      <div className='text-algin-center'>
        <div className='proflie_image'><img src={sanjeev} alt="" /></div>
        <div className='name'><h3>Sanjeev Maurya</h3></div>
        <div className='developer'><p>Front End Developer</p></div>
        <NavLink to='/home' className='text-decoration-none'><div className='sidebarHome'>Home</div></NavLink>
        <NavLink to='/about' className='text-decoration-none'> <div className='sidebarAbout'>About</div></NavLink>
        <NavLink to='/education' className='text-decoration-none'>  <div className='sidebarEducation'>Education</div></NavLink>
        <div className='SidebarPortfolio'>Portfolio</div>
        <div className='sidebarContact'>Contact</div>
    <NavLink to='/login'>
          <div>
            <div className='SidebarLogin' onClick={() => { setOpenModal(true) }}>Login</div>
           {openModal && <Login closeModal={setOpenModal} />}
          </div> 
          </NavLink>
        
      </div>
    </div>
  )
}
