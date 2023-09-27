import React from "react";

function UserCard({ user }) {
  return (
    <div className="user-card">
      {!!user.name.first && (
        <>
          <div className="info_div">
            <img src={user.picture.large} alt="user img" />

            <h1>
              {user.name?.title}. {user.name?.first} {user.name?.last}
            </h1>
          </div>
          <ul className="extra-info">
            <li>Age: {user.dob?.age}</li>
            <li>Phone: {user.phone}</li>
            <li>Location: {user.location.city}</li>
            <li>
              Email
              <a href={`mailto: ${user.email}`}>
                <b> {`: ${user.email}`}</b>
              </a>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}

export default UserCard;
