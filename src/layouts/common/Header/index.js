import React, { useEffect, useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";

//components
import MobileMenu from "../MobileMenu/";
import Profile from '../../../components/ProfileDropDown'

//static Data
import { Links } from "../../../constans/data";

//styles
import Styles from "./styles/Header.module.scss";
import { Row, Col } from 'react-bootstrap'

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
    if (window.innerWidth < 921) {
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
          <Row className="justify-content-end  pt-3 pb-3">
         
            <Col lg={{ span: 4, offset: 1 }} sm={6} className="d-flex justify-content-center">
              <Link to="/">
              <Logo height="100" width="100" />
              </Link>
              
            </Col>
           
            <Col lg={3} sm={3} className="d-flex justify-content-center">
            <Profile/>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col lg={8} md={8} sm={12} className="d-flex justify-content-center">
              <ul className={`${scrolled && Styles.scrolled} ${Styles.header}`}>
                {scrolled && (
                  <>
                  <li className={Styles["minimize-icon"]}>
                    <Link to="/">
                    <Logo width="40" height="40" />
                    </Link>
                    
                  </li>
                  <li className={Styles.profile}>
                     <Profile/>
                  </li>
                  </>
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
            </Col>
          </Row>
        </>
      )}
    </>
  );
}

export default Header;
