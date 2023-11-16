import Navbar from "../components/Navbar";
import "../styles/Picture.css"
function Picture() {
  return (
    <>
      <Navbar />
      <div className="Picture">
        {/* <iframe
          allowFullScreen
          className="fp-iframe"
          src="https://heyzine.com/flip-book/0fab01beb3.html"
          width="100%"
          height="720px"
          frameBorder="0"
          
        ></iframe> */}
        <iframe
          src="https://online.anyflip.com/zqjpu/zuxk/index.html"
          frameBorder="0"
          allowTransparency
          allowFullScreen
          seamless
          width="1280"
          height="720"
        ></iframe>
      </div>
    </>
  );
}
export default Picture;
