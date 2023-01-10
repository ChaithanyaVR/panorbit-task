
import { useState } from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './SideNavbar.css'


function SideNavbar() {

  console.log('SideNavbar----------------')


  const [offsetState, setOffsetState] = useState()
  const [currentLink, setCurrentLink] = useState({offsetTop: ''})
 

  // To Delay the appearance of the NavBar Indicator
  window.onload= function(event) {
    console.log('Page Refreshed ...............');
    const indicator = document.getElementById('indicator')
    indicator.style.opacity = '1'
  };
  
  //To set the indicator's postition to the active link
  useEffect(() => {
    setCurrentLink(document.querySelector('.active'))
    const indicator = document.getElementById('indicator')
    console.log(currentLink)
    indicator.style.top = `${currentLink.offsetTop + 7}px`
    
  })

  return (
    <>
    <div className='navigation' >
      <NavLink to="/dashboard" end className={link =>  "nav-links no-border-top"+ (link.isActive ? " active" : '')}   >Profile</NavLink>
      <NavLink to="/dashboard/posts"  className={link =>  "nav-links"+ (link.isActive ? " active": '')} >Posts</NavLink>
      <NavLink to="/dashboard/gallery" className={link => "nav-links"+ (link.isActive ? " active" : '')} >Gallery</NavLink>
      <NavLink to="/dashboard/todo" className={link =>  "nav-links"+ (link.isActive ? " active" : '')} >ToDo</NavLink>
     <div className="indicator-container" id='indicator'>

      <span className='indicator'>

        <div className="arrow">
          ⌲
        </div>
      </span>
     </div>
    </div>
      
    </>
  )
}



export default SideNavbar