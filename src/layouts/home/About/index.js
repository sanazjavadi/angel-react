import React from 'react'

//styles
import Styles from './styles/About.module.scss'

function About(props) {
    return (
        <section className={Styles['section-margin']}>
    <div className="container">
      <div className="row justify-content-center">
      
        <div className="col-lg-6 col-md-12 col-11">
          <div className={`${Styles['img-desc']} d-flex justify-content-center`}>
            <img
              src="https://image.freepik.com/free-vector/businessman-is-standing-stairs-reaching-star-sky-flat-illustration-goals-dreams-business-career-concept-modern-design-flat-style-illustration-isolated_126608-320.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-11">
          <div className={Styles.description}>
            <h2>ما چیکار میکنیم</h2>
            <p
              >همه ما در کودکی آرزوهایی را در سر می پروراندیم که هرگز نتوانستیم
              به آن ها برسیم. امروز خیلی از ما قدرت آن را داریم که آن آرزو ها را
              بار ها برآورده کنیم. کودکان بی سرپرست نیز آرزوهای زیادی در سر
              دارند که ما می توانیم پلی برای رسیدن آن ها به آرزوهایشان باشیم. در
              موسسه خیریه نیکوکاران شریف تعداد زیادی از این کودکان بی سرپرست و
              یتیم هستند که آرزوهای کوچکشان برای آن ها دست نیافتنی ترین
              آرزوهاست. آرزوهای قشنگ کودکی تان را برای ما بنویسید و آرزوهای
              کودکان بی سرپرست را ببینید. اگر دوست داشته باشید میتوانید آرزوی هر
              کدام از این کودکان را به دلخواه خودتان برآورده کنید.</p
            >
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}



export default About

