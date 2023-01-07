import React from 'react'
import UserBadge from '../LoginBox/UserBadge'
import './Profile.css'
import SampleDP from '../images/download.jpeg'
import { useContext } from 'react'
import { UsersContext } from '../../GlobleContext'
import { useState } from 'react'
import { useEffect } from 'react'
import LoggedInUserBadge from './LoggedInUserBadge'



function Profile() {
  const {loggedInUser} = useContext(UsersContext)
  
  const [user,setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    company: {
        name: '',
        catchPhrase: '',
        bs: '',
    },
    address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
            lat: '',
            lng: ''
        }}

})
  console.log('Profile: ')
  console.log(user)



  useEffect(() => {
    if (loggedInUser !== null) {

        setUser(loggedInUser)
    }
  },[loggedInUser])
    
  return (
    <>  
    <div className="profile-main-container">
      <div className='profile-header'>
        <h3>Profile</h3>
        <LoggedInUserBadge image={SampleDP} name={user !== null ? user.name : 'No user'}/>
      </div>

      <div className="profile-tiles-container">
        <div className="profile-left-tile">
            <div className="profile-details">

                <div className="profile-dp-container">
                    <img src={SampleDP} alt="ProfileDP" />
                </div>
                <h3>{user !== null ? user.name : 'No user'}</h3>
                <div className="profile-info-box">
                    <h3><span>Username : </span> {user.username} </h3>
                    <h3><span>e-mail : </span> {user.email} </h3>
                    <h3><span>Phone : </span> {user.phone} </h3>
                    <h3><span>Website : </span> {user.website} </h3>
                </div>
            </div>

            <div className="profile-company-details">
                <h3 className='company-heading'>Company</h3>
                <div className="profile-company-details-box">
                    <h3><span>Name : </span> {user.company.name} </h3>
                    <h3><span>Catch Phrase: </span> {user.company.catchPhrase} </h3>
                    <h3><span>Bs : </span> {user.company.bs} </h3>
                </div>

            </div>
        </div>
            <div className="profile-right-tile">
                <div className="profile-address-details">
                    <h3><span>Address : </span></h3>
                    <div className="profile-company-details-box">
                        <h3><span>Street : </span> {user.address.street} </h3>
                        <h3><span>Suite: </span> {user.address.suite} </h3>
                        <h3><span>City : </span> {user.address.city} </h3>
                        <h3><span>Zipcode : </span> {user.address.zipcode} </h3>
                    </div>

                    
                </div>
              
            </div>
      </div>
    </div>
    </>
  )
}

export default Profile
