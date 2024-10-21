import { useEffect } from "react";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

const ScrollToTop = (props) => {
  const { routeAccess } = useSelector((state) => state.auth);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <>{props.children}</>;
};

export default ScrollToTop;
