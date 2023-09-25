import { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({children}){
    const [Users,setUsers] = useState([])

    const updateUsers = (newUsers) => {
        setUsers(newUsers)
    }

    return (
        <UserContext.Provider value={{Users,updateUsers}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider