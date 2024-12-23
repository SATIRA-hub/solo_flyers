import { useState, useEffect } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    console.log("useIsMobile");
    const handleResize = () =>
      setIsMobile(window.innerWidth < 768 ? true : false);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return isMobile;
};

export default useIsMobile;
