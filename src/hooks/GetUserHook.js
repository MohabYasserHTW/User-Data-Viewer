import { useEffect, useState} from "react";
import { useUserContext } from "../context/UserContext";

export default function useFetchUser() {
  const [error, setError] = useState();

  const { updateUser, refresh,setLoading } = useUserContext();

  
  useEffect(() => {
    setLoading(true)
    fetch("https://randomuser.me/api/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        
        updateUser(data.results[0]);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [refresh]);

  return { error };
}
