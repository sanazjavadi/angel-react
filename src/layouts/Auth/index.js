//components
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgotPass from "./ForgotPass";
import Privacy from "./Privacy";
//styles
import { Modal } from "react-bootstrap";
import Styles from "./styles/Modal.module.scss";

const authPages = [
  {
    id: 1,
    component: SignIn,
  },
  {
    id: 2,
    component: SignUp,
  },
  {
    id: 3,
    component: ForgotPass,
  },
  {
    id: 4,
    component: Privacy,
  },
];

function Index({ status, changeStatus }) {
  return (
    <Modal
      show={status}
      onHide={changeStatus}
      dialogClassName={Styles["_modal"]}
      bsPrefix={Styles["_modal"]}
    >
      <div className={`${Styles["close-button"]} mt-2 mr-2`} onClick={changeStatus}></div>

      <SignUp />
    </Modal>
  );
}

export default Index;
