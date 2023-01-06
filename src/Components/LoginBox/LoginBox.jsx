import React from 'react'
import './LoginBox.css'
import UserBadge from './UserBadge'
import SampleDP from '../images/download.jpeg'
import {useContext} from 'react'
import {UsersContext} from '../../GlobleContext'
import { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'




function LoginBox()  {
  
  const [users,setUsers] = useState([ ])
  const {usersData}= useContext(UsersContext)

  //To update the state once received from UsersContext
  useEffect(()=>{
    setUsers(usersData)
  },[usersData])
 
  
  console.log('Login Box:')
  console.log(users)
  return (
    <>
    
      <div className='card'>
        <div className='card-title'>
          <h3 className='title'>Select an account</h3>
        </div>
          <div className="users-container">
          {users.map(accounts =>(
            <Link to='/dashboard' style={{textDecoration: 'none'}}>
              <UserBadge key={accounts.id} image={SampleDP} name={accounts.name} id={accounts.id} /> 
            </Link>
          ))}
          
          
          </div>

      </div>




    </>
  )
}

export default LoginBox
