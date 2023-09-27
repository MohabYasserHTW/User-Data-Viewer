import React from "react";
import { useEffect, useState } from "react";
function UserItem({ user }) {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <>
      {width > 1000 && <img src={user.picture?.large} alt="user" />}

      <h3>{user.name?.first}</h3>
    </>
  );
}

export default UserItem;
