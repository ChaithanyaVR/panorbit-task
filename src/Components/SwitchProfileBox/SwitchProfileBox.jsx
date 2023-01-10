import React from 'react'
import UserBadge from '../LoginBox/UserBadge'
import './SwitchProfileBox.css'
import {useState,useContext,useEffect} from 'react'
import { UsersContext } from '../../GlobleContext'
import {Link} from 'react-router-dom'


function SwitchProfileBox({image,name,email}) {
  
    const [users,setUsers] = useState([ ])
    const {usersData, logoutUser}= useContext(UsersContext)

    //To update the state once received from UsersContext
    useEffect(()=>{
      setUsers(usersData)
    },[usersData])
    

    

 
  return (
    <>
          

          <div className="popup-box" id='popup-box' style={{display: 'none'}}>
          <div className="profile-info"> <div className='logged-person-image popup-dp'>
                  <img src={image} alt="person1img" />
              </div>
             <h4>{name}</h4> 
               <span>{email}</span> 
                </div>
                <div className="profile-list"> {users.map(accounts =>(
            <Link to='/dashboard' style={{textDecoration: 'none'}} key={accounts.id}>
              <UserBadge key={accounts.id} image={accounts.profilepicture} name={accounts.name} id={accounts.id} /> 
            </Link>
          ))}</div>
             <Link to='/' style={{textDecoration: 'none'}}>
               <div className="button" onClick={logoutUser}> Sign out </div> 
             </Link>     
          </div>
          

          
    </>
  )
}

export default SwitchProfileBox