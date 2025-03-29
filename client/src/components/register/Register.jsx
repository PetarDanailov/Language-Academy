import { useNavigate } from "react-router";
import { useRegister } from "../../api/authApi";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import useAlert from "../../hooks/useAlert";

export default function Register() {
  const showAlert = useAlert()
  const navigate = useNavigate();
  const register = useRegister();
  const [data,setData] = useState({email:"",firstName:"",lastName:""});
  const {setUser} = useContext(UserContext)
  const registerHandler = async (formData) =>{
    const {email,firstName,lastName,password,repeatPassword} = Object.fromEntries(formData);
      if(!email || !firstName ||!lastName ||!password ||!repeatPassword){
      setData({email,firstName,lastName})
       return showAlert("Warning","Please fill all the required fields","warning");
      }
      if(password !== repeatPassword){
        return showAlert("Warning","Passwords do no match","warning");
      }
      const username = firstName + " " + lastName;
      try{
        const result = await register(email,password,username);
        setUser(result);
        navigate('/')
      }
      catch(err){
        setData({email,firstName,lastName})
        showAlert("Error!","Registration failed please try again.","error")
      } 
  }
  return (
    <div className="register-container">
      <div className="quote-box">
        <p className="quote-text">
          "One language sets you in a corridor for life. Two languages open every door along the way." <br />
          <span className="quote-author">– Frank Smith</span>
        </p>
      </div>
      <div className="register-box">
        <form id="registerForm" action={registerHandler}>
          <h1 className="register-title">Register</h1>
          <hr />
          <div className="register-error" role="alert"></div>

          <div className="containers">
            <label className="register-label">Email</label>
            <input type="email" className="register-input"  name="email" defaultValue={data.email} placeholder="name@example.com" />
            <span className="register-error"></span>
          </div>

          <div className="containers">
            <label className="register-label">First Name</label>
            <input type="text" className="register-input"  name="firstName" defaultValue={data.firstName} placeholder="First name" />
            <span className="register-error"></span>
          </div>

          <div className="containers">
            <label className="register-label">Last Name</label>
            <input type="text" className="register-input"  name="lastName" defaultValue={data.lastName} placeholder="Last name" />
            <span className="register-error"></span>
          </div>

          <div className="containers">
            <label className="register-label">Password</label>
            <input type="password" className="register-input"  name="password" placeholder="Password" />
            <span className="register-error"></span>
          </div>

          <div className="containers">
            <label className="register-label">Confirm Password</label>
            <input type="password" className="register-input"   name="repeatPassword" placeholder="Confirm password" />
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
