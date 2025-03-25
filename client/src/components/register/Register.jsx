export default function Register() {
  return (
    <div className="register-container">
      <div className="quote-box">
        <p className="quote-text">
          "One language sets you in a corridor for life. Two languages open every door along the way." <br />
          <span className="quote-author">– Frank Smith</span>
        </p>
      </div>
      <div className="register-box">
        <form id="registerForm" method="post">
          <h1 className="register-title">Register</h1>
          <hr />
          <div className="register-error" role="alert"></div>

          <div className="containers">
            <label className="register-label">Email</label>
            <input type="email" className="register-input" placeholder="name@example.com" />
            <span className="register-error"></span>
          </div>

          <div className="containers">
            <label className="register-label">First Name</label>
            <input type="text" className="register-input" placeholder="First name" />
            <span className="register-error"></span>
          </div>

          <div className="containers">
            <label className="register-label">Last Name</label>
            <input type="text" className="register-input" placeholder="Last name" />
            <span className="register-error"></span>
          </div>

          <div className="containers">
            <label className="register-label">Password</label>
            <input type="password" className="register-input" placeholder="Password" />
            <span className="register-error"></span>
          </div>

          <div className="containers">
            <label className="register-label">Confirm Password</label>
            <input type="password" className="register-input" placeholder="Confirm password" />
            <span className="register-error"></span>
          </div>

          <button id="registerSubmit" type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
