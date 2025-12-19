import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./galeria.css";

import img1 from "../img/comida1.jpg";
import img2 from "../img/comida2.jpg";
import img3 from "../img/comida3.jpg";
import img4 from "../img/comida4.jpg";
import img5 from "../img/comida5.jpg";

export default function Galeria() {
  const images = [
    {
      original: img1,
      thumbnail: img1
    },
    {
      original: img2,
      thumbnail: img2
    },
    {
      original: img3,
      thumbnail: img3
    },
    {
      original: img4,
      thumbnail: img4
    },
    {
      original: img5,
      thumbnail: img5
    }
  ];

  return (
    <div className="galeria-container">
      <ImageGallery
        items={images}
        autoPlay={true}
        showNav={false}
        showPlayButton={false}
        showThumbnails={false}
        showFullscreenButton={false}
        slideInterval={4000}
        slideDuration={900}
      />
    </div>
  );
}
