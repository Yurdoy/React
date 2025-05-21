import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {registerUser} from "../store/services/auth/authRegisterUser.js";

const Register = () => {
  const dispatch = useDispatch()
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onRegisterUser = () => {
      dispatch(registerUser(registerForm))
  }
  return (
    <div>
      register page
      <input
          placeholder='name'
        type="text"
        name="name"
        onChange={onHandleChange}
        value={registerForm.username}
      />
      <input
          placeholder='email'
        type="text"
        name="email"
        onChange={onHandleChange}
        value={registerForm.email}
      />
      <input
          placeholder='password'
        type="password"
        name="password"
        onChange={onHandleChange}
        value={registerForm.password}
      />
      <button onClick={onRegisterUser}>register</button>
    </div>
  );
};

export default Register;
