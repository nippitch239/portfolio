import "../styles/Profile.css";
import graduate from "../assets/graduate.png";
import calendar from "../assets/calendar.png";
import call from "../assets/call.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import arroba from "../assets/arroba.png";
import Collection from "./Collection";

// import com from "../assets/laptop.png"

function Profile() {
  return (
    <>
      <section className="fiveSection" id="pageThree">
        <div className="boxFortextBackGroundAfterFirstSection">
          <p className="textBackGroundAfterFirstSection">expertise</p>
          <p className="textBackGroundAfterFirstSectionUnderScore">AREA</p>
        </div>
        <div className="backgroundBeforebackgroundAfterFisrtSection">
          <div className="gridForExpertise">
            <div className="boxMainOfGrid">
              <div className="flexForTextAndBoxInside">
                <div className="textMainOfBoxMainOfGrid">
                  <div className="boxForMainText">
                    <p className="textTextMainOfBoxMainOfGrid">HTML</p>
                  </div>
                  <div className="boxAsideTextMainOfBox">
                    <p className="textAside">80%</p>
                  </div>
                </div>
                <div className="boxMainChart">
                  <div className="colorBoxMainChart"></div>
                </div>
              </div>
            </div>

            <div className="boxMainOfGrid">
              <div className="flexForTextAndBoxInside">
                <div className="textMainOfBoxMainOfGrid">
                  <div className="boxForMainText">
                    <p className="textTextMainOfBoxMainOfGrid">JS</p>
                  </div>
                  <div className="boxAsideTextMainOfBox">
                    <p className="textAside">50%</p>
                  </div>
                </div>
                <div className="boxMainChart">
                  <div className="colorBoxMainChartJS"></div>
                </div>
              </div>
            </div>

            <div className="boxMainOfGrid">
              <div className="flexForTextAndBoxInside">
                <div className="textMainOfBoxMainOfGrid">
                  <div className="boxForMainText">
                    <p className="textTextMainOfBoxMainOfGrid">CSS</p>
                  </div>
                  <div className="boxAsideTextMainOfBox">
                    <p className="textAside">80%</p>
                  </div>
                </div>
                <div className="boxMainChart">
                  <div className="colorBoxMainChart"></div>
                </div>
              </div>
            </div>

            <div className="boxMainOfGrid">
              <div className="flexForTextAndBoxInside">
                <div className="textMainOfBoxMainOfGrid">
                  <div className="boxForMainText">
                    <p className="textTextMainOfBoxMainOfGrid">React</p>
                  </div>
                  <div className="boxAsideTextMainOfBox">
                    <p className="textAside">50%</p>
                  </div>
                </div>
                <div className="boxMainChart">
                  <div className="colorBoxMainChartJS"></div>
                </div>
              </div>
            </div>

            <div className="boxMainOfGrid">
              <div className="flexForTextAndBoxInside">
                <div className="textMainOfBoxMainOfGrid">
                  <div className="boxForMainText">
                    <p className="textTextMainOfBoxMainOfGrid">Photoshop</p>
                  </div>
                  <div className="boxAsideTextMainOfBox">
                    <p className="textAside">70%</p>
                  </div>
                </div>
                <div className="boxMainChart">
                  <div className="colorBoxMainChartPSAE"></div>
                </div>
              </div>
            </div>

            <div className="boxMainOfGrid">
              <div className="flexForTextAndBoxInside">
                <div className="textMainOfBoxMainOfGrid">
                  <div className="boxForMainText">
                    <p className="textTextMainOfBoxMainOfGrid">Illustrator</p>
                  </div>
                  <div className="boxAsideTextMainOfBox">
                    <p className="textAside">40%</p>
                  </div>
                </div>
                <div className="boxMainChart">
                  <div className="colorBoxMainChartILL"></div>
                </div>
              </div>
            </div>

            <div className="boxMainOfGrid">
              <div className="flexForTextAndBoxInside">
                <div className="textMainOfBoxMainOfGrid">
                  <div className="boxForMainText">
                    <p className="textTextMainOfBoxMainOfGrid">Premiere Pro</p>
                  </div>
                  <div className="boxAsideTextMainOfBox">
                    <p className="textAside">80%</p>
                  </div>
                </div>
                <div className="boxMainChart">
                  <div className="colorBoxMainChart"></div>
                </div>
              </div>
            </div>

            <div className="boxMainOfGrid">
              <div className="flexForTextAndBoxInside">
                <div className="textMainOfBoxMainOfGrid">
                  <div className="boxForMainText">
                    <p className="textTextMainOfBoxMainOfGrid">After Effect</p>
                  </div>
                  <div className="boxAsideTextMainOfBox">
                    <p className="textAside">70%</p>
                  </div>
                </div>
                <div className="boxMainChart">
                  <div className="colorBoxMainChartPSAE"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sixSection" id="pageFour">
        <div className="backgroundAfterFirstSection">
          <div className="textMainBox">
            <p className="textBackGroundAfterFirstSection">JOURNEY</p>
            <p className="textBackGroundAfterFirstSectionUnderScore">AREA</p>
          </div>

          <div className="boxCenteredJourney">
            <div className="boxTextJourney">
              <img src={graduate} alt="" draggable="false" />
              <p>Education</p>
            </div>

            <div className="boxOutsideJourney">
              <div className="lineBoxCircleCentered">
                <div className="boxCirC">
                  <div className="border">
                    <div className="circle"></div>
                  </div>
                </div>
                <div className="line"></div>
              </div>
              <div className="boxMainShowJourney">
                <div className="boxTextMainShowJourney">
                  <p>MINPRASATWITTAYA SCHOOL &nbsp;</p>
                  <p className="drobText">Pre-school - Primary School</p>
                  <div className="Carlendar">
                    <img src={calendar} alt="" draggable="false" />
                    <p>2009 - 2017</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="boxOutsideJourney">
              <div className="lineBoxCircleCentered">
                <div className="boxCirC">
                  <div className="border">
                    <div className="circle"></div>
                  </div>
                </div>
                <div className="line"></div>
              </div>
              <div className="boxMainShowJourney">
                <div className="boxTextMainShowJourney">
                  <p>
                    Triamudomsuksa patthanakarn <br />
                    suwannabhumi School
                  </p>
                  <p className="drobText">Junior High School</p>
                  <div className="Carlendar">
                    <img src={calendar} alt="" draggable="false" />
                    <p>2018 - 2020</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="boxOutsideJourney">
              <div className="lineBoxCircleCentered">
                <div className="boxCirC">
                  <div className="border">
                    <div className="circle"></div>
                  </div>
                </div>
                <div className="line"></div>
              </div>
              <div className="boxMainShowJourney">
                <div className="boxTextMainShowJourney">
                  <p>
                    Triamudomsuksa patthanakarn <br />
                    suwannabhumi School
                  </p>
                  <p className="drobText">Senior High School</p>
                  <div className="Carlendar">
                    <img src={calendar} alt="" draggable="false" />
                    <p>2021 - 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pageCollection">
        <Collection />
      </section>

      <section className="sevenSection" id="pageFive">
          <div className="backgroundAfterFirstSection">
            <div className="BoxTextsev">
              <p className="textBackGroundAfterFirstSection">InTouch!</p>
              <p className="textBackGroundAfterFirstSectionUnderScore">AREA</p>
            </div>

        <div className="allsev">
            <div className="boxMain">
              <div className="BoxContact">
                <div className="boxOne">
                  <img src={call} alt="" draggable="false" />
                  <div className="boxTextContact">
                    <p>Call me</p>
                    <p>66+636781372</p>
                  </div>
                </div>

                <div className="boxOne">
                  <img src={arroba} alt="" draggable="false" />
                  <div className="boxTextContact">
                    <p>Email</p>
                    <p>babynippitch@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="boxTwo">
                <li>
                  <a
                    href="https://www.facebook.com/nippitch.konghuayrob/"
                    target="_blank"
                    draggable="false"
                  >
                    <img src={facebook} alt="" draggable="false" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/pchxnph/"
                    target="_blank"
                    draggable="false"
                  >
                    <img src={instagram} alt="" draggable="false" />
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Profile;
