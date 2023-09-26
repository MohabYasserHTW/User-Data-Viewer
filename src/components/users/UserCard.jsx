import React from "react";
import {BiLogoGmail, BiSolidLocationPlus} from "react-icons/bi"

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
            <p><a href={`mailto:${user.email}`}><b><BiLogoGmail /></b> {user.email}</a></p>
            <p><b><BiSolidLocationPlus /></b> {user.location.city}</p>
          </div>
          </div>
        </>
      )}
    </div>
  );
}

export default UserCard;
