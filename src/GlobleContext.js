import React, {createContext,useState, useEffect} from "react";
import axios from "axios";
export const UsersContext = createContext({});


export const UsersContextProvider = ({children}) => {
    const[usersData, setUsersData] = useState([]);
    const[loggedInUser, setLoggedInUser] = useState();
    console.log('Code Start')

      useEffect(() => {
            fetchUsers()
            },[])

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

 

    const [value, setValue] = useState({usersData,loggedInUser,setLoggedInUser})  


    useEffect(()=>{
        console.log('Setting Value')
        console.log('Users Data')
        console.log(usersData)
        setValue (prevState => ({...prevState,
            usersData,
            loggedInUser,
            setLoggedInUser,
         }))
    },[usersData,loggedInUser])
     

     return (
        <UsersContext.Provider value={value}>
            {children}
        </UsersContext.Provider>
     )
}

export default UsersContextProvider

