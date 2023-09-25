
import  { createContext, useContext } from 'react';

const UserContext = createContext();

export function useMyContext() {
  return useContext(UserContext);
}

export default UserContext;
