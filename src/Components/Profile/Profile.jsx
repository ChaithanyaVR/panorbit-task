import React from 'react'
import UserBadge from '../LoginBox/UserBadge'
import './Profile.css'
import SampleDP from '../images/download.jpeg'
import { useContext } from 'react'
import { UsersContext } from '../../GlobleContext'
import { useState } from 'react'
import { useEffect } from 'react'


function Profile() {
  const {loggedInUser} = useContext(UsersContext)
  
  const [user,setUser] = useState([])
  console.log('Profile: ')
  console.log(user)


  useEffect(() => {
    if (loggedInUser !== {}) {

        setUser(loggedInUser)
    }
  },[loggedInUser])
    
  return (
    <>  
    <div className="profile-main-container">
      <div className='profile-header'>
        <h1>Profile</h1>
        <UserBadge image={SampleDP} name={user !== null ? user.name : 'No User'} />
      </div>
    </div>
    </>
  )
}

export default Profile
