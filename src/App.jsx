
import './App.css';
import UserContextProvider from './context/UserContextProvider';


/* 
  // ComponentUsingContext.js
import React from 'react';
import { useMyContext } from './MyContext';

function ComponentUsingContext() {
  const { data, updateData } = useMyContext();

  const handleButtonClick = () => {
    updateData('New data from component');
  };

  return (
    <div>
      <p>Data from context: {data}</p>
      <button onClick={handleButtonClick}>Update Data</button>
    </div>
  );
}

export default ComponentUsingContext;

*/


function App() {
  return (
    <UserContextProvider>
      <div className="App">
        
      </div>
    </UserContextProvider>
  );
}

export default App;
