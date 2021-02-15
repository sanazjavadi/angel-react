import React from "react";

//components
import Hero from "../../layouts/common/Hero";
import Input from "../../components/Input";
import Button from "../../components/Button";

//styles
import Styles from "./styles/Contact.module.scss";

//assets
import Call from '../../svg/Call'
import Email from '../../svg/Email'
import Location from '../../svg/Location'

function Contact(props) {
  return (
    <div className="container-fluid">
      <Hero>تماس با ما</Hero>

      <section className={Styles["section-margin"]}>

        <div className="container-fluid">
          <div className="row justify-content-center ">
            <div
              className={`${Styles["contact-form"]} col-lg-6 col-md-8 col-sm-11 col-12 d-flex flex-column align-items-center`}
            >
              <h2 className="text-center">ارسال پیام از طریق فرم</h2>
              <div className={Styles["contact-base-form"]}>
                <div className={Styles["form-card"]}>
                  <div>
                    <Input placeholder="نام شما" />
                  </div>
                  <div className="mt-2">
                    <Input placeholder="ایمیل شما" />
                  </div>
                  <div className="mt-2">
                    <Input placeholder="موضوع" />
                  </div>

                  <textarea
                    placeholder="پیام"
                    rows="4"
                    className="form-control mt-2"
                  ></textarea>

                  <div className="mt-3 text-right">
                    <Button >ارسال</Button>
                  </div>

                </div>
              </div>
            </div>
            <div
              className={`${Styles.address} col-lg-6 col-md-6 col-10 mt-5 mt-lg-0 d-flex flex-column justify-content-center`}
            >
              <div className="d-flex  align-items-center">
                <Location />
                <h2 className=" pr-2">آدرس</h2>
              </div>

              <p>
                تهران، میدان توحید، خیابان پرچم، بین رودکی و خوش، کوچه نیکوئی،
                پلاک ۳ شعبه گیلان: رشت، بلوار شهید انصاری، خیابان ارشاد، میدان
                باب الحوائج، ساختمان سبحان
              </p>

              <div className="d-flex  align-items-center">
                <Call />
                <h2 className=" pr-2"> تلفن</h2>
              </div>

              <p className="font-weight-bolder">
                <a href="tel:021-1414">021-1414</a>
              </p>
              <div className="d-flex align-items-center ">
                <Email />
                <h2 className=" pr-2">ایمیل</h2>
              </div>

              <p className="font-weight-bolder">
                <a href="mailto:info@angell.com">info@angell.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
