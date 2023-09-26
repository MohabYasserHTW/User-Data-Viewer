import { useEffect} from "react";
import { useUserContext } from "../context/UserContext";

export default function useFetchUser() {
  

  const {setError, updateUser, refresh,setLoading } = useUserContext();

  
  useEffect(() => {
    setLoading(true)
    fetch("https://randomuser.me/api/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        
        updateUser(data.results[0]);
        setError("")
      })
      .catch((error) => {
        console.log(error)
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [refresh]);

  
}
