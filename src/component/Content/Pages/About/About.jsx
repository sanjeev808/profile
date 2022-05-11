import React from 'react'
import './About.css'
import { NavLink } from 'react-router-dom'

export default function About() {
    return (
        <div >
            <div className='about-heading '>
                <h2>About Me</h2>
            </div>
            <div>
                <hr />
            </div>
            <div className='d-flex  justify-content-between'>
                <div className='data'>
                    <h3>Name : <span>Sanjeev Maurya</span></h3>
                    <h3>Age : <span>23</span></h3>
                    <h3>Age : <span>23</span></h3>
                    <h3>Qualification : <span>B.Tech</span></h3>
                    <h3>Post : <span>Front End Developer </span></h3>
                    <h3>Language : <span>Hindi, English, Punjabi</span></h3>
<NavLink to='/about/resume' className='text-decoration-none'>
                <div className='cv'>Download CV</div></NavLink>
                </div>
                <div>
                    <div className='d-flex'>
                        <div className='box1'>
                            <div className='Experience'><h2 className='bg-grey text-yellow '> 6 </h2></div>
                            <h3 className='bg-grey'>Month of Experience</h3>
                        </div>
                        <div className='box2'>
                            <div className='Completed'>   <h2 className='bg-grey text-yellow'> 0 </h2> </div>
                            <h3 className='bg-grey'>Project Completed</h3>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='box3'>
                            <div className='Customers'> <h2 className='bg-grey text-yellow'> 0 </h2></div>
                            <h3 className='bg-grey'>Happy  Customers</h3>
                        </div>
                        <div className='box4'>
                            <div className='Awards'>   <h2 className='bg-grey text-yellow'> 0  </h2></div>
                         <h3 className='bg-grey'> Awards  Won</h3>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
