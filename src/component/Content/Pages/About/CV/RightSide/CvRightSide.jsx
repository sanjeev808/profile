import React from 'react'
import './CvRight.css'
export default function CvRightSide() {
  return (
    <div className='Cvright'>
      <div className='cvright-container'>
          <div className='cv-right-details'>
            <p>To work in an organization where I can utilize and enhance my domain knowledge and skill sets to the best of my ability for the business growth of the organization and at the same time continuously upgrading myself</p>
          </div>
          <div className='cvright-education-heading'>
            <h2>Educations</h2>
            <div className=''><hr /></div>
          </div>
          <div className='d-flex justify-content-between cvright-education' >
            <div className='cvright-education-content-date'>
                <p>2018-07 - 2022-7</p>
            </div>
            <div className='cvright-education-content'>
            <h2>Bachelor of Science : Computer Science Of Engineering</h2>
            <p className='c-373738'>Gulzar Group of Institute-Khanna</p>
            </div>
          </div>

          <div className='d-flex justify-content-between ' >
            <div className='cvright-education-content-date'>
                <p>2015-03 - 2017-3</p>
            </div>
            <div className='cvright-education-content width'>
            <h2>senior secondary : Non-Medical</h2>
            <p className='c-373738'>Bhartiya Vidya Mandir Senior Secondary School, Udham Singh Nagar, Ludhiana</p>
            </div>
          </div>

          <div className='d-flex justify-content-between' style={{marginTop:14}} >
            <div className='cvright-education-content-date'>
                <p>2014-03 - 2015-3</p>
            </div>
            <div className='cvright-education-content'>
            <h2>High School </h2>
            <p className='c-373738'>Sky Way Model Sen. Sec. High School, Laxmi Nagar , Ludhiana</p>
            </div>
          </div>

          <div className='cvright-work-heading'>
            <h2>Work History</h2>
            <div className=''><hr /></div>
          </div>
          <div className='d-flex justify-content-between cvright-work' >
            <div className='cvright-work-content-date'>
                <p>2022-01 - Current</p>
            </div>
            <div className='cvright-work-content'>
            <h2>Developer Intern</h2>
            <p className='c-373738'>Seasia Infotech Intern, Ludhiana </p>
            <ul className='mt-10'>
              <li className='mt-10'>A motivated individual with in-depth knowledge of languages and development tools.</li>
           <li className='mt-10'>A curious learner and excellent team player searching for a challenging position as a Software Engineer.</li>
           <li className='mt-10'>An individual with a keen interest in Software programs, possessing good interpersonal and analytical skills.</li>
           <li className='mt-10'>Wrote clear, clean code for various projects.</li>
            {/* <li className='mt-10'>Prioritized tasks and completed in order of importance.</li> */}
            {/* <li className='mt-10'>Coordinated project tasks among multiple departments.</li> */}
            </ul>
            </div>


         
          </div>

      </div>
    </div>
  )
}
