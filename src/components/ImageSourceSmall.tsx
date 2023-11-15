import React, { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  certificateText: React.ReactNode;
}

function ImageSourceSmall({ images, certificateText }: ImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const imageStyleS = {
    transform: `translateX(-${currentImage * 100}%)`,
  };

  return (
    <div className="certiSmallImgSource Medium">
      <div className="allcer">
        <div className="boxtextIm">{certificateText}</div>
        <div className="imageBox" style={imageStyleS}>
          {images.map((image, index, ) => (
            <img key={index} src={image}  alt="" />
          ))}
          <div className="bgxs">
            <div className="bgxsmall"></div>
          </div>
        </div>

        <div className="button">
          <div className="circle" onClick={previousImage}>
            <div className="arrow2">
              <div className="arrow-top2"></div>
              <div className="arrow-bottom2"></div>
            </div>
          </div>
          <div className="circle" onClick={nextImage}>
            <div className="arrow">
              <div className="arrow-top"></div>
              <div className="arrow-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSourceSmall;
