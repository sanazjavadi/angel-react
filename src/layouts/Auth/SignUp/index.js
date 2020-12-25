//components
import Input from "../../../components/Input";
import Button from "../../../components/Button";

//styles
import Styles from "./styles/SignUp.module.scss";

function Index(props) {
  return (
    <section className="mt-5 ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8 col-sm-10 col-12">
            <div className={Styles["form-card"]}>
              <h3 className="text-right">عضویت</h3>

              <div className="mb-2">
                <Input placeholder="نام" />
              </div>
              <div className="mb-2">
                <Input placeholder="نام خانوادگی" />
              </div>
              <div className="mb-2">
                <Input placeholder=" شماره موبایل" />
              </div>

              <div className="mb-2">
                <Input placeholder="آدرس ایمیل" />
              </div>

              <div className="mb-2">
                <Input placeholder="کلمه عبور" />
              </div>

              <Button className="mb-3" size="block">
                ایجاد حساب کاربری
              </Button>

              <div className={`${Styles["footer-form"]} text-center mt-2`}>
                قبلا عضو شدی؟
                <span className="font-weight-bolder">ورود</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3 pb-2">
          <div className="col-lg-3 col-md-4 col-sm-5 col-6 d-flex justify-content-around">
            <div className={Styles["social-login"]}>
              <img src="https://www.ceviz.io/static/google-logo-3f3dbee38e0e229df60c33e98ae0186d.png" alt=""/>
            </div>
            <div className={Styles["social-login"]}>
              <img
                src="https://avdivine.co.uk/wp-content/uploads/2019/12/facebook-new.png"
                alt=""
              />
            </div>
            <div className={Styles["social-login"]}>
              <img src="https://img.icons8.com/clouds/100/000000/linkedin.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Index.propTypes = {};

export default Index;
