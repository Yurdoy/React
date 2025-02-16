function Content(props) {
  return (
    <div className="Content">
      <h1>{props.titleText}</h1>
      <p>{props.paragraphText}</p>
      <img
        src="props.imageLink"
        alt="props.imageAlt"
        height="50px"
        width="50px"
      />
    </div>
  );
}

export default Content;
