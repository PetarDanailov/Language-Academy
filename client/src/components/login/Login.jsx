export default function Login(){
  return(
    <div className="login-container">
    <div className="quote-box">
      <p className="quote-text">
        "It does not matter how slowly you go as long as you do not stop." <br />
        <span className="quote-author">– Confucius</span>
      </p>
    </div>

    <div className="login-content">
      <div className="login-box">
        <form id="loginForm" method="post">
          <h1 className="login-title">Login</h1>
          <hr />
          <div className="login-error" role="alert"></div>
          <div className="containers">
            <label className="login-label">Email</label>
            <input type="email" className="login-input" placeholder="name@example.com" />
            <span className="login-error"></span>
          </div>
          <div className="containers">
            <label className="login-label">Password</label>
            <input type="password" className="login-input" placeholder="Password" />
            <span className="login-error"></span>
          </div>
          <button id="loginSubmit" type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>

      <div className="login-image">
        <img src="https://plmr.co.uk/wp-content/uploads/2023/05/shutterstock_656532487-scaled.webp" alt="Login illustration" className="image" />
      </div>
    </div>
  </div>
      );
}