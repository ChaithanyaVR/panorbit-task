import './App.css';
import DashboardPage from './Pages/DashboardPage';
import LoginPage from './Pages/LoginPage';
import { Switch, Routes, Route} from 'react-router-dom';


function App() {
  console.log("Start")
  return (

    <div className="App">

    <Routes>
       <Route path='/' exact element={<LoginPage/>} />
       <Route path='/dashboard' element={<DashboardPage/>} />
    </Routes>
    </div>
  );
}

export default App;
