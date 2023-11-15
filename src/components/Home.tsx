import { useMediaQuery } from "react-responsive";
import HomeMedium from "../components/HomeMedium";

import "../styles/Home.css";
import react from "../assets/react.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import HomeSmall from "./HomeSmall";
import Specility from "./Specility";
import HomeLarge from "./HomeLarge";

import me from "../assets/mee.jpg"

function Home() {
  const smallDevice = useMediaQuery({ maxWidth: "767px" });
  const mediumDevice = useMediaQuery({ minWidth: "768px", maxWidth: "1023px" });
  const largeDevice = useMediaQuery({ minWidth: "1024px" });
  const pc = useMediaQuery({ minWidth: "1366px" });

  return (
    <>
      {pc ? (
        <>
          <div className="sectionHome">
            <div className="ttt"></div>
            <div className="grid">
              <div className="Box1">
                <div className="boximg">
                  <div className="boxii">
                    <img
                      src={me}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="Box2">
                <div className="boxtext">
                  <div className="btee">
                    <p className="header">
                      the portfolio <br />
                      website <span className="emoji-earth">🌐</span>
                    </p>
                    <div className="boxdds">
                      <p className="describe">
                        {" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello! I'm&nbsp;
                        <span>Pitch</span>, I Have Always Passion For
                        <span>&nbsp;Programmer</span>
                        <br />
                        And
                        <span>&nbsp;Graphic Designer</span>, And Attend High
                        School At
                        <br />
                        <span>
                          {" "}
                          Triamudomsuksa Patthanakarn Suwannabhumi School
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="boxclient">
                    <div className="boxlineclient">
                      <div className="lineclient"></div>
                      <div className="flexrr">
                        <div className="boxtextclient">
                          <p>development w/</p>
                        </div>
                        <p>website</p>
                      </div>
                    </div>

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
                    <a href="https://www.w3.org/Style/CSS/" target="_blank">
                      <div className="clientbox">
                        <ul>
                          <li>
                            <img
                              style={{
                                width: "1.3em",
                                height: "1.3em",
                                objectFit: "contain",
                                transform: "translate(0, 13%)",
                              }}
                              src={css}
                              alt=""
                            />
                          </li>
                          <li>
                            <p>CSS</p>
                          </li>
                        </ul>
                      </div>
                    </a>
                    <a href="https://reactjs.org/" target="_blank">
                      <div className="clientbox">
                        <ul>
                          <li>
                            <img src={react} alt="" />
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
            </div>
          </div>
          <Specility />
        </>
      ) : mediumDevice ? (
        <>
          <HomeMedium />
          <Specility />
        </>
      ) : smallDevice ? (
        <>
          <HomeSmall />
          <Specility />
        </>
      ) : (
        largeDevice && (
          <>
            <HomeLarge />
            <Specility />
          </>
        )
      )}
    </>
  );
}
export default Home;
