import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { startRegisterEmailPasswordName } from "../actions/auth";
import { removeError, setError } from "../actions/ui";

const RegisterScreen = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formValues;
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const isFormValid = () => {
    let exName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let exEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (name.trim().length === 0) {
      dispatch(setError("name is required"));
      return false;
    } else if (!exName.test(name.trim())) {
      dispatch(setError("wrong characters"));
      return false;
    }

    if (!exEmail.test(email)) {
      dispatch(setError("email is incorrect "));

      return false;
    }

    if (password !== password2) {
      dispatch(setError("password does not match"));

      return false;
    } else if ((password) => 5) {
      dispatch(setError("password must be a minimum of 5 characters"));
    }

    dispatch(removeError());

    return true;
  };
  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterEmailPasswordName(email, password, name));
    }
  };
  return (
    <div>
      <h1 className="auth__title">Register</h1>
      <form
        onSubmit={handleRegister}
        className="animate__animated animate__fadeIn"
      >
        {msgError && (
          <div className="auth__alert-error animate__animated animate__bounceIn ">
            {msgError}
          </div>
        )}
        <input
          type="name"
          className="auth__input"
          placeholder="name"
          name="name"
          autoComplete="off"
          onChange={handleInputChange}
          value={name}
        />
        <input
          type="email"
          className="auth__input"
          placeholder="email"
          onChange={handleInputChange}
          name="email"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="password"
          onChange={handleInputChange}
          name="password"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="repeat password"
          onChange={handleInputChange}
          name="password2"
        />
        <button
          className="btn btn-primary btn-block"
          style={{ height: "30px" }}
          type="submit"
        >
          Register
        </button>
        <hr />

        <Link className=" link" to="/auth/login">
          Already Registered?
        </Link>
      </form>
    </div>
  );
};

export default RegisterScreen;
