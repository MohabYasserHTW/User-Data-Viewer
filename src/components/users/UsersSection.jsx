import React from "react";
import useFetchUser from "../../hooks/GetUserHook";
import UsersList from "./UsersList";

function UsersSection() {
  
    useFetchUser();

  return <section>
    <UsersList />
  </section>;
}

export default UsersSection;
