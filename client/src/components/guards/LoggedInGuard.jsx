import { useContext } from "react"
import { Navigate, Outlet } from "react-router"
import { UserContext } from "../../context/UserContext"

export const LoggedInGuard = () => {
  const {user} = useContext(UserContext)
  return user ? <Outlet/> :<Navigate to="login"/>
}