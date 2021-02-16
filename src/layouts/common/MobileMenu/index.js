import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

//static Data
import { Links } from "../../../constans/data";

//styles
import Styles from "./styles/MobileMenu.module.scss";
import { Container } from 'react-bootstrap'

//assets
import Logo from "../../../svg/Logo";
import CloseButton from "../../../svg/Close";

function Mobilemenu(props) {
  const [displayMenu, setdisplayMenu] = useState(false);
  const location = useLocation();
  return (
    <Container fluid className="px-0" >
      <div
        className={`${Styles["mobile-header"]} d-flex justify-content-between align-items-center`}
      >
        <div
          className={Styles["hamburger-btn"]}
          onClick={() => setdisplayMenu(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="mr-4">
          <Logo width="50" height="50" />
        </div>
      </div>

      <div
        style={displayMenu ? { display: "block" } : { display: "none" }}
        className={Styles["hamburger-menu"]}
      >
        <div className="mt-2 ml-2" onClick={() => setdisplayMenu(false)}>
          <CloseButton width="15" height="15" />
        </div>

        <ul>
          {Links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={`${link.link}`}
                activeClassName={
                  location.pathname === link.link && Styles.isActive
                }
                exact
                onClick={()=> setdisplayMenu(false)}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default Mobilemenu;
