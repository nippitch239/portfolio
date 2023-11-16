import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

function NavMinWidth() {
  const location = useLocation();
  const defaultPage = location.pathname === "/FirstPage";
  const isCertificatePage = location.pathname === "/Certificate";
  const isPicturePage = location.pathname === "/Picture";

  const handleClick = (e: React.FormEvent<HTMLInputElement>) => {
    const checkbox = e.currentTarget;
    const menuItems = document.querySelector(".menu-items");

    if (menuItems) {
      if (checkbox.checked) {
        // When the checkbox is checked, prevent scrolling
        document.body.style.overflow = "hidden";
      } else {
        // When the checkbox is unchecked, allow scrolling
        document.body.style.overflow = "auto";
      }
    }
  };

  async function allfcScro() {
    try {
      window.scrollTo(0, 0); // Scroll to the top of the window
      document.body.style.overflow = "auto"; // Set the overflow style to "auto"
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <nav className="NAVMIN">
        <div className="navbar">
          <div className="container nav-container">
            <input
              onClick={handleClick}
              className="checkbox"
              type="checkbox"
              name=""
              id=""
            />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
              <div className="A">
                <ul>
                  <li>
                    {defaultPage ? (
                      <>
                        <Link onClick={allfcScro} to="/Certificate">
                          <p>Certificate</p>
                        </Link>
                        <Link onClick={allfcScro} to="/Picture">
                          <p>Portfolio</p>
                        </Link>
                      </>
                    ) : isCertificatePage ? (
                      <>
                        <Link onClick={allfcScro} to="/FirstPage">
                          <p>Home</p>
                        </Link>
                        <Link onClick={allfcScro} to="/Picture">
                          <p>Portfolio</p>
                        </Link>
                      </>
                    ) : (
                      isPicturePage && (
                        <>
                          <Link onClick={allfcScro} to="/FirstPage">
                            <p>Home</p>
                          </Link>
                          <Link onClick={allfcScro} to="/Certificate">
                            <p>Certificate</p>
                          </Link>
                        </>
                      )
                    )}
                  </li>
                </ul>
              </div>
            </div>

            <div className="menu-items">
              <div className="flexarrow">
                <li className="LiFlexHome">
                  <a href="#" className="ParenNav">
                    {defaultPage
                      ? "Home"
                      : isCertificatePage
                      ? "Certificate"
                      : isPicturePage
                      ? "Portfolio"
                      : defaultPage
                      ? "Home"
                      : "Home"}
                  </a>
                  <div className="lineHome"></div>
                  <div className="lineHome2"></div>
                </li>
              </div>
              <li>
                <a href="#" className="ChildNav">
                  {defaultPage ? (
                    <>
                      <a href="#pageThree">Expertise</a>
                    </>
                  ) : isCertificatePage ? (
                    <a href="#COMPETITION">Competition</a>
                  ) : (
                    isPicturePage && (
                      <a href="#COMPETITION"></a>
                    )
                  )}
                </a>
              </li>
              <li>
                <a href="#" className="ChildNav">
                  {defaultPage ? (
                    <a href="#pageFour">Education</a>
                  ) : isCertificatePage ? (
                    <a href="#COMPLETION">Completion</a>
                  ) : (
                    isPicturePage && <a href=""></a>
                  )}
                </a>
              </li>
              <li>
                <a href="#" className="ChildNav">
                  {defaultPage ? (
                    <a href="#pageCollection">Collection</a>
                  ) : isCertificatePage ? (
                    <a href="#ACADEMIC">Academic</a>
                  ) : (
                    isPicturePage && ""
                  )}
                </a>
              </li>
              <li>
                <a href="#" className="ChildNav">
                  {defaultPage ? (
                    <a href="#pageFive">Contact</a>
                  ) : (
                    isPicturePage && ""
                  )}
                </a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavMinWidth;
