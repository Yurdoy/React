import React from "react";
import { useForm } from "react-hook-form";

const UsernameForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(`User: ${data.username}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        id="username"
        type="text"
        {...register("username", {
          required: "This field is mandatory",
          minLength: {
            value: 4,
            message: "The username should contain minimum 4 symbols",
          },
          maxLength: {
            value: 12,
            message: "The username should not exceed 12 symbols",
          },
        })}
      />
      {errors.username && <p>{errors.username.message}</p>}

      <button type="submit">Send</button>
    </form>
  );
};

export default UsernameForm;
