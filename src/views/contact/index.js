import React from "react";
import { Formik } from 'formik';

//components
import Hero from "../../layouts/common/Hero";
import Input from "../../components/Input";
import Button from "../../components/Button";
import TextArea from '../../components/TextArea'

//styles
import Styles from "./styles/Contact.module.scss";
import {Container, Row, Col} from 'react-bootstrap'

//assets
import Call from '../../svg/Call'
import Email from '../../svg/Email'
import Location from '../../svg/Location'

function Contact(props) {

  return (
    <div className="container-fluid">
      <Hero>تماس با ما</Hero>

      <section className={Styles["section-margin"]}>

        <Container fluid>
          <Row className="justify-content-center ">
            <Col lg={6} md={6} sm={11} xs={12}
              className={`${Styles["contact-form"]}  d-flex flex-column align-items-center`}
            >
              <h4 className="text-right mb-lg-4 mb-3 pb-0">ارسال پیام از طریق فرم</h4>
              <Formik
                initialValues={{ name: '', email: '', subject: '', msg: '' }}
                validate={values => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = 'آدرس ایمیل را وارد کنید';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'آدرس ایمیل نامعتبر میباشد';
                  }
                  else if (!values.name) {
                    errors.name = 'نام خود را وارد کنید'
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit} className={Styles["contact-base-form"]}>
                    <div className={Styles["form-card"]}>
                      <div>
                        <Input placeholder="نام شما" value={values.name} name="name"
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          error={errors.name && touched.name && errors.name}
                        />
                      </div>
                      <div className="mt-2">
                        <Input placeholder="ایمیل شما" value={values.email} name="email"
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          error={errors.email && touched.email && errors.email}
                        />
                      </div>
                      <div className="mt-2">
                        <Input placeholder="موضوع" value={values.subject} name="subject" handleChange={handleChange} handleBlur={handleBlur} />
                      </div>

                      <div className="mt-2">
                        <TextArea placeholder="پیام"
                          alue={values.msg} name="msg"
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          rows="4" />
                      </div>


                      <div className="mt-3 text-right">
                        <Button type="submit" disabled={isSubmitting}>ارسال</Button>
                      </div>

                    </div>
                  </form>
                )}
              </Formik>

            </Col>
            <Col
            lg={6} md={6} xs={10}
              className={`${Styles.address} d-flex flex-column justify-content-center mt-5 mt-sm-0`}
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
            </Col>
          </Row>
        </Container>

      </section>
    </div>
  );
}

export default Contact;
