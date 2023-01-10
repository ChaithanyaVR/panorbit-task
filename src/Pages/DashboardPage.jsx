import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import Header from '../Components/Header/Header'
import Profile from '../Components/Profile/Profile'
import Posts from '../Components/Posts/Posts'
import SideNavbar from '../Components/SideNavbar/SideNavbar'
import { UsersContext } from '../GlobleContext'
import './DashboardPage.css'
import { Routes, Route, Outlet} from 'react-router-dom';
import { useState } from 'react'


function DashboardPage() {

  const {loggedInUser,logoutUser} = useContext(UsersContext)

  useEffect(() => {

    //Run Logout User on Unmount
    return () => {
      logoutUser()
    }
  },[])


  //For Header Title
  const [headerTitle,setHeaderTitle] = useState()

  const handleHeaderTitle = (title) => {
    setHeaderTitle(title)
  }


  return (

    <>
      <div className="dashboard-main-container">
      <SideNavbar/>
      <div className="dashboard-display">
      <Header title={headerTitle}/>
      <Outlet context={{handleHeaderTitle}}/>
      </div>
        
      </div>
    </>
  )
}

export default DashboardPage
