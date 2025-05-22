import React from "react";
import { useForm } from "react-hook-form";

const SimpleForm = () => {
  const {
    register,
    formState: { isDirty, isValid },
  } = useForm({});

  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        {...register("name", { required: true })}
        placeholder="Name"
      />
      <label htmlFor="surname"></label>
      <input
        id="surname"
        {...register("surname", { required: true })}
        placeholder="Surname"
      />
      <div>
        <p>{isDirty ? "Changes have been made." : "No changes yet"}</p>
        <p>
          {isValid ? "Form is complete" : "Form is incomplete or has issues."}
        </p>
      </div>
    </form>
  );
};

export default SimpleForm;
