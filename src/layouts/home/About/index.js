import React from 'react'

//styles
import Styles from './styles/About.module.scss'

function About(props) {
    return (
        <section className={Styles['section-margin']}>
    <div className="container mb-5">
      <div className="row justify-content-center align items-center">
      <div className="col-lg-6 col-md-12 col-11">
          <div className={Styles.description}>
            <h2 className="text-right">ما چیکار میکنیم</h2>
            <p
              >همه ما در کودکی آرزوهایی را در سر می پروراندیم که هرگز نتوانستیم
              به آن ها برسیم. امروز خیلی از ما قدرت آن را داریم که آن آرزو ها را
              بار ها برآورده کنیم. کودکان بی سرپرست نیز آرزوهای زیادی در سر
              دارند که ما می توانیم پلی برای رسیدن آن ها به آرزوهایشان باشیم. در
              موسسه خیریه نیکوکاران فرشته تعداد زیادی از این کودکان بی سرپرست و
              یتیم هستند که آرزوهای کوچکشان برای آن ها دست نیافتنی ترین
              آرزوهاست. آرزوهای قشنگ کودکی تان را برای ما بنویسید و آرزوهای
              کودکان بی سرپرست را ببینید. اگر دوست داشته باشید میتوانید آرزوی هر
              کدام از این کودکان را به دلخواه خودتان برآورده کنید.</p
            >
          </div>
        </div>
        <div className="col-lg-6 col-md-8 col-11 mt-4 mt-lg-0">
    
            <img
              src="https://opencollective.com/static/images/home/makecommunity-section-illustration.png"
              className="img-fluid"
              alt=""
            />
          
        </div>
      
      </div>
    </div>
  </section>
    )
}



export default About

