import { useEffect, useState } from "react";


export default function  useUserHook(){
    const [refresh,setRefresh] = useState(false)
    const [users,setUsers] = useState([])
    const [usersHistory,setUsersHistory] = useState([])

    useEffect(() => {
        
       fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    }
    ,[refresh])

    return {setRefresh, users, usersHistory}
}
