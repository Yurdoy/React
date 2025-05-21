import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {loginUser} from "../store/services/auth/authLoginUser.js";

const Login = () => {
    const dispatch = useDispatch()
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });

    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setLoginForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const onLoginUser = () => {
        dispatch(loginUser(loginForm))
    }
    return (
        <div>
            login page
            <input
                type="text"
                name="email"
                onChange={onHandleChange}
                value={loginForm.email}
            />
            <input
                type="password"
                name="password"
                onChange={onHandleChange}
                value={loginForm.password}
            />
            <button onClick={onLoginUser}>login</button>
        </div>
    );
};

export default Login;
