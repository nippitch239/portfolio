import "../styles/CollectionOne.css"
import auth from "../assets/auth.png"
import Navbar from "./Navbar";

export function CollectionAuth() {
  return (
    <>
      <Navbar />

      <div className="CollectionAuth">
        <div className="text">
          <p>Authentication</p>
        </div>
        <div className="container">
          <div className="imageW">
            <div className="boximage">
              <img src={auth} alt="" />
            </div>
          </div>
          <div className="textdes">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur accusamus, aperiam consectetur natus eos iusto?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
