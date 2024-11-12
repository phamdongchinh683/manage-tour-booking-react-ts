import axios from "axios";
import { AdminLogin } from "../../models/AdminLogin";
import { LoginResponse } from "../../models/TokenResponse";

export function UserService() {

  const adminLogin = async (loginData: AdminLogin): Promise<string> => {
    try {
      const response = await axios.post<LoginResponse>(
        process.env.REACT_APP_ADMIN_LOGIN || "",
        loginData 
      );
      const token = response.data.data;
      localStorage.setItem("token", token);
      return token;
    } catch (err) {
      throw err;
    }
  };

  const getUsers = async () =>{
   try {
    const token = localStorage.getItem("token");
    if (!token) {
     throw new Error("Unauthorized. Please log in.");
   }
    const response = await axios.get(
      process.env.REACT_APP_GET_USERS || "",
      {
       headers: {
        token: `${token}`,
      },
      } 
    );
    return response.data.data;
  } catch (err) {
    throw err;
  }
  }

  return {
    adminLogin,
    getUsers
  };
}
