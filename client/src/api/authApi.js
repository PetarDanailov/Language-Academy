import { useContext } from "react";
import useToken from "../hooks/useToken";
import { request } from "../requester";
import { UserContext } from "../context/UserContext";

const baseUrl = 'http://localhost:3030/users';

export const useRegister = () => {
  const register = async(email,password,username) => {
    const role = "Member";
    const result = await request("POST",`${baseUrl}/register`,{email,password,username,role});
    return result
  }
  return register
}
export const useLogin = () => {
  const login = async (email,password) => {
   const result = await request("POST",`${baseUrl}/login`,{email,password});
    return result
  }
  return login

}
export const useLogoff = () => {
  const {logout} = useContext(UserContext)
  const {options} = useToken();
  const logoff = async () => {
    await request("GET",`${baseUrl}/logout`,null,options);
    logout()
  }
  return logoff
}