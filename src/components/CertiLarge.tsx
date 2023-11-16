import ImageSourceLarge from "../components/ImageSourceLarge";

import Navbar from "./Navbar";
import "../styles/Certi.css";

import {images, images2, images3} from './../assets/AssetCerti';


function CertiLarge() {
 
  return (
    <>
      <section className="Navbar2">
        <Navbar />
      </section>

      <section className="CertiMedium">
        <div className="boxtext">
          <p>certificate</p>
        </div>
        <div id="COMPETITION"></div>
        <ImageSourceLarge
          images={images}
          certificateText={
            <>
              Certificate of <br />
              Competition{" "}
            </>
          }
        />
        <div id="COMPLETION"></div>
        <ImageSourceLarge
          images={images2}
          certificateText={
            <>
              Certificate of <br />
              Completion{" "}
            </>
          }
        />
        <div id="ACADEMIC"></div>
        <ImageSourceLarge
          images={images3}
          certificateText={
            <>
              Certificate of <br />
              Academia{" "}
            </>
          }
        />
      </section>
    </>
  );
}
export default CertiLarge;
