import React from "react";

function UserCard({ user }) {
  return (
    <div className="user-card">
      {!!user?.name.first && (
        <>
          <h1>
            {user?.name?.first} {user?.name?.last}
          </h1>
          <div className="info_div">
          <img src={user.picture.large} alt="user img" />
          <div className="info_div_contact">

            <p>email: {user.email}</p>
            <p>location: {user.location.city}</p>
          </div>
          </div>
        </>
      )}
    </div>
  );
}

export default UserCard;
