const ImageItem = ({ title, imageUrl }) => {
  return (
    <div>
      <h4>{title}</h4>
      <img src={imageUrl} alt={title} />
    </div>
  );
};

export default ImageItem;
