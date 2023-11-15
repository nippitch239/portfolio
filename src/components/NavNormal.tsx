import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

function NavNormal() {
  const location = useLocation();
  const defaultPage = location.pathname === "/FirstPage";
  const isCertificatePage = location.pathname === "/Certificate";
  const isPicturePage = location.pathname === "/Picture";

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="nav">
      <ul>
        <li className="HomeBox">
          <a className="HomeA" onClick={scrollToTop}>
            <div
              className={`boxtextNav ${
                isCertificatePage ? "certi-transform" : ""
              }`}
            >
              <p>
                {defaultPage
                  ? "Home"
                  : isCertificatePage
                  ? "Certificate"
                  : isPicturePage
                  ? "Picture"
                  : defaultPage
                  ? "Home"
                  : "Home"}
              </p>
              <div className="line"></div>
              <div className="boxForline">
                <div className="boxUnder">
                  <li>
                    {defaultPage && (
                      <Link to="/Certificate">
                        <p>Certificate</p>
                      </Link>
                    )}
                  </li>
                  <li>
                    {defaultPage && (
                      <Link to="/Picture">
                        <p>Picture</p>
                      </Link>
                    )}
                  </li>
                  <li>
                    {isCertificatePage && (
                      <Link to="/FirstPage">
                        <p>Home</p>
                      </Link>
                    )}
                  </li>
                  <li>
                    {isCertificatePage && (
                      <Link to="/Picture">
                        <p>Picture</p>
                      </Link>
                    )}
                  </li>
                  <li>
                    {isPicturePage && (
                      <Link to="/FirstPage">
                        <p>Home</p>
                      </Link>
                    )}
                  </li>
                  <li>
                    {isPicturePage && (
                      <Link to="/Certificate">
                        <p>Certificate</p>
                      </Link>
                    )}
                  </li>
                </div>
              </div>
            </div>
          </a>
        </li>
        {/* pageFour pageCollection pageFive */}
        <li>
          {isCertificatePage ? (
            <a href="#COMPETITION">
              <p>Competition</p>
            </a>
          ) : defaultPage ? (
            <a href="#pageThree">
              <p>Expertise</p>
            </a>
          ) : (
            <a href="">
              <p>MySelf</p>
            </a>
          )}
        </li>
        <li>
          {isCertificatePage ? (
            <a href="#COMPLETION">
              <p>Completion</p>
            </a>
          ) : defaultPage ? (
            <a href="#pageFour">
              <p>Education</p>
            </a>
          ) : (
            <a href="#">
              <p>Grid Certificate</p>
            </a>
          )}
        </li>
        <li>
          {isCertificatePage ? (
            <a href="#ACADEMIC">
              <p>Academic</p>
            </a>
          ) : defaultPage ? (
            <a href="#pageCollection">
              <p>Collection</p>
            </a>
          ) : (
            <a href="#">
              <p>Image</p>
            </a>
          )}
        </li>
        <li>
          {defaultPage && (
            <a href="#pageFive">
              <p>Contact</p>
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NavNormal;
