import "../styles/Specility.css";

import react from "../assets/react.png";
import html from "../assets/html.png";
import css from "../assets/css.png";

import pencil from "../assets/pencil.png";
import clipboard from "../assets/clipboard.png";
import tele from "../assets/tele.png";
import psd from "../assets/psd.png";
import figma from "../assets/figma.png";
import illus from "../assets/ai.png";

function Specility() {
  return (
    <>
      <section className="Speciality">
        <div className="boxspec">
          <div className="boxothers">
            <div className="boxflexemoji-text_under">
              <div className="boxemoji_text">
                <li>
                  <img src={tele} alt="" />
                </li>
                <li>
                  <p>front-end</p>
                </li>
              </div>
              <div className="boxdes">
                <a href="https://html.spec.whatwg.org/ " target="_blank">
                  <div className="clientbox">
                    <ul>
                      <li>
                        <img
                          style={{
                            width: "1.2em",
                            height: "1.3em",
                            objectFit: "contain",
                            transform: "translate(0, 13%)",
                          }}
                          src={html}
                          alt=""
                        />
                      </li>

                      <li>
                        <p>HTML</p>
                      </li>
                    </ul>
                  </div>
                </a>
                <a href="https://html.spec.whatwg.org/ " target="_blank">
                  <div className="clientbox">
                    <ul>
                      <li>
                        <img
                          style={{
                            width: "1.2em",
                            height: "1.3em",
                            objectFit: "contain",
                            transform: "translate(0, 13%)",
                          }}
                          src={css}
                          alt=""
                        />
                      </li>

                      <li>
                        <p>CSS&nbsp;&nbsp;&nbsp;&nbsp;</p>
                      </li>
                    </ul>
                  </div>
                </a>
                <a href="https://html.spec.whatwg.org/ " target="_blank">
                  <div className="clientbox">
                    <ul>
                      <li>
                        <img
                          style={{
                            width: "1.2em",
                            height: "1.3em",
                            objectFit: "contain",
                            transform: "translate(0, 13%)",
                          }}
                          src={react}
                          alt=""
                        />
                      </li>

                      <li>
                        <p>React</p>
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="boxothers">
            <div className="boxflexemoji-text_under">
              <div className="boxemoji_text">
                <li>
                  <img src={pencil} alt="" />
                </li>
                <li>
                  <p>ul/ux design</p>
                </li>
              </div>
              <div className="boxdes">
                <a href="https://html.spec.whatwg.org/ " target="_blank">
                  <div className="clientbox">
                    <ul>
                      <li>
                        <img
                          style={{
                            width: "1.2em",
                            height: "1.3em",
                            objectFit: "contain",
                            transform: "translate(0, 13%)",
                          }}
                          src={psd}
                          alt=""
                        />
                      </li>

                      <li>
                        <p>Photoshop</p>
                      </li>
                    </ul>
                  </div>
                </a>
                <a href="https://html.spec.whatwg.org/ " target="_blank">
                  <div className="clientbox">
                    <ul>
                      <li>
                        <img
                          style={{
                            width: "1.2em",
                            height: "1.3em",
                            objectFit: "contain",
                            transform: "translate(0, 13%)",
                          }}
                          src={illus}
                          alt=""
                        />
                      </li>

                      <li>
                        <p>Illustrator</p>
                      </li>
                    </ul>
                  </div>
                </a>
                <a href="https://html.spec.whatwg.org/ " target="_blank">
                  <div className="clientbox">
                    <ul>
                      <li>
                        <img
                          style={{
                            width: "1.2em",
                            height: "1.3em",
                            objectFit: "contain",
                            transform: "translate(0, 13%)",
                          }}
                          src={figma}
                          alt=""
                        />
                      </li>

                      <li>
                        <p>Figma</p>
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="boxothers">
            <div className="boxflexemoji-text_under">
              <div className="boxemoji_text">
                <li>
                  <img src={clipboard} alt="" />
                </li>
                <li>
                  <p>Interaction Design</p>
                </li>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Specility;
