import React, { useContext } from 'react'
import { AppContext } from '../../context/context'


//components
import Hero from '../../layouts/common/Hero'
import ProductCart from '../../components/Product'

//styles
import Styles from './styles/Explore.module.scss'



function Explore(props) {

  const { products } = useContext(AppContext)
  return (
    <div className="container-fluid">
      <Hero>
        گشت و گذار
        </Hero>

      <section className={Styles['section-margin']}>
        <div className="row justify-content-center">
          {
            products.map((product) => <div
              className="col-lg-4 col-md-6 col-sm-7 col-xs-9 col-11 d-flex  justify-content-center"
            >
              <ProductCart {...product} key={product.id}>
                {product.dream}
              </ProductCart>
            </div>)

          }

        </div>
      </section>
    </div>
  )
}


export default Explore