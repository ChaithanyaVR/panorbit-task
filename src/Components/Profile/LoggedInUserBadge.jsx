import './LoggedInUserBadge.css'
import React from 'react'


function LoggedInUserBadge({image, name, isOnline, enableOpenPopup}) {

  let onlineStatus

  if (isOnline !== undefined) {

    if (isOnline === true) {
      onlineStatus = <span style={{color: '#1cad62'}}>●</span>
    }else{
      onlineStatus = <span  style={{color: '#d4d4d4'}}>●</span>
    }
  } 

  function openPopup() {
    const popup = document.getElementById('popup-box')
    console.log(popup.style.display)
    switch(popup.style.display) {
      case 'none':
        popup.style.display = 'flex'
        break;
      case 'flex':
        popup.style.display = 'none'
        break;
      default:
        popup.style.display = 'none'            
    }


    console.log(popup.style.display)
  }
      //Close the Box if clicked outside
      document.addEventListener('mouseup', function(e) {
        var popup = document.getElementById('popup-box');
        var badge = document.getElementById('logged-user-badge')
        
        if(!badge.contains(e.target)) {
          if(!popup.contains(e.target)) {
            popup.style.display = 'none'
          }
        }
  
    });

  return (
    <div className='logged-user-badge' onClick={enableOpenPopup ? openPopup : ''} id='logged-user-badge'>
          <div className='logged-person-image'>
            <img src={image} alt="person1img" />
          </div>
          <div className='logged-person-name'>{name} {onlineStatus}</div>
        </div>
  )
}

export default LoggedInUserBadge