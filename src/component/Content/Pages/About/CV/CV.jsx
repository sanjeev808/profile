import React from 'react'
import './CV.css'
import CvLeftSide from './LeftSide/CvLeftSide'
import CvRightSide from './RightSide/CvRightSide'
export default function CV() {
  return (
    <div className='Cv'>
      <div className='d-flex'>
        <div className='cvleft'>
          <CvLeftSide/>
        </div>
        <div className='cvright'>
          <CvRightSide/>
        </div>
      </div>
    </div>
  )
}
