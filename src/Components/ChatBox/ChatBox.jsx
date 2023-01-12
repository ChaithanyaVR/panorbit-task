import React from 'react'
import LoggedInUserBadge from '../Profile/LoggedInUserBadge'
import './ChatBox.css'
import * as Img from '../images/index'
import {IoIosArrowUp ,IoIosArrowDown} from 'react-icons/io';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { UsersContext } from '../../GlobleContext';



function ChatBox() {

  const [users,setUsers] = useState([ ])
  const {usersData}= useContext(UsersContext)

  //To update the state once received from UsersContext
  useEffect(()=>{
    setUsers(usersData)
  },[usersData])

  const [isOpen,setIsOpen] = useState(false)

  function toggle() {
    const box = document.getElementById('chats-list')
    if (box.style.display === 'none') {

      box.style.display = 'block'
      setIsOpen(true)
    }
    else {
      box.style.display = 'none'
      setIsOpen(false)

    }
     
  }
   
  return (
    <>
      <div className="chats-container">
        <div className="chats-header">Chats <div className="open-btn" onClick={toggle} id='arrow'> {isOpen === true ? <IoIosArrowDown/> : <IoIosArrowUp/>}</div></div>
        <div className="chats-list-container" id='chats-list'>
          {users.map(accounts => (
            <LoggedInUserBadge image={accounts.profilepicture} name={accounts.name} isOnline={true}/>
          ))}
        </div>
      </div>

        
      
    </>
  )
}

export default ChatBox