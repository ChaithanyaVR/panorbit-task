import React from 'react'
import './LoginBox.css'
import UserBadge from './UserBadge'
import SampleDP from '../images/download.jpeg'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


function LoginBox()  {
  const [UsersAccount ,setUsersAccount]=useState([])

  useEffect(() => {
    axios.get('https://panorbit.in/api/users.json')
    .then(res => {
      console.log('Fetched Data')
      setUsersAccount(res.data.users)
      console.log(UsersAccount)
    })
    .catch(err =>{
      console.log(err)
    })
  },[])
  return (
    <>
    
      <div className='card'>
        <div className='card-title'>
          <h3 className='title'>Select an account</h3>
        </div>
          <div className="users-container">
          {UsersAccount.map(accounts =>(
            <UserBadge key={accounts.id}image={SampleDP} name={accounts.name}/> 
          ))}
          
          
          </div>

      </div>




    </>
  )
}

export default LoginBox
