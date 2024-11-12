import { useEffect, useState } from "react";

function useToken() {
  const [token, setToken] = useState<string | null>(null); 

  const getToken = (): string | null => {
    return localStorage.getItem("token");
  };

  const deleteToken = () => {
    localStorage.removeItem("token");
    setToken(null); 
  };

  const isAuthenticated = () => {
    return !!getToken(); 
  };

  useEffect(() => {
    setToken(getToken()); 
  }, []);

  return {
   token,  
    deleteToken,
    isAuthenticated,
  };
}

export default useToken;
