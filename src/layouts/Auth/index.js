import React, { useState } from 'react';

//components
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgotPass from "./ForgotPass";
import Privacy from "./Privacy";


const Pages = {
  signUpComponent: SignUp,
  signInComponent: SignIn,
  forgotComponent: ForgotPass,
  privacyComponent: Privacy,
}



function Index({ status, changeStatus }) {
  const [CurrentPage, setcurrentPage] = useState('signUpComponent')

  const Comp = Pages[CurrentPage]
  const changePage = component => {
    setcurrentPage(component)
  }
  return (
 
      <Comp changeHandler={changePage} />
   
  );
} 

export default Index;
