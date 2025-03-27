import { useContext } from "react"
import { Navigate, Outlet } from "react-router"
import { UserContext } from "../../context/UserContext"

export const AuthPagesGuard = () => {
  const {user} = useContext(UserContext)
  return user ? <Navigate to="/"/> : <Outlet/>  
}