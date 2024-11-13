import { useEffect, useState } from "react";

interface UseTokenReturn {
  token: string | null;
  setToken: (newToken: string) => void;
  deleteToken: () => void;
  isAuthenticated: () => boolean;
}

function useToken(): UseTokenReturn {

  const getToken = (): string | null => {
    return localStorage.getItem("token");
  };

  const [token, setTokenState] = useState<string | null>(getToken());

  const setToken = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setTokenState(newToken);
  };

  const deleteToken = () => {
    localStorage.removeItem("token");
    setTokenState(null);
  };

  const isAuthenticated = (): boolean => {
    return !!getToken();
  };

  useEffect(() => {
    setTokenState(getToken());
  }, []);

  return {
    token,
    setToken,
    deleteToken,
    isAuthenticated,
  };
}

export default useToken;
