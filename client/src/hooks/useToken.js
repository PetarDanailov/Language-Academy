import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function useToken(){
  const {user} = useContext(UserContext);
  console.log(user)
  const options = {
    headers: {
      "X-Authorization": user.accessToken
    }
  }
  return {user, options}
}