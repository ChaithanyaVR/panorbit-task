import React, {createContext,useState, useEffect} from "react";
import axios from "axios";
import * as Images from './Components/images'


//Creating a Context
export const UsersContext = createContext({});


//Creating Context Provider Component
export const UsersContextProvider = ({children}) => {
    
    const userImages = Images
    const[usersData, setUsersData] = useState([]);
    const[loggedInUser, setLoggedInUser] = useState(null);
    console.log('Code Start')


    //Fetch Logic
    useEffect(() => { fetchUsers() },[])
  
    const fetchUsers = async() => {
    await axios.get('https://panorbit.in/api/users.json')
      .then(res => {
        console.log('Fetching...')
        console.log(res.data)
        setUsersData(res.data.users)
      })
      .catch(err => {
        console.log(err)

      })
     }

    
    //Setting Images for Users
    useEffect(() => {
      let tempUsers = usersData  
      console.log('Temp Users Object:')
      let i = 1
      for (let user in tempUsers) {
        // console.log(temp[user].profilepicture)
        tempUsers[user].profilepicture = eval(`userImages._${i}`)
        // console.log(temp[user].profilepicture) 
        i++
      }
      setUsersData(tempUsers)

      // console.log(usersData)
    },[usersData]) 


    

    //Set Login User Logic

    const loginUser = (id) => {
      const user = usersData.filter(user => {
        return user.id === id
      })

      
      setLoggedInUser(user[0])
      //Store User into Local Storage
      localStorage.setItem('user', JSON.stringify(user[0]))
      
    }

    //Latching User stored in Local Storage to LoggedInUser State
    useEffect(() => {
      setLoggedInUser(JSON.parse(localStorage.getItem('user')))
    },[])

    //Set Log Out Logic
    const logoutUser = () =>{
      setLoggedInUser(null)
      localStorage.clear()
    }

    

     
    //Combining all Data and Methods
    const [value, setValue] = useState({usersData,loggedInUser,setLoggedInUser,loginUser,logoutUser})  


    useEffect(()=>{
        console.log('Setting Value')
        console.log('Users Data')
        console.log(usersData)
        console.log('Logged In User')
        console.log(loggedInUser ? loggedInUser.name : '')


        setValue ({
            usersData,
            loggedInUser,
            setLoggedInUser,
            loginUser,
            logoutUser
         })

         
    },[usersData,loggedInUser])
     


     return (
        <UsersContext.Provider value={value}>
            {children}
        </UsersContext.Provider>
     )
}

export default UsersContextProvider

