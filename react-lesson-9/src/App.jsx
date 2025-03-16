import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import EmailForm from "./components/EmailForm";
import UsernameForm from "./components/UsernameForm";
import UserForm from "./components/UserForm";

function App() {
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm();

  // const sendData = (data) => {
  //   console.log(data);
  // };

  return (
    <>
      {/* <RegistrationForm />
      <EmailForm />
      <UsernameForm /> */}
      <UserForm />
      {/* <form onSubmit={handleSubmit(sendData)}>
        <div>
          <input
            type="text"
            {...register("username", {
              required: "username is required))))))",
            })}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <button>click</button>
      </form> */}
    </>
  );
}

export default App;
