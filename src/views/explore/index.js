import React from 'react'

//components
import Hero from '../../layouts/common/Hero'
import ProductCart from '../../components/Product'

//styles
import Styles from './styles/Explore.module.scss'


function Explore(props) {
    return (
        <div className="container-fluid">
        <Hero>
            گشت و گذار
        </Hero>

        <section className={Styles['section-margin']}>
          <div className="row justify-content-center no-gutters">
            <div
              className="col-lg-4 col-md-6 col-sm-7 col-xs-9 col-11 d-flex justify-content-lg-end justify-content-center"
            >
             <ProductCart/>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-7 col-xs-9 col-11 d-flex justify-content-lg-center justify-content-center"
            >
               <ProductCart/>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-7 col-xs-9 col-11 d-flex justify-content-lg-start justify-content-center"
            >
               <ProductCart/>
            </div>
          </div>
          <div className="row justify-content-center no-gutters mt-5">
            <div
              className="col-lg-4 col-md-6 col-sm-7 col-xs-9 col-11 d-flex justify-content-lg-end justify-content-center"
            >
             <ProductCart/>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-7 col-xs-9 col-11 d-flex justify-content-lg-center justify-content-center"
            >
               <ProductCart/>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-7 col-xs-9 col-11 d-flex justify-content-lg-start justify-content-center"
            >
               <ProductCart/>
            </div>
          </div>
        </section>
    </div>
    )
}


export default Explore