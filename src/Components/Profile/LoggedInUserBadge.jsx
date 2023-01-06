import './LoggedInUserBadge.css'
import React from 'react'


function LoggedInUserBadge({image, name}) {
  return (
    <div className='logged-user-badge' >
          <div className='logged-person-image'>
            <img src={image} alt="person1img" />
          </div>
          <div className='logged-person-name'>{name}</div>
        </div>
  )
}

export default LoggedInUserBadge