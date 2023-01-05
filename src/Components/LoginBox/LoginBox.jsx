import React from 'react'
import './LoginBox.css'
import UserBadge from './UserBadge'
import SampleDP from '../images/download.jpeg'

function LoginBox() {
  return (
    <>
    
      <div className='card'>
        <div className='card-title'>
          <h3 className='title'>Select an account</h3>
        </div>
          <div className="users-container">

          <UserBadge image={SampleDP}/>
          <UserBadge image={SampleDP}/>
          <UserBadge image={SampleDP}/>
          <UserBadge image={SampleDP}/>
          <UserBadge image={SampleDP}/>
          <UserBadge image={SampleDP}/>
          <UserBadge image={SampleDP}/>
          <UserBadge image={SampleDP}/>
          <UserBadge image={SampleDP}/>
          <UserBadge image={SampleDP}/>
          <UserBadge image={SampleDP}/>
          <UserBadge image={SampleDP}/>
          </div>

      </div>



    </>
  )
}

export default LoginBox
