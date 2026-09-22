import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToLocation() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const target = hash
      ? document.getElementById(hash.replace(/^#/, ""))
      : null;

    if (target) {
      requestAnimationFrame(() => {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname, hash]);

  return null;
}

export default ScrollToLocation;
