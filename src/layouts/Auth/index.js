import React, {useState} from 'react';

//components
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgotPass from "./ForgotPass";
import Privacy from "./Privacy";

//styles
import { Modal } from "react-bootstrap";
import Styles from "./styles/Modal.module.scss";

const Pages = {  
    signUpComponent:SignUp ,
    signInComponent: SignIn,
    forgotComponent: ForgotPass,
    privacyComponent: Privacy,
}
 


function Index({ status, changeStatus }) {
    const [CurrentPage, setcurrentPage] = useState('signUpComponent')
   
    const Comp = Pages[CurrentPage]
    const changePage = component=> {
        setcurrentPage(component)
      }
  return (
    <Modal
      show={status}
      onHide={changeStatus}
      dialogClassName={Styles["_modal"]}
      bsPrefix={Styles["_modal"]}
    >
      <div className={`${Styles["close-button"]} mt-2 mr-2`} onClick={changeStatus}>
          <span>
          x
          </span>
          </div>

   <Comp  changeHandler={changePage}/>
    </Modal>
  );
}

export default Index;
