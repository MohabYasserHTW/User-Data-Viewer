
import './App.css';
import UsersList from './components/UsersList';
import UserContextProvider from './context/UserContextProvider';





function App() {
  return (
    <UserContextProvider>
      <UsersList />
    </UserContextProvider>
  );
}

export default App;
