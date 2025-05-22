import React from "react";
import { useForm } from "react-hook-form";

const EmailForm = ({ validationMode }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: validationMode });
  const onSubmit = (data) => {
    alert(`Mail: ${data.email} valid and sent.`);
  };
  const email = watch("email");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        placeholder="Enter Email"
        {...register("email", {
          required: "The field is mandatory",
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Entered value is not corresponding requirements",
          },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <button type="submit">Send</button>
      <div>{email}</div>
    </form>
  );
};

export default EmailForm;
