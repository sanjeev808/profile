import React from 'react'
import './CvLeftSide.css'
import sanjeev from '../../../../../../images/sanjeev.jpeg'
export default function CvLeftSide() {
  return (
    <div className='left'>
      <div className='cv-container'>
        <div className='cv-img'>
          <img src={sanjeev} alt="" />
        </div>
        <div className='cv-name'>
          <h2>Sanjeev Maurya</h2>
          <p>Front End Developer</p>
        </div>
        <div className='cv-contact'>
          <h2 className='cv-contact-heading'>Contact</h2>
          <h3 className='cv-address'>Address</h3>
          <p>House No.7979, street No.1, New Partap Nager, Bajwa Colony, Habowal,Ludhiana , India 141001</p>
          <h3 className='cv-phone'>Phone No.</h3>
          <p>7009711037</p>
          <h3 className='cv-email'>Email</h3>
          <p>Mauryasanjeev808@gmail.com</p>
        </div>
        <div className='cv-skills'>
          <h2 className='cv-skills-heading'>Skills</h2>
          <div className='Cv-skills-html'>
            <div className='Cv-skills-html-heading'> <h3>HTML5</h3></div>
            <div className='dots'>
              <div className='dot'></div>
              <div className='dot'> </div>
              <div className='dot'> </div>
              <div className='dot '> </div>
              <div className='dot bg-373738'> </div>
            </div>
          </div>
          <div className='Cv-skills-html'>
            <div className='Cv-skills-html-heading'> <h3>CSS</h3></div>
            <div className='dots'>
              <div className='dot'></div>
              <div className='dot'> </div>
              <div className='dot'> </div>
              <div className='dot '> </div>
              <div className='dot bg-373738'> </div>
            </div>
          </div>
          <div className='Cv-skills-html'>
            <div className='Cv-skills-html-heading'> <h3>JavaScript</h3></div>
            <div className='dots'>
              <div className='dot'></div>
              <div className='dot'> </div>
              <div className='dot bg-373738'> </div>
              <div className='dot bg-373738'> </div>
              <div className='dot bg-373738'> </div>
            </div>
          </div>
          <div className='Cv-skills-html'>
            <div className='Cv-skills-html-heading'> <h3>C++</h3></div>
            <div className='dots'>
              <div className='dot'></div>
              <div className='dot'> </div>
              <div className='dot '> </div>
              <div className='dot bg-373738'> </div>
              <div className='dot bg-373738'> </div>
            </div>
          </div>
          <div className='Cv-skills-html'>
            <div className='Cv-skills-html-heading'> <h3>React Js</h3></div>
            <div className='dots'>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot bg-373738'> </div>
              <div className='dot bg-373738'> </div>
              <div className='dot bg-373738'> </div>
            </div>
          </div>

          <div className='Cv-skills-html'>
            <div className='Cv-skills-html-heading'> <h3>Bootstrap</h3></div>
            <div className='dots'>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot '> </div>
              <div className='dot bg-373738'> </div>
              <div className='dot bg-373738'> </div>
            </div>
          </div>

          <div className='Cv-skills-html'>
            <div className='Cv-skills-html-heading'> <h3>Github</h3></div>
            <div className='dots'>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot '> </div>
              <div className='dot bg-373738'> </div>
              <div className='dot bg-373738'> </div>
            </div>
          </div>
          <div className='Cv-skills-html'>
            <div className='Cv-skills-html-heading'> <h3>Material Ui</h3></div>
            <div className='dots'>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot bg-373738'> </div>
              <div className='dot bg-373738'> </div>
              <div className='dot bg-373738'> </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div >
  )
}
