import React from 'react'
import './SideNavbar.css'
function SideNavbar() {
  return (
    <>
    <div className='navigation'>
      <ul>
        <li className='list'>
          <a href='#'>
          <span className="title">Profile</span>
          </a>
        </li>
        <li className='list'>
          <a href='#'>
          <span className="title">Posts</span>
          </a>
        </li>
        <li className='list'>
          <a href='#'>
          <span className="title">Gallery</span>
          </a>
        </li>
        <li className='list'>
          <a href='#'>
          <span className="title">ToDo</span>
          </a>
        </li>
      </ul>
    </div>
      
    </>
  )
}

export default SideNavbar