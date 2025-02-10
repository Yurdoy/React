function CustomButton() {
  const handleClick = () => {
    console.log("clicked");
  };
  return <button onClick={handleClick}>click</button>;
}

export default CustomButton;
