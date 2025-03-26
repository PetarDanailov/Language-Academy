import { useContext } from "react"
import { Navigate, Outlet } from "react-router"
import { UserContext } from "../../context/UserContext"

export const RoleGuard = () => {
  const {user} = useContext(UserContext)
  return user?.role === "Admin" ? <Outlet/> : <Navigate to="/unauthorized" />
}