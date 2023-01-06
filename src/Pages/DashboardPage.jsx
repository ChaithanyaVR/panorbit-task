import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import Profile from '../Components/Profile/Profile'
import { UsersContext } from '../GlobleContext'


function DashboardPage() {

  const {loggedInUser,logoutUser} = useContext(UsersContext)

  useEffect(() => {
    return () => {
      logoutUser()
    }
  },[])

  return (

    <>
      dashboard:
     
      <Profile/>
    </>
  )
}

export default DashboardPage
