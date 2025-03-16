import { useForm } from "react-hook-form";

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useForm();

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
        <button disabled={!isValid || isSubmitting}>Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
