import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const id = decodeURIComponent(location.hash.substring(1));

    const scrollToSection = () => {
      const element = document.getElementById(id);

      if (!element) {
        return false;
      }

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return true;
    };

    // Give the Home page time to render after route change.
    const firstAttempt = setTimeout(() => {
      if (!scrollToSection()) {
        const secondAttempt = setTimeout(scrollToSection, 100);
        return () => clearTimeout(secondAttempt);
      }
    }, 50);

    return () => clearTimeout(firstAttempt);
  }, [location.pathname, location.hash]);

  return null;
}

export default ScrollToHash;
