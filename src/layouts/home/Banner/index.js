import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//components
import BaseButton from "../../../components/Button";
import Modal from '../../../components/Modal'
import Auth from "../../Auth";

//styles
import Styles from "./styles/Banner.module.scss";

function Banner(props) {
  const [status, setStatus] = useState(false)
  const history = useHistory()

  return (
    <section className={Styles["banner-section"]}>
      <div
        id={Styles.clouds3}
        className={Styles.clouds}
       
      ></div>
      <div id={Styles.clouds1} className={Styles.clouds}></div>
      <div
        id={Styles.clouds2}
        className={Styles.clouds}
      ></div>
      <div className={`row justify-content-center ${Styles['banner-title']}`}>
        <div className="col-lg-6 col-11 d-flex flex-column justify-content-center align-items-center">
          <span>یک قلب ! یک آرزو</span>
          <h2 className="mt-4">می تونی دنیا رو به جای قشنگ تری تبدیل کنی</h2>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-12 d-flex justify-content-center flex-wrap">
            <div className="mt-3 mr-lg-3 mr-md-3 mr-sm-3 ml-1">
              <BaseButton theme="outlinebtn" handleClick={()=> history.push('/explore')}>می خوام کمک کنم</BaseButton>
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
<Modal status={status} changeStatus={() => setStatus(false)}>
<Auth />
</Modal>

    </section>
  );
}

export default Banner;
