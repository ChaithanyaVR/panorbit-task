
import { NavLink } from 'react-router-dom'
import './SideNavbar.css'


function SideNavbar() {

  const activeLinkStyle = ({isActive}) => {
    return {
      color: isActive ? 'white' : '',
    }
  }

  return (
    <>
    <div className='navigation'>
      <NavLink to="/dashboard" end style={activeLinkStyle} className='nav-links no-border-top' >Profile</NavLink>
      <NavLink to="/dashboard/posts" exact  style={activeLinkStyle} className='nav-links'>Posts</NavLink>
      <NavLink to="/dashboard/gallery" style={activeLinkStyle} className='nav-links'>Gallery</NavLink>
      <NavLink to="/dashboard/todo" style={activeLinkStyle} className='nav-links'>ToDo</NavLink>
    </div>
      
    </>
  )
}

export default SideNavbar