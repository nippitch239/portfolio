import ImageSourceSmall from "../components/ImageSourceSmall";

import Navbar from "./Navbar";
import "../styles/Certi.css";

import { images, images2, images3 } from "./../assets/AssetCerti";


function CertiSmall() {


  return (
    <>
      <section className="Navbar2">
        <Navbar />
      </section>

      <section className="CertiSmall">
        <div className="boxtext">
          <p>certificate</p>
        </div>
        <div id="COMPETITION"></div>
        <ImageSourceSmall
          images={images}
          certificateText={
            <>
              Certificate of <br />
              Competition{" "}
            </>
          }
        />
        <div id="COMPLETION"></div>
        <ImageSourceSmall
          images={images2}
          certificateText={
            <>
              Certificate of <br />
              Completion{" "}
            </>
          }
        />
        <div id="ACADEMIC"></div>
        <ImageSourceSmall
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
export default CertiSmall;
