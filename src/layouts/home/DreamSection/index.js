import React from 'react'

//styles
import Styles from './styles/DreamSection.module.scss'

function DreamSection(props) {
    return (
        <section className={Styles['sec-dream']}>
        <div className="row justify-content-center">
          <div className={`${Styles['sec-title']} col-10 col-lg-6 text-center m-auto`}>
            <h2>
              لیست آرزوهای بچه ها رو ببین و هر کدوم رو خواستی برآورده کن
            </h2>
          </div>
        </div>
    
        <div className="container-fluid mt-5">
          <div className="row justify-content-center no-gutters">
            <div
              className="col-lg-4 col-md-6 col-sm-7 col-xs-9 col-11 d-flex justify-content-lg-end justify-content-center"
            >
              {/* <sellignCart /> */}
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-7 col-xs-9 col-11 d-flex justify-content-lg-center justify-content-center"
            >
              {/* <sellignCart /> */}
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-7 col-xs-9 col-11 d-flex justify-content-lg-start justify-content-center"
            >
              {/* <sellignCart /> */}
            </div>
          </div>
        </div>
      </section>
    )
}



export default DreamSection
