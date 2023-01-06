import React, {createContext,useState, useEffect} from "react";
import axios from "axios";
export const UsersContext = createContext({});


export const UsersContextProvider = ({children}) => {


    const[usersData, setUsersData] = useState([]);
    const[loggedInUser, setLoggedInUser] = useState(null);
    console.log('Code Start')


    //Fetch Logic
    useEffect(() => { fetchUsers() },[])
  
    const fetchUsers = async() => {
    await axios.get('https://panorbit.in/api/users.json')
      .then(res => {
        console.log(res.data)
        setUsersData(res.data.users)
      })
      .catch(err => {
        console.log(err)
      })
     }

    
    //Set Login User Logic

    const loginUser = (id) => {
      const user = usersData.filter(user => {
        return user.id === id
      })

      
      setLoggedInUser(user[0])
      //Store User into Local Storage
      localStorage.setItem('user', JSON.stringify(user[0]))
      
    }


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
        setValue (prevState => ({...prevState,
            usersData,
            loggedInUser,
            setLoggedInUser,
            loginUser,
            logoutUser
         }))
    },[usersData,loggedInUser])
     


     return (
        <UsersContext.Provider value={value}>
            {children}
        </UsersContext.Provider>
     )
}

export default UsersContextProvider

