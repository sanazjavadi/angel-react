import React from 'react'
import { Link } from "react-router-dom";

//assets
import Logo from '../../../svg/Logo'

function Mobilemenu(props) {
    return (
        <div className="container-fluid">
    <div
      className="mobile-header d-flex justify-content-between align-items-center "
    >
      <div className="hamburger-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="mr-4">
        <Logo width="50" height="50" />
      </div>
    </div>

    <div  className="hamburger-menu">
      <ul >
        <li>
          <Link to="/">
            خانه
          </Link>
        </li>
        <li>
          <Link to="about">
            چه کار می کنیم
          </Link>
        </li>
        <li>
          <Link to="contact">
            تماس با ما
          </Link>
        </li>
        <li>
          <Link to="explore">
            فروشگاه مهربانی
          </Link>
        </li>
        <li>
          <Link to="support">
            حمایت شما
          </Link>
        </li>
      </ul>
    </div>
  </div>
    )
}



export default Mobilemenu
