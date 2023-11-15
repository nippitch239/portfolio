// import { useState, useEffect, useCallback } from "react";
import "../styles/Collection.css";
import auth from "../assets/auth.png";
import tobe from "../assets/Tobe.png";
import coral2 from "../assets/Coral2.jpg";
import gtc from "../assets/gtc.png"
function Collection() {
  // const [Popup, setPopup] = useState(false);
  // const [Popup2, setPopup2] = useState(false);
  // const [Popup3, setPopup3] = useState(false);
  // const [Popup4, setPopup4] = useState(false);

  // const handleClickOutside = useCallback(
  //   (event: MouseEvent) => {
  //     const target = event.target as HTMLElement;

  //     if (
  //       (Popup || Popup2 || Popup3 || Popup4) &&
  //       !target.closest("#closedPopup")
  //     ) {
  //       setPopup(false);
  //       setPopup2(false);
  //       setPopup3(false);
  //       setPopup4(false);
  //     }
  //     document.body.classList.remove("no-scroll");
  //   },
  //   [Popup, Popup2, Popup3, Popup4]
  // );

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [handleClickOutside]);

  // useEffect(() => {
  //   if (Popup || Popup2 || Popup3 || Popup4) {
  //     document.body.classList.add("no-scroll");
  //   } else {
  //     document.body.classList.remove("no-scroll");
  //   }
  // }, [Popup, Popup2, Popup3, Popup4]);

  return (
    <div id="collection" className="containCollection">
      <div className="backgroundAfterFirstSection">
        <div
          id="boxfortextmargin"
          className="boxFortextBackGroundAfterFirstSectionC"
        >
          <p className="textBackGroundAfterFirstSection">collection</p>
          <p className="textBackGroundAfterFirstSectionUnderScore">AREA</p>
        </div>
        <div className="fcol">
          <div className="flexrow">
            <div className="gridCollection">
              <a
                target="_blank"
                href="https://authentication-three-beta.vercel.app/"
              >
                <div className="boxImage">
                  <img src={auth} alt="" />
                </div>
              </a>
              <a target="_blank" href="https://coral-bleaching.vercel.app/">
                <div className="boxImage2">
                  <img src={coral2} alt="" />
                </div>
              </a>
              <a target="_blank" href="https://github.com/nippitch239/ITCAMP19">
                <div className="boxImage3">
                  <img src={tobe} alt="" />
                </div>
              </a>
              <a target="_blank" href="https://gtc-port.vercel.app/">
                <div className="boxImage4">
                  <img
                    src={gtc}
                    alt=""
                  />
                </div>
              </a>
            </div>
          </div>
          {/* {Popup && (
            <div id="closedPopup" className="imagePopup">
              <iframe
                className="iframe"
                width="1280"
                height="720"
                src="https://authentication-three-beta.vercel.app/"
              ></iframe>
            </div>
          )}
          {Popup2 && (
            <div id="closedPopup" className="imagePopup">
              <div className="Collection">
                <iframe src="#" ></iframe>
              </div>
            </div>
          )}

          {Popup3 && (
            <div id="closedPopup" className="imagePopup">
              {""}
              <iframe
                src="https://www.example.com"
                width="1280"
                height="1080"
              ></iframe>
            </div>
          )}

          {Popup4 && (
            <div id="closedPopup" className="imagePopup">
              {" "}
              <iframe
                src="https://www.example.com"
                width="1280"
                height="1080"
              ></iframe>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default Collection;
