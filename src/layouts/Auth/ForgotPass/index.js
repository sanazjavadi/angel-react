//components
import Input from "../../../components/Input";
import Button from "../../../components/Button";

//styles
import Styles from "./styles/ForgotPass.module.scss";
function Index({ changeHandler }) {
  return (
    <section className="mt-5 pt-5 pb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-10 col-sm-11 col-12">
            <div className={Styles["form-card"]}>
              <h3 className="text-right"> بازیابی کلمه عبور</h3>

              <div className="mb-3">
                <Input placeholder="ایمیل" type="email" />
              </div>

              <Button className="mb-3" size="block">
                بازیابی کلمه عبور
              </Button>
              <div className={`${Styles["footer-form"]} text-center mt-3`}>
                <p
                  className={Styles.forgotText}
                  onClick={() => changeHandler("signInComponent")}
                >
                  {" "}
                  ورود به حساب کاربری
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Index.propTypes = {};

export default Index;
