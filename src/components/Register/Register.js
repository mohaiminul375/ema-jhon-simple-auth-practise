import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Register = () => {
  const {SignUp} = useContext(AuthContext);
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    if(password.length < 6 ){
      setError('Password should be more than 6 characters')
      return;
    }
    if (password !== confirm) {
      setError("Your password did not match");
      return;
    }
    SignUp(email,password)
    .then(result=>{
      const user = result.user
      console.log(user)
      form.reset();
    })
    .catch(error =>console.error(error))


  };
  return (
    <div className="form-container">
      <h1 className="form-title">Register Here !!!!</h1>
      <form onSubmit={handleSubmit}>
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
        <div className="form-control">
          <label htmlFor="confirm">Confirm</label>
          <input
            type="password"
            name="confirm"
            id=""
            placeholder="confirm your password"
            required
          />
        </div>
        <p>{error}</p>
        <input className="btn-submit" type="submit" value="SignUp" />
      </form>
      <p>
        Already have an Account <Link to="/login">LogIn</Link>
      </p>
    </div>
  );
};

export default Register;
