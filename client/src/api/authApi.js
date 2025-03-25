import { request } from "../requester";

const baseUrl = 'http://localhost:3030/users';

export const useRegister = () => {
  const register = async(email,password,username) => {
    const role = email === "danailovvpetar@gmail.com" ? "Admin" : "Member";
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