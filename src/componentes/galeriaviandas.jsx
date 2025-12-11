import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./galeriaviandas.css";

export default function PlanGallery({ images }) {
  return (
    <div className="gallery-container">
      <ImageGallery
        items={images}
        showPlayButton={false}
        showThumbnails={true}
        showFullscreenButton={false}
        slideInterval={3000}
      />
    </div>
  );
}