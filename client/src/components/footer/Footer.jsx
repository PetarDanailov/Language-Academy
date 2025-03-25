import { Link } from "react-router";

export default function Footer(){
  return(
    <footer className="footer text-muted">
    <div className="container">
      <div className="footer-top">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            This is a learning platform providing courses in various languages. 
            Our goal is to help you achieve your educational objectives.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Address: Vitosha St. 123, Sofia, Bulgaria</p>
          <p>Email: <a href="mailto:danailovvpetar@gmail.com">danailovvpetar@gmail.com</a></p>
          <p>Phone: <a href="tel:+359877182829">+359 877 182 829</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 - Petar Danailov. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.facebook.com/peter.danailov.14/" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </div>
    </div>
</footer>

  )
}