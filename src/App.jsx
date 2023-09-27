import "./App.css";
import UsersList from "./components/users/UsersList";

import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <UsersList />
    </UserContextProvider>
  );
}

export default App;
