import React from "react";
import { Link, useHistory } from "react-router-dom";

//components
import Button from '../../../components/Button'

//styles
import styles from "./styles/Footer.module.scss";
import { Container, Row, Col } from 'react-bootstrap'

//assets
import Twiiter from '../../../svg/Twitter';
import Instagram from "../../../svg/Instagram";
import Youtube from "../../../svg/Youtube";
import Logo from '../../../svg/Logo'

function Footer(props) {
  const history = useHistory()
  return (
    <footer className={`${styles["main-footer"]} mt-5 pt-5`}>

      <div className={`py-5 ${styles["footer-upper"]}`}>
        <Container fluid>
          <Row className="justify-content-center">

            <Col xl={6} lg={12} md={12} sm={11} xs={11} className={styles['big-column']}>
              <Row>
                {/* Footer Column */}
                <Col lg={6} md={6} sm={11} xs={11} className={`${styles['footer-column']} m-auto`}>
                  <div className="text-right">
                    <h4 className={`${styles['widget-title']}`} >درباره ما</h4>
                    <div className={`mb-4 ${styles['text']}`} >
                    کمپین فرشته یک تلاشی دسته جمعی ست تا به کودکان بی سرپرست برای رسیدن به آرزوهایشان کمک کند
                    </div>
                    <div className={styles.logo}>
                      <Logo height="50" width="50" />
                    </div>
                  </div>
                </Col>


              </Row>
            </Col>


            <div className={`${styles['big-column']} col-xl-6 col-lg-12 col-md-12 col-sm-11 col-11 mt-4 mt-lg-0`}>
              <Row className="clearfix">
                <Col lg={6} md={6} sm={11} xs={11} className="m-auto text-right">
                  <h4 className={` text-right ${styles['widget-title']}`} >تماس با ما</h4>
                  <div className={styles['widget-content']}>
                    <ul className="mb-4">
                      <li>
                        <a href="tel:666-888-0000">0218685</a>
                      </li>
                      <li>
                        <a href="mailto:info@gaowa.com">info@angel.com</a>
                      </li>
                    </ul>
                    <div className="mt-3">
                      <Button theme="outlinebtn" handleClick={()=> history.push('/contact')}>
                        تماس با ما
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </div>


      <div className={`${styles['footer-bottom']}`}>
        <Container fluid className="d-flex align-items-center flex-wrap justify-content-between py-2">
          <div className={`${styles['copyright']}`}>
            تمام حقوق برای بنیاد نیکوکاری فرشته محفوظ است
          </div>
          <ul className={styles['social-icon-two']}>
            <li className="ml-3">
              <Link to="#">
                <Twiiter width="25" height="25" />
              </Link>
            </li>
            <li className="ml-3">
              <Link to="/">
                <Youtube width="25" height="25" />
              </Link>
            </li>
            <li >
              <Link to="/" >
                <Instagram width="20" height="20" />
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
