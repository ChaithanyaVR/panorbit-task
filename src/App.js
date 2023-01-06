import './App.css';
import DashboardPage from './Pages/DashboardPage';
import LoginPage from './Pages/LoginPage';
import { Routes, Route} from 'react-router-dom';
import React ,{useEffect} from 'react';
import { UsersContextProvider } from './GlobleContext'

function App() {
  console.log("Start")


  return (
    <UsersContextProvider>

      <div className="App">
            <Routes>
              <Route path='/' exact element={<LoginPage/>} />
              <Route path='/dashboard' element={<DashboardPage/>} />
            </Routes>
      </div>
    </UsersContextProvider>
    
    

  );
}


export default App;
