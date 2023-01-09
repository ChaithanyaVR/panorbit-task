import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { UsersContext } from '../../GlobleContext'
import { useState } from 'react'
import LoggedInUserBadge from '../Profile/LoggedInUserBadge'
import SwitchProfileBox from '../SwitchProfileBox/SwitchProfileBox'
import './Header.css'
function Header() {

    const {loggedInUser} = useContext(UsersContext)
  
    const [user, setUser] = useState({
        name: '',
        profilepicture: '',
        email: '',
    })

    useEffect(() => {
        if (loggedInUser !== null) {
    
            setUser(loggedInUser)
        }
      },[loggedInUser])
    
   

  return (
    <div className='profile-header'>
        <h3>Profile</h3>
        <LoggedInUserBadge image={user.profilepicture} name={user.name} />
        <SwitchProfileBox image={user.profilepicture} name={user.name} email={user.email}/>
      </div>
  )
}

export default Header