import React from 'react'
import {BrowserRouter,Routes,Route,} from "react-router-dom";
// import About from './Content/Pages/About/About';
import Home from './Content/Pages/Home/Home';
import Sidebar from './Sidebar/Sidebar';
import './../App.css'
import About from './Content/Pages/About/About';
import CV from './Content/Pages/About/CV/CV';
import Education from './Content/Pages/Education/Education';
import Contact from './Content/Pages/Contact/Contact';


export default function Routing() {
  return (
    <BrowserRouter> 
    <div className='main'>
       <div className='sidebar' ><Sidebar/></div>
  <div className='Content3'>  <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/about/resume' element={<CV/>}/>
      <Route path='/education' element={<Education/>}/>
      <Route path='/contact' element={<Contact/>}/>
     



    </Routes></div>
    </div>
  </BrowserRouter>
  )
}
                  