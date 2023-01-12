import './App.css';
import DashboardPage from './Pages/DashboardPage';
import LoginPage from './Pages/LoginPage';
import { Routes, Route} from 'react-router-dom';
import React ,{useEffect} from 'react';
import { UsersContextProvider } from './GlobleContext'
import Profile from './Components/Profile/Profile'
import Posts from './Components/Posts/Posts'
import Gallery from './Components/Gallery/Gallery'
import ToDo from './Components/ToDo/ToDo'





function App() {
  console.log("----------------")
  console.log("Start App")


  return (
    <UsersContextProvider> 

      <div className="App">
            <Routes>
              <Route path='/' exact element={<LoginPage/>} />
              <Route path='dashboard' element={<DashboardPage />} >
                <Route path='posts' element={<Posts/>}/>
                <Route path='gallery' element={<Gallery/>}/>
                <Route path='todo' element={<ToDo/>}/>
                <Route path='' exact element={<Profile/>}/>
              </Route>
            </Routes>
      </div>
    </UsersContextProvider>
    
    

  );
}


export default App;
