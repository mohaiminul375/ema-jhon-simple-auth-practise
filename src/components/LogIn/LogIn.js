import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import "./LogIn.css";

const LogIn = () => {
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate()

const handleLogin =(e)=>{
  e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  signIn(email,password)
  .then(result =>{
     const user = result.user;
     console.log(user)
     form.reset();
     navigate('/');
 })
  .error(error=> console.log(error))
}
  return (
    <div className="form-container">
      <h1 className="form-title">LogIn Here !!!!</h1>
      <form onSubmit={handleLogin} >
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" placeholder="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id=""
            placeholder="password"
            required
          />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p>
        New to ema-jhon? <Link to="/register">Create a New Account</Link>
      </p>
    </div>
  );
};

export default LogIn;
