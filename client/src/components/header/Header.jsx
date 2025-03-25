import { useContext } from "react"
import {Link} from "react-router"
import { UserContext } from "../../context/UserContext"

export default function Header(){
  const {user} = useContext(UserContext)
  return( <nav className="navbar">
    <div className="navbar-inner">
      <div className="flex-container">
      <Link to="/" className="navbar-logo" ><img src="../../../public/images/icon.svg" className="navbar-icon"/>Language Academy</Link>

        
        <div className="navbar-center">
          <Link to="/courses" className="navbar-link">Courses</Link>
          <Link to="/aboutUs" className="navbar-link">About us</Link>
          <Link to="/contacts" className="navbar-link">Contacts</Link>
          {user && user.role === "Admin" ? <Link to="/admin/courseCreate" className="navbar-link">Create course</Link>
          :null}
        </div>
      </div>
      {!user ? <div className="navbar-buttons">
      <Link to="/register" className="signup-button">Sign Up</Link>
      <Link to="/login" className="signin-button">Sign In</Link>
      </div>
      : <div className="welcome-message">Hello {user.username}!</div>
    }
      
    </div>
    </nav>)
}