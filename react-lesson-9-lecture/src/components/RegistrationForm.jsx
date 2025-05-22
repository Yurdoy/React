import React from "react";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Data submitted: ", data);
  };
  return <div></div>;
};

export default RegistrationForm;
