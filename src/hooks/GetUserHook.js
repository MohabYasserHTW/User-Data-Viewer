import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";

export default function useFetchUser() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const { updateUser, refresh } = useUserContext();

  useEffect(() => {
    
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

  return { error, loading };
}
