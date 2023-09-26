import { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [history, setHistory] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [maxLength, setMaxLength] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const recoverUser = (oldUser) => {
    setUser(oldUser);
    setHistory((prev) => prev.filter((u) => u.id.value !== oldUser.id.value));
  };

  const updateUser = (newUser) => {
    if (user) {
      addToHistory(user);
    }
    setUser(newUser);
  };

  const addToHistory = (newUser) => {
    if (history.length >= maxLength) {
      history.pop();
      const newHistory = history;
      setHistory([newUser, ...newHistory]);
    } else {
      const newHistory = history;
      setHistory([newUser, ...newHistory]);
    }
  };

  return (
    <UserContext.Provider
      value={{
        error,
        setError,
        loading,
        setLoading,
        user,
        updateUser,
        history,
        addToHistory,
        setRefresh,
        refresh,
        recoverUser,
        setMaxLength,
        maxLength,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
