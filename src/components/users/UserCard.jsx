import React from 'react'

function UserCard({user}) {

    

  return (
    <>
      {user?.name?.first}
    </>
  )
}

export default UserCard
