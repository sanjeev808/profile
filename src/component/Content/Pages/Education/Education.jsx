import React from 'react'
import './Education.css'
import hat from './../../../../images/hat.png'
import SchoolIcon from '@material-ui/icons/School';

export default function Education() {
    return (
        <div><div className='education-heading '>
            <h2>My <span>Education</span></h2>
        </div>
            <div>
                <hr />
            </div>
            <div className='d-flex justify-content-around' style={{ marginTop: 31 }}>
                <div className='d-flex' >
                    <div className='line'>
                        <SchoolIcon  className='root'/>
                        <hr />
                    </div>
                    <div>
                        <div className='education-detail'>
                            <h4>2022 - Current</h4>
                            <h2>Front End Develpoer</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, exercitationem. Id excepturi asperiores, doloribus velit expedita aut? Nisi, animi praesentium!
                            </p>
                        </div>
                    </div>
                </div>

                <div className='d-flex'>
                    <div className='d-flex' >
                        <div className='line'>
                            <SchoolIcon  className='root'/>
                            <hr />
                        </div>
                        <div>
                            <div className='education-detail'>
                                <h4>2018 - 2022</h4>
                                <h2 className='degree'>B.Tech-CSE</h2>
                                <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, exercitationem. Id excepturi asperiores, doloribus velit expedita aut? Nisi, animi praesentium!
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='d-flex' >
                        <div className='line'>
                            <SchoolIcon className='root' />
                            <hr />
                        </div>
                        <div>
                            <div className='education-detail'>
                                <h4>2015 - 2017</h4>
                                <h2 className='degree'>senior secondary</h2>
                                <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, exercitationem. Id excepturi asperiores, doloribus velit expedita aut? Nisi, animi praesentium!
                            </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className='d-flex ' style={{ marginTop: 31 }}>
                <div className='d-flex' >
                    <div className='line'>
                        <SchoolIcon className='root'/>
                        <hr />
                    </div>
                    <div>
                        <div className='education-detail'>
                            <h4>2014 - 2015</h4>
                            <h2>High School</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, exercitationem. Id excepturi asperiores, doloribus velit expedita aut? Nisi, animi praesentium!
                            </p>
                        </div>
                    </div>
                </div>

             

            </div>
        </div>
    )
}
