import React from 'react'
import './UserBadge.css'
import {useContext} from 'react'
import {UsersContext} from '../../GlobleContext'


function UserBadge({image,name,id}) {

  const {loginUser, loggedInUser, usersData} = useContext(UsersContext)
 
  console.log('UserBadge')


  const setUser = ()=> {
      console.log('Setting User...')
      loginUser(id)
   }

  
  return (
    <>
       <div className='user-badge' id={id} onClick={setUser} >
          <div className='person-image'>
            <img src={image} alt="person1img" />
          </div>
          <div className='person-name'>{name}</div>
        </div>
    </>
  )
}

export default UserBadge
