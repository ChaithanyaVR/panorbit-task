import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import Profile from '../Components/Profile/Profile'
import { UsersContext } from '../GlobleContext'
import './DashboardPage.css'

function DashboardPage() {

  const {loggedInUser,logoutUser} = useContext(UsersContext)

  useEffect(() => {
    return () => {
      logoutUser()
    }
  },[])

  return (

    <>
      <div className="dashboard-main-container">
        <Profile/>
      </div>
    </>
  )
}

export default DashboardPage
