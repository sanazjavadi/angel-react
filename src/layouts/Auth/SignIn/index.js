//components
import Input from "../../../components/Input";
import Button from "../../../components/Button";

function Index(props) {
  return (
    <section className="mt-5 pt-5 pb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-10 col-sm-11 col-12">
            ورود
            <Input placeholder=" شماره موبایل" className="mb-2" />
            <Input placeholder="کلمه عبور" className="mb-2" />
            <Button className="mb-3" size="block">
              ورود
            </Button>
            <div className="footer-form text-center">
              هنوز عضو نشدی؟
              <span className="font-weight-bolder">ثبت نام</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Index.propTypes = {};

export default Index;
