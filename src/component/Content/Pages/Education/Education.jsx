import React from 'react'
import './Education.css'
import hat from './../../../../images/hat.png'

export default function Education() {
    return (
        <div><div className='education-heading '>
            <h2>My <span>Education</span></h2>
        </div>
            <div>
                <hr />
            </div>
            <div className='d-flex justify-content-around'>
                <div className='d-flex' >
                    <div className='line'>
                        <img src={hat} alt="" />
                        <hr />
                    </div>
                    <div>
                        <div className='education-detail'>
                            <h4>2016</h4>
                            <h2>Front End Develpoer</h2>
                        </div>
                    </div>
                </div>
           
            <div className='d-flex'>
                <div className='d-flex' >
                    <div className='line'>
                        <img src={hat} alt="" />
                        <hr />
                    </div>
                    <div>
                        <div className='education-detail'>
                            <h4>2016</h4>
                            <h2>Front End Develpoer</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex'>
                <div className='d-flex' >
                    <div className='line'>
                        <img src={hat} alt="" />
                        <hr />
                    </div>
                    <div>
                        <div className='education-detail'>
                            <h4>2016</h4>
                            <h2>Front End Develpoer</h2>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
