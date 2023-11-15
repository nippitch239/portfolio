import { useMediaQuery } from "react-responsive";

import CertiSmall from "./CertiSmall";
import CertiMedium from "./CertiMedium";
import CertiLarge from "./CertiLarge";
import CertiNormal from "./CertiNormal";

import "../styles/Certi.css";

function Certi() {
  const smallDevice = useMediaQuery({ maxWidth: "767px" });
  const mediumDevice = useMediaQuery({ minWidth: "768px", maxWidth: "1023px" });
  const largeDevice = useMediaQuery({ minWidth: "1024px" });

  const isWideScreen = window.innerWidth > window.innerHeight;
  const minWidthQuery = useMediaQuery({ query: "(min-width: 1366px)" });
  // const pc = isWideScreen && minWidthQuery;

  return (  
    <>
      <div className="">
        {minWidthQuery ? (
          <>
            <CertiNormal />
          </>
        ) : smallDevice ? (
          <CertiSmall />
        ) : mediumDevice ? (
          <CertiMedium />
        ) : isWideScreen ? (
          <CertiLarge />
        ) : (
          largeDevice && <CertiNormal />
        )}
      </div>
    </>
  );
}
export default Certi;
