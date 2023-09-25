import React from 'react'
import { useUserContext } from '../context/UserContext'

function UsersList() {
    const {users, updateUsers} = useUserContext()
    


  return (
    <ul>
      {
        users.length? users.map(user=><li key={user.id}>{user.firstName}</li>):null
      }
    </ul>
  )
}

export default UsersList
