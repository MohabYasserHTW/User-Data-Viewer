import "./App.css";

import UsersSection from "./components/users/UsersSection";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <UsersSection />
    </UserContextProvider>
  );
}

export default App;
