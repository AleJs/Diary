import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { googleLogin, startLogin } from "../actions/auth";
const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(email, password));
  };
  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };
  return (
    <>
      <h1 className="auth__title ">Login</h1>
      <form
        onSubmit={handleLogin}
        className="animate__animated animate__fadeIn"
      >
        <input
          type="email"
          className="auth__input"
          placeholder="email"
          name="email"
          autoComplete="yes"
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="password"
          name="password"
          onChange={handleInputChange}
        />
        <button
          disabled={loading}
          className="btn btn-primary btn-block "
          style={{ height: "30px" }}
          type="submit"
        >
          Login
        </button>
        <hr />
        <div className="auth__social-networks">
          <p>Login with social networks</p>

          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link className=" link" to="/auth/register">
          Create new Account
        </Link>
      </form>
    </>
  );
};

export default LoginScreen;
