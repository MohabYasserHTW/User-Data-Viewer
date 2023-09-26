import React from "react";
import { useUserContext } from "../../context/UserContext";
import UserCard from "./UserCard";

function UsersList() {
  const {
    user,
    history,
    setRefresh,
    recoverUser,
    setMaxLength,
    maxLength,
    loading,
  } = useUserContext();

  return (
    <main>
      <div className="current-user_div">
        <button onClick={() => setRefresh((prev) => !prev)}>Refresh</button>
        {loading ? "Loading..." : <UserCard user={user} />}
      </div>
      <div>
        <label>History length</label>
        <input
          value={maxLength}
          onChange={(e) => setMaxLength(e.target.value)}
        />
        <ul>
          {history.length
            ? history.map((user) => {
                return (
                  <li onClick={() => recoverUser(user)}>
                    <UserCard user={user} key={user.id?.value} />
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </main>
  );
}

export default UsersList;
