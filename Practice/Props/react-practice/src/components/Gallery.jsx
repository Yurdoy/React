import { imagesConfig } from "../imagesConfig";
import ImageItem from "./ImageItem";

function Gallery() {
  return (
    <div>
      {imagesConfig.map((image) => (
        <ImageItem key={image.id} title={image.title} imageUrl={image.src} />
      ))}
    </div>
  );
}

export default Gallery;
