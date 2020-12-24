import React from 'react'

//components
import BaseButton from '../../../components/Button'

//styles
import Styles from './styles/Welcome.module.scss'

//assets
import Gift from '../../../svg/Gift'
import Home from '../../../svg/Home'

function Welcome(props) {
    return (
        <section className={`${Styles['section-margin']} text-center`}>
        <div className="container">
          <h2 className={`${Styles.title} text-center`}> حمایت شما </h2>
          <div className="row align-items-stretch">
            <div
              className={`col-12 col-md-6 col-sm-10 col-lg-6 ${Styles['home-support__col']}  m-auto`}
            >
              <div className={`${Styles['home-support__col__img']}`}>
                <Gift />
              </div>
    
              <h3 className={`${Styles['home-support__col__title']}`}>
                به عنوان یک فرد
              </h3>
              <p className={`${Styles['home-support__col__text']}`}>
                شما عزیزان می‌توانید کمک‌های نقدی خود را از طریق پرداخت آنلاین در
                لینک و یا حساب کمپین فرشته در بانک ملت به شماره اهدا کنید.
              </p>
              <div className="row after">
                <div className="col">
                  <BaseButton theme="lightbtn">
                    اطلاعات بیشتر
                  </BaseButton>
                </div>
              </div>
            </div>
            <div
              className={`col-12 col-md-6 col-sm-10 col-lg-6 ${Styles['home-support__col']}  m-auto`}
            >
              <div className={`${Styles['home-support__col__img']}`}>
                <Home/>
              </div>
    
              <h3 className={`${Styles['home-support__col__title']}`}>
                به عنوان یک سازمان
              </h3>
              <p className={`${Styles['home-support__col__text']}`}>
                شما عزیزان می‌توانید کمک‌های نقدی خود را از طریق پرداخت آنلاین در
                لینک و یا حساب کمپین فرشته در بانک ملت به شماره اهدا کنید.
              </p>
              <div className="row">
                <div className="col">
                  <BaseButton theme="lightbtn">
                    اطلاعات بیشتر
                  </BaseButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}


export default Welcome
