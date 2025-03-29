import { useNavigate } from "react-router";
import { useLogin } from "../../api/authApi";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import useAlert from "../../hooks/useAlert";

export default function Login(){
  const showAlert = useAlert();
  const navigate = useNavigate();
  const login = useLogin();
  const [email,setEmail] = useState("")
  const {setUser} = useContext(UserContext);
  const loginHandler = async (formData) =>{
    const {email,password} = Object.fromEntries(formData);
    if(!email || !password){
      setEmail(email)
      return showAlert("Warning","Please fill all the required fields","warning");
    }
    try{
      const result = await login(email,password);
      if(result === undefined) {
        setEmail(email)
        throw new Error("Login failed please try again.")
      }
      setUser(result);
      
      navigate("/")
    }
    catch(err){
      showAlert("Error", err.message, "error")
    }
  }
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
        <form id="loginForm" action={loginHandler}>
          <h1 className="login-title">Login</h1>
          <hr />
          <div className="login-error" role="alert"></div>
          <div className="containers">
            <label className="login-label">Email</label>
            <input type="email" className="login-input" name="email" defaultValue={email} placeholder="name@example.com" />
            <span className="login-error"></span>
          </div>
          <div className="containers">
            <label className="login-label">Password</label>
            <input type="password" className="login-input" name="password" placeholder="Password" />
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