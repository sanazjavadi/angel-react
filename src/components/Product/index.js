import React, { useState } from "react";
import { Link } from "react-router-dom";

//components
import Modal from '../Modal'
import PayProduct from '../../layouts/PayProduct'
import Progress from '../../components/progress'
import Button from '../Button'

//styles
import Styles from './styles/Product.module.scss'

//assets
import QuoteIcon from '../../svg/RightQuotationMark'

function DreamCart(props) {
   const { name, image, children} = props
   const [modal, setModal]= useState(false)
  const openPayModal = ()=> {
  setModal(true)
  }
  return (
    <>
    <div className={`${Styles['dream-block']}`}>
      <div className="px-4 pt-3 text-right">
        <QuoteIcon className={`${Styles['qoute-svg']}`} />
      </div>
 
      <blockquote className={`px-4 py-2 text-right text-bold`}>
        {children}
      </blockquote>
      <div className="mb-3 px-5">
      <Progress percantage="70%" allprice={500} payPrice={250}/>
      </div>
     
      <div className={`${Styles['lower-content']} py-3 px-3 d-flex align-items-center justify-content-between w-100`}>
        <div className="d-flex align-items-center">
          <div className={Styles["avatar"]}>
            <img
              src={image}
              alt=""
            />
          </div>
          <h4 className="pr-2 pb-0 mb-0">

            <Link to="/"> آرزوی {name} کوچولو</Link>
          </h4>
        </div>
   <Button theme="minimalBtn" handleClick={openPayModal} size="sm">
     حمایت میکنم
   </Button>
       

      </div>
    </div>
<Modal status={modal} changeStatus={()=> setModal(false)}>

<PayProduct {...props}/>
</Modal>
    </>
  );
}

export default DreamCart;
