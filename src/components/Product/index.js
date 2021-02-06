import React from "react";
import { Link } from "react-router-dom";

//styles
import Styles from './styles/Product.module.scss'

//assets
import QuoteIcon from '../../svg/RightQuotationMark'
import GIftBoxIcon from '../../svg/GiftBox'

function Index(props) {
  return (
    <div className={`${Styles['dream-block']}`}>
      <div className="px-4 pt-3 text-right">
        <QuoteIcon className={`${Styles['qoute-svg']}`} />
      </div>

      <blockquote className={`${Styles["inner-box"]} px-4 py-2 text-right text-bold`}>

        من اسمم مریمه. من خیلی دوس دارم یه عروسک داشته باشم که باهاش حرف کنم
      </blockquote>
      <div className={`${Styles['lower-content']} py-3 d-flex align-items-center justify-content-between w-100`}>
        <div className="d-flex align-items-center">
          <div className={Styles["avatar"]}>
            <img
              className="img-fluid"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuxKFiDMn0DzHdAc4FZ5U2KzONHwLXtsYmhw&usqp=CAU"
              alt=""
            />
          </div>
          <h4 className="pr-2">

            <Link to="/"> آرزوی بهاره کوچولو</Link>
          </h4>
        </div>

        <GIftBoxIcon className={Styles.giftbox} />

      </div>
    </div>
  );
}

export default Index;
