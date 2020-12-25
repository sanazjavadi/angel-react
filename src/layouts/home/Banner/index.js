import React, { useEffect, useState } from "react";

//components
import BaseButton from "../../../components/Button";
import Auth from "../../Auth";

//styles
import Styles from "./styles/Banner.module.scss";

function Banner(props) {
  const [status, setStatus] = useState(false)
  const [ThirdCluodPosition, setThirdCluodPosition] = useState(2086.75);
  const [SecondCloudPosition, setSecondCloudPosition] = useState(-4173.5);
  useEffect(() => {
    setInterval(() => {
      setThirdCluodPosition((prev) => (prev += 2));
      setSecondCloudPosition((prev) => (prev += 2));
    }, 100);

    return () => {
      clearInterval();
    };
  }, []);

  return (
    <section className={Styles["banner-section"]}>
      <div
        id={Styles.clouds3}
        className={Styles.clouds}
        style={{ backgroundPositionX: ThirdCluodPosition + "px" }}
      ></div>
      <div id={Styles.clouds1} className={Styles.clouds}></div>
      <div
        id={Styles.clouds2}
        className={Styles.clouds}
        style={{ backgroundPositionX: SecondCloudPosition + "px" }}
      ></div>
      <div className="row justify-content-center banner-title">
        <div className="col-lg-6 col-11 d-flex flex-column justify-content-center align-items-center">
          <span>یک قلب ! یک آرزو</span>
          <h2 className="mt-4">می تونی دنیا رو به جای قشنگ تری تبدیل کنی</h2>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-12 d-flex justify-content-center flex-wrap">
            <div className="mt-3 mr-lg-3 mr-md-3 mr-sm-3 ml-1">
              <BaseButton theme="lightbtn">می خوام کمک کنم</BaseButton>
            </div>

            <div className="mt-3 ml-lg-3 ml-md-3 ml-sm-3 mr-1">
              <BaseButton
             handleClick={() => setStatus(true)}
              >
                ورود
              </BaseButton>
            </div>
          </div>
        </div>
      </div>

    <Auth status={status} changeStatus={() => setStatus(false)}/>
    </section>
  );
}

export default Banner;
