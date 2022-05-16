import React from 'react'
import About from '../About/About'
import './Home.css'
import { NavLink } from 'react-router-dom'

export default function Home() {
    return (
        <div className='Home-content'>   <div className='home'>
            <div className='heading'>

                <h3> HI THERE!</h3>
            </div>
            <div className='name-heading'>
                <h2>I'M <span>Sanjeev Maurya</span></h2>
            </div>
            <div className='description'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quam quibusdam maxime deserunt nostrum. Reprehenderit consequatur porro, tempora </p>
            </div>
            
                <NavLink to='/about'  ><div  className='btn2'   >About</div></NavLink>
            
        </div>
        </div>
    )
}
