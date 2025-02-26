function FeedbackForm() {
  let inputName = " ";

  const handleInputChange = (event) => {
    inputName = event.target.value;
    console.log("Current input:", inputName);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Name:", inputName);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your name:
        <input type="text" name="name" onChange={handleInputChange} />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}

export default FeedbackForm;
