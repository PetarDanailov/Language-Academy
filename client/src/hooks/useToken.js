import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function useToken(){
  const {user} = useContext(UserContext);
  const options = {
    headers: {
      "X-Authorization": user?.accessToken
    }
  }
  return {user, options}
}