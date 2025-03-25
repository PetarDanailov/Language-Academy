import {Link} from "react-router"

export default function Header(){
  return( <nav className="navbar">
    <div className="navbar-inner">
      <div className="flex-container">
      <Link to="/" className="navbar-logo" ><img src="../../../public/images/icon.svg" className="navbar-icon"/>Language Academy</Link>

        
        <div className="navbar-center">
          <Link to="/courses" className="navbar-link">Courses</Link>
          <Link to="/aboutUs" className="navbar-link">About us</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </div>
      </div>
      <div className="navbar-buttons">
        <Link to="/register" className="signup-button">Sign Up</Link>
        <Link to="/login" className="signin-button">Sign In</Link>
      </div>
    </div>
    </nav>)
}