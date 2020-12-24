import React from 'react'

//components
import Styles from "./styles/TimeLine.module.scss";

//assets
import Timeline1 from '../../../svg/Timeline1'
import Timeline2 from '../../../svg/Timeline2'
import Timeline3 from '../../../svg/Timeline3'
import Timeline4 from '../../../svg/Timeline4'

function TimeLine(props) {
    return (
        <section className={Styles['section-margin']}>
    <div className="container">
      <h2 className={Styles['about-timeline-title']}>چجوری آرزویی رو برآورده کنیم؟</h2>
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12">
          <ol>
            <li className={Styles['how-it-works-step']}>
              <figure className={Styles['how-it-works-step-graphic']}><Timeline1 /> </figure>
              <div className={Styles['how-it-works-step-content']}>
                <span> ۱- لیست آرزوها</span>
                <p
                  >اول از همه لیست بچه هایی که نیاز به کمک دارن رو ببین و هر
                  کدوم رو که دوست داری انتخاب کن
                </p>
              </div>
            </li>
            <li className={Styles['how-it-works-step']}>
              <figure className={Styles['how-it-works-step-graphic']}><Timeline2 /> </figure>
              <div className={Styles['how-it-works-step-content']}>
                <span>۲- ثبت نام</span>
                <p
                  >اگه تو سایتمون ثبت نام نکردی تو صفحه اصلی رو دکمه ثبت نام
                  کلیک کن و یه اکانت واسه خودت بساز</p
                >
              </div>
            </li>
            <li className={Styles['how-it-works-step']}>
              <figure className={Styles['how-it-works-step-graphic']}><Timeline3 /> </figure>
              <div className={Styles['how-it-works-step-content']}>
                <span>۳- برآورده کردن آرزو</span>
                <p
                  >بعد از این که آرزویی که می تونستی برآوزده کنی و انتخاب کردی
                  به درگاه وصل میشی و هزینه اون آرزو رو پرداخت میکین</p
                >
              </div>
            </li>
            <li className={Styles['how-it-works-step']}>
              <figure className={Styles['how-it-works-step-graphic']}><Timeline4  /> </figure>
              <div className={Styles['how-it-works-step-content']}>
                <span>
                  ۴- چجوری میتونی به ما اعتماد کنی؟
                </span>
                <p>
                  از طریق نماد الکترونیکی که تو سایت هست و مهینطور از طریق لینک
                  زیر می تونی بخونی که روند کار چجوریه
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
    )
}



export default TimeLine
