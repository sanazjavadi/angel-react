import React from "react";
import { Link } from "react-router-dom";

//components
import BaseButton from '../../../components/Button'

//styles
import Styles from "./styles/Footer.module.scss";

//assets
import Twiiter from '../../../svg/Twitter';
import Instagram from "../../../svg/Instagram";
import Youtube from "../../../svg/Youtube";

function Footer(props) {
  return (
    <footer className={`${Styles["main-footer"]} mt-5 pt-5`}>
      {/* footer upper */}
      <div className={Styles["footer-upper"]}>
        <div className="container-fluid">
          <div className="row justify-content-center">
            {/* Big Column */}
            <div className={`${Styles['big-column']} col-xl-6 col-lg-12 col-md-12 col-sm-11 col-11`}>
              <div className="row ">
                {/* Footer Column */}
                <div className={`${Styles['footer-column']} col-lg-6 col-md-6 col-sm-11 col-11 m-auto`}>
                  <div className={`${Styles['footer-widget']} ${Styles['logo-widget']}`}>
                    <h4 className={Styles['widget-title']} >درباره ما</h4>
                    <div className={Styles['text']} >
                      به مهربانی به مهربانی تلاشی دسته جمعی ست تا کودکان ایران
                      به دلیل مشکلات اقتصادی از تحصیل بازنمانند
                    </div>
                    <div className={Styles.logo}>
                      {/* <BaseLogo :height="50" :width="50" /> */}
                    </div>
                  </div>
                </div>

                {/* Footer Column */}
              </div>
            </div>

            {/* Big Column */}
            <div className={`${Styles['big-column']} col-xl-6 col-lg-12 col-md-12 col-sm-11 col-11 mt-4 mt-lg-0`}>
              <div className="row clearfix">
                <div className={`${Styles['footer-column']} col-lg-6 col-md-6 col-sm-11 col-11 m-auto`}>
                  <h4 className={Styles['widget-title']} >تماس با ما</h4>
                  <div className={Styles['widget-content']}>
                    <ul>
                      <li>
                        <a href="tel:666-888-0000">0218685</a>
                      </li>
                      <li>
                        <a href="mailto:info@gaowa.com">info@angel.com</a>
                      </li>
                    </ul>
                    <div className="mt-3">
                      <BaseButton theme="lightbtn">
                        تماس با ما
                      </BaseButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={Styles['footer-bottom']}>
        <div className="container-fluid">
          <div className={`${Styles['copyright']}  ml-lg-3`}>
            تمام حقوق برای بنیاد نیکوکاری فرشته محفوظ است
          </div>
          <ul className={Styles['social-icon-two']}>
            <li>
              <Link to="#">
               <Twiiter/>
              </Link>
            </li>
            <li>
              <Link to="/">
                <Youtube/>
              </Link>
            </li>
            <li>
              <Link to="/">
              <Instagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
