import React from 'react'
import './LoginBox.css'
import UserBadge from './UserBadge'
import SampleDP from '../images/download.jpeg'
import {useContext} from 'react'
import {UsersContext} from '../../App'


function LoginBox()  {
  
  
  const Users = useContext(UsersContext)
  console.log(Users)
  return (
    <>
    
      <div className='card'>
        <div className='card-title'>
          <h3 className='title'>Select an account</h3>
        </div>
          <div className="users-container">
          {Users.map(accounts =>(
            <UserBadge key={accounts.id}image={SampleDP} name={accounts.name}/> 
          ))}
          
          
          </div>

      </div>




    </>
  )
}

export default LoginBox
