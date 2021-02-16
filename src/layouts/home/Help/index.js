import React from 'react'

//styles
import Styles from './styles/Help.module.scss'

//components
import BaseButton from '../../../components/Button'

function Help(props) {
    return (
        <section className={Styles['margin-section']}>
        <div className="container">
          <div className="row align-items-stretch">
            <div className="col-12  d-flex justify-content-center">
              <img
                src="https://opencollective.com/static/images/home/weareopen-illustration-md.png"
                alt=""
                className="img-fluid mb-4"
                width="200"
              />
            </div>
          </div>
    
          <h2 className={`${Styles['support-title']} text-center`}>سوالی دارین ؟</h2>
          <div className="row align-items-stretch ">
            <div
              className="col-12 col-md-6 d-flex justify-content-lg-end justify-content-center mb-3"
            >
              <BaseButton>
                تماس با ما
              </BaseButton>
            </div>
            <div
              className="col-12 col-md-6 d-flex justify-content-lg-start justify-content-center mb-3"
            >
              <BaseButton theme="lightbtn"> سوال های متداول </BaseButton>
            </div>
          </div>
        </div>
      </section>
    )
}



export default Help
