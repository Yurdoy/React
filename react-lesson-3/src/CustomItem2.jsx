function CustomItem2(props) {
  const { itemCount, description } = props;
  return (
    <div>
      <h5>This is custom item {itemCount}</h5>
      <p>{description}</p>
    </div>
  );
}

export default CustomItem2;
