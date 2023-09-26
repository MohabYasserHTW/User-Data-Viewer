import React from 'react'
import { useUserContext } from '../context/UserContext'
import useUserHook from '../hooks/GetUserHook'

function UsersList() {
    const {users, updateUsers} = useUserContext()
    
    useUserHook()

  return (
    <ul>
      {
        users?.length ? users.map(user=><li key={user.id}>{user.firstName}</li>):null
      }
    </ul>
  )
}

export default UsersList
