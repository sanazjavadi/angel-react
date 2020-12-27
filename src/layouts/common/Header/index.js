import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

//components
import MobileMenu from "../MobileMenu/";

//static Data
import { Links } from "../../../constans/data";

//styles
import Styles from "./styles/Header.module.scss";

//svg
import Logo from "../../../svg/Logo";

function Header(props) {
  const location = useLocation();

  const [scrolled, setscrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleScroll = () => {
    if (Math.round(window.scrollY) > 300) {
      setscrolled(true);
    } else {
      setscrolled(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth < 500) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  };

  useEffect(() => {
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {mobileMenu ? (
        <MobileMenu />
      ) : (
        <>
          {" "}
          <div className="row justify-content-center pt-3 pb-3">
            <div className="col-lg-4 d-flex justify-content-center">
              <Logo height="100" width="100" />
            </div>
          </div>
          <div className="row justify-content-center mt-2">
            <div className="col-lg-8 col-m-8 col-sm-12 d-flex justify-content-center">
              <ul className={`${scrolled && Styles.scrolled} ${Styles.header}`}>
                {scrolled && (
                  <div className={Styles["minimize-icon"]}>
                    <Logo width="40" height="40" />
                  </div>
                )}

                {Links.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={`${link.link}`}
                      activeClassName={
                        location.pathname === link.link && Styles.isActive
                      }
                      exact
                    >
                      {link.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
