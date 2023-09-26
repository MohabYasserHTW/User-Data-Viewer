import React from 'react'

function UserItem({user}) {
  return (
    <>
        <img src={user.picture?.large}  alt='user'/>
      <h3>
        {user.name?.first} {user.name?.last}
      </h3>
    </>
  )
}

export default UserItem
