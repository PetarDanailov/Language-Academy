import {createContext, useEffect, useState } from "react";
export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const logout = async () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  useEffect(() => {
    if(user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    else{
      localStorage.removeItem("user");
    }
  },[user])
  return (
    <UserContext.Provider value={{user,setUser,logout}}>
      {children}
    </UserContext.Provider>
  )
}