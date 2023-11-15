import React, { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  certificateText: React.ReactNode;
}

function ImageSource({images, certificateText}: ImageGalleryProps){
  
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const imageStyle = {
    transform: `translateX(-${currentImage * 97}%)`,
  };


    return (
      <>
      <div className="BoxPicture">
        <div className="boximage">
          <div className="boximg" style={imageStyle}>
            {images.map((image, index) => (
              <img key={index} src={image} alt="" />
            ))}
          </div>
        </div>

        <div className="boxtext">
          <div className="boxtextrea"></div>
          <div className="boxRR">
            <p>{certificateText}</p>
            <div className="controls">
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
      </div>
      </>
    );
}

export default ImageSource;
