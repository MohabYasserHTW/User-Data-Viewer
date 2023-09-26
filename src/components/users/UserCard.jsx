import React from "react";
import { BiLogoGmail, BiSolidLocationPlus } from "react-icons/bi";

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
            <li>
              {user.name?.title}. {user.name?.first} {user.name?.last}
            </li>
            <li>Age: {user.dob?.age}</li>
            <li>Phone: {user.phone}</li>
            <li><BiSolidLocationPlus />

{user.location.city}</li>
            <li><a href={`mailto:${user.email}`}>
                  <b>
                    <BiLogoGmail />
                  </b>{" "}
                  {user.email}
                </a></li>
          </ul>
        </>
      )}
    </div>
  );
}

export default UserCard;
