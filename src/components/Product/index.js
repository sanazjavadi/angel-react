import React from "react";
import { Link } from "react-router-dom";

//components
import Button from "../Button";

//styles
import Styles from './styles/Product.module.scss'

function Index(props) {
  return (
    <div className={`${Styles['dream-block']} p-4`}>
      <div className={Styles["inner-box"]}>
        <div className={Styles["image-box"]}>
          <figure className={Styles["image"]}>
            <Link to="/">
              <blockquote className={Styles["oval-thought-border"]}>
                <div className={Styles["big-bubble"]}></div>
                <div className={Styles["small-bubble"]}></div>
                من اسمم مریمه. من خیلی دوس دارم یه عروسک داشته باشم که باهاش حرف کنم.
              </blockquote>
            </Link>
          </figure>
        </div>
      </div>
      <div className={`${Styles['lower-content']} pb-3`}>
        <div className="d-flex align-items-center pb-2">
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

        <Button size="lg">می خوام به برآوردن این آرزو کمک کنم</Button>
      </div>
    </div>
  );
}

export default Index;
