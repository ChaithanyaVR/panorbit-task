import React from 'react'
import UserBadge from '../LoginBox/UserBadge'
import './Profile.css'
import SampleDP from '../images/1.jpeg'
import { useContext } from 'react'
import { UsersContext } from '../../GlobleContext'
import { useState } from 'react'
import { useEffect } from 'react'
import LoggedInUserBadge from './LoggedInUserBadge'
import GoogleMap from '../GoogleMapIntegration/GoogleMap'
import SwitchProfileBox from '../SwitchProfileBox/SwitchProfileBox'



function Profile() {
  const {loggedInUser} = useContext(UsersContext)
  
  const [user,setUser] = useState({
    name: '',
    username: '',
    email: '',
    profilepicture: '',
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
  // console.log('Profile: ')
  // console.log(user)



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
        <LoggedInUserBadge image={user.profilepicture} name={user !== null ? user.name : 'No user'} />
        <SwitchProfileBox image={user.profilepicture} name={user.name} email={user.email}/>
      </div>

      <div className="profile-tiles-container">
        <div className="profile-left-tile">
            <div className="profile-details border-bottom">

                <div className="profile-dp-container">
                    <img src={user.profilepicture} alt="ProfileDP" />
                </div>
                <h3>{user !== null ? user.name : 'No user'}</h3>
                <div className="profile-info-box">
                <table >
                  <tbody>
                    <tr>
                      <td className='info-label'>Username : </td>
                      <td>{user.username}</td>
                    </tr>
                    <tr>
                      <td className='info-label'>e-mail : </td>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <td className='info-label'>Phone : </td>
                      <td>{user.phone}</td>
                    </tr>
                    <tr>
                    <td className='info-label'>Website : </td>
                    <td>{user.website} </td>
                    </tr>
                  </tbody>
                </table>  
                </div>
            </div>

            <div className="profile-details">
                <h3 className='company-heading'>Company</h3>
                <div className="profile-info-box">
                    

                <table >
                  <tbody>
                    <tr>
                      <td className='info-label'>Name : </td>
                      <td>{user.company.name}</td>
                    </tr>
                    <tr>
                      <td className='info-label'>Catch Phrase : </td>
                      <td> {user.company.catchPhrase} </td>
                    </tr>
                    <tr>
                      <td className='info-label'>Bs : </td>
                      <td>{user.company.bs}</td>
                    </tr>
                  </tbody>
                </table>  
                </div>

            </div>
        </div>
            <div className="profile-right-tile">
                <div className="profile-address-details">
                    <h3><span>Address : </span></h3>
                    <div className="profile-company-details-box">

                    <table >
                  <tbody>
                    <tr>
                      <td className='info-label'>Street : </td>
                      <td>{user.address.street}</td>
                    </tr>
                    <tr>
                      <td className='info-label'>Suite : </td>
                      <td> {user.address.suite} </td>
                    </tr>
                    <tr>
                      <td className='info-label'>City : </td>
                      <td>{user.address.city}</td>
                    </tr>
                    <tr>
                      <td className='info-label'>Zipcode : </td>
                      <td>{user.address.zipcode}</td>
                    </tr>
                  </tbody>
                </table>  

                    </div>

                    <GoogleMap 
                    latitude={user.address.geo.lat} 
                    longitude={user.address.geo.lng} />
                </div>
            </div>
      </div>
    </div>
   
    </>
  )
}

export default Profile
