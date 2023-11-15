
import { useMediaQuery } from "react-responsive";
import "../styles/Navbar.css";
import NavMinWidth from "./NavMinWidth";
import NavNormal from "./NavNormal";

function Navbar() {


  const isNotWideScreen = window.innerHeight > window.innerWidth;
  const minWidthQuery = useMediaQuery({maxWidth: "1024px"}) ;
  const normal = useMediaQuery({minWidth: "1366px"}) ;
  

  return (
   <div className="">
    {minWidthQuery ? (
      <NavMinWidth/>
    ): isNotWideScreen ? (
      <NavMinWidth/>
    ): normal && (
      <NavNormal/>
    )}
   </div>
  );
}

export default Navbar;
