import { useContext } from "react"
import {Link} from "react-router"
import { UserContext } from "../../context/UserContext"
import { useLogoff } from "../../api/authApi"

export default function Header(){
  const logoff = useLogoff()
  const {user} = useContext(UserContext)
  return( <nav className="navbar">
    <div className="navbar-inner">
      <div className="flex-container">
      <Link to="/" className="navbar-logo" ><img src="../../../public/images/icon.svg" className="navbar-icon"/>Language Academy</Link>

        
        <div className="navbar-center">
          {user?.role === "Admin" ? <Link to="/admin/courseActions" className="navbar-link">Courses</Link>:
          (<Link to="/courses" className="navbar-link">Courses</Link>)
          }
          <Link to="/aboutUs" className="navbar-link">About us</Link>
          <Link to="/contacts" className="navbar-link">Contacts</Link>
          {user?<Link to="/myCourses" className="navbar-link">My courses</Link> :null}
          {user?.role === "Admin" ? <Link to="/admin/courseCreate" className="navbar-link">Create course</Link>
          :null}
        </div>
      </div>
      {!user ? <div className="navbar-buttons">
      <Link to="/register" className="signup-button">Sign Up</Link>
      <Link to="/login" className="signin-button">Sign In</Link>
      
      </div>
      : <button className="signout-button" onClick={logoff}>Log off</button>
    }
      
    </div>
    </nav>)
}