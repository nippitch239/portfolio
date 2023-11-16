import ImageSourceMedium from "../components/ImageSourceMedium";

import Navbar from "./Navbar";
import "../styles/Certi.css";

import { images, images2, images3 } from "./../assets/AssetCerti";



function CertiMedium() {


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
        <ImageSourceMedium
          images={images}
          certificateText={
            <>
              Certificate of <br />
              Competition{" "}
            </>
          }
        />
        <div id="COMPLETION"></div>
        <ImageSourceMedium
          images={images2}
          certificateText={
            <>
              Certificate of <br />
              Completion{" "}
            </>
          }
        />
        <div id="ACADEMIC"></div>
        <ImageSourceMedium
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
export default CertiMedium;
