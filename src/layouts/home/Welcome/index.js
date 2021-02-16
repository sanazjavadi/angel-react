import React from 'react'
import { useHistory } from 'react-router-dom'

//components
import BaseButton from '../../../components/Button'

//styles
import Styles from './styles/Welcome.module.scss'

//assets
import Gift from '../../../svg/Gift'
import Home from '../../../svg/Home'

function Welcome(props) {
  const history = useHistory()
    return (
        <section className={`${Styles['section-margin']} text-center`}>
        <div className="container px-0">
          <h2 className={`${Styles.title} text-center`}> حمایت شما </h2>
          <div className="row align-items-stretch">
            <div
              className={`col-12 col-md-6 col-sm-10 col-lg-6 ${Styles['home-support__col']}  m-auto`}
            >
              <div className={`${Styles['support-img']} pb-5`}>
         <Gift/>
              </div>
    
              <h4 className={`${Styles['support-title']} mb-3`}>
                به عنوان یک فرد
              </h4>
              <p className={`${Styles['support-text']}`}>
                شما عزیزان می‌توانید کمک‌های نقدی خود را از طریق پرداخت آنلاین در
                لینک و یا حساب کمپین فرشته در بانک ملت به شماره اهدا کنید.
              </p>
              <div className="row after">
                <div className="col">
             
                  <BaseButton theme="darkbtn"  handleClick={()=> history.push('/your-support')}>
                    اطلاعات بیشتر
                  </BaseButton>
                 
                  
                </div>
              </div>
            </div>
            <div
              className={`col-12 col-md-6 col-sm-10 col-lg-6 ${Styles['home-support__col']}  m-auto`}
            >
              <div className={`${Styles['support-img']} pb-5`}>
                <Home/>
              </div>
    
              <h4 className={`${Styles['support-title']} mb-3`}>
                به عنوان یک سازمان
              </h4>
              <p className={`${Styles['support-text']}`}>
                شما عزیزان می‌توانید کمک‌های نقدی خود را از طریق پرداخت آنلاین در
                لینک و یا حساب کمپین فرشته در بانک ملت به شماره اهدا کنید.
              </p>
              <div className="row">
                <div className="col">
                  <BaseButton theme="darkbtn" handleClick={()=> history.push('/your-support')}>
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
