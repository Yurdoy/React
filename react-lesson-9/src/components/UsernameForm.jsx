import { useForm } from "react-hook-form";

function UsernameForm() {
  const {
    register,
    formState: { errors, isDirty, isValid, isSubmitting },
    handleSubmit,
    watch,
  } = useForm();

  const selectedOption = watch("email");

  const validateUsername = (value) => {
    if (!value.includes("@")) {
      return "username should contain @";
    } else {
      return false;
    }
  };

  const sendData = (data) => {
    console.log(data, isDirty);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(sendData)}>
        <input
          type="text"
          {...register("username", { required: "user name is required" })}
        />
        {errors.username && <p>{errors.username.message}</p>}
        <input
          type="text"
          {...register("password", { required: "password is required" })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          type="text"
          {...register("email", { validate: validateUsername })}
        />
        User Email
        {errors.email && <p>{errors.email.message}</p>}
        <button disabled={!isValid || isSubmitting}>Submit</button>
      </form>
      {selectedOption}
    </div>
  );
}

export default UsernameForm;
