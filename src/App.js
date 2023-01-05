import './App.css';
import DashboardPage from './Pages/DashboardPage';
import LoginPage from './Pages/LoginPage';
import { Switch, Routes, Route} from 'react-router-dom';
import LoginBox from './Components/LoginBox/LoginBox';
import {useEffect, useState} from 'react'
import React from 'react';
import axios  from 'axios';

export const UsersContext = React.createContext()

function App() {
  console.log("Start")
  
  const [usersData, setUsersData] = useState([])

  useEffect(() => {
   fetchUsers()
  },[])

  const fetchUsers = async() => {
    await axios.get('https://panorbit.in/api/users.json')
      .then(res => {
        console.log(res.data)
        setUsersData(res.data.users)
        console.log('UsersData:')
        console.log(usersData)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (

    <div className="App">
 
      <UsersContext.Provider value={usersData.length > 0 ? usersData : []}>

        <Routes>
          <Route path='/' exact element={<LoginPage/>} />
          <Route path='/dashboard' element={<DashboardPage/>} />
        </Routes>
      </UsersContext.Provider>
    </div>
  );
}

export default App;
