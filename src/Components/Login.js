import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase"

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

  const login = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if (auth) {
              history.push("/")
          }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
                  src="https://blog.solidsignal.com/wp-content/uploads/2018/02/Amazon-Logo-600x437.jpg"
                  alt='loginImage'
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="Password"
          />
          <button className="login__signInButton" type="submit" onClick={login}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & sale. Please
          see our Privacy Notice, our Cookies Notice and our Internet-Based Ads
          Notice.
        </p>
        <button
          className="login__registorButton"
          type="submit"
          onClick={register}
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
