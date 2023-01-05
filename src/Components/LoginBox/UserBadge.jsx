import React from 'react'
import './UserBadge.css'

function UserBadge({image,name}) {
  return (
    <>
       <div className='user-badge'>
          <div className='person-image'>
            <img src={image} alt="person1img" />
          </div>
          <div className='person-name'>{name}</div>

        </div>
    </>
  )
}

export default UserBadge
