//components
import Input from "../../../components/Input";
import Button from "../../../components/Button";

//styles
import Styles from "./styles/Signin.module.scss";

function Index({changeHandler}) {
  return (
    <section className="mt-5 pt-5 pb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-10 col-sm-11 col-12">
            <div className={Styles["form-card"]}>
              <h3 className="text-right"> ورود</h3>

              <div className="mb-3">
                <Input placeholder=" شماره موبایل"/>
              </div>
              <div className="mb-3">
                <Input placeholder="کلمه عبور" type="password"/>
              </div>

              <Button className="mb-3" size="block">
                ورود
              </Button>
              <div className={`${Styles["footer-form"]} text-center mt-3`}>
                هنوز عضو نشدی؟
                <span className="font-weight-bolder mr-1" onClick={()=> changeHandler('signUpComponent')}>ثبت نام</span>
                <p className={Styles.forgotText} onClick={()=> changeHandler('forgotComponent')}> بازیابی کلمه عبور</p>
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
