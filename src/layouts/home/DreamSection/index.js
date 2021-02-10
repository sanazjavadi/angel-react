import React, { useContext, useState } from 'react'
import { AppContext } from '../../../context/context'

//components
import ProductCart from '../../../components/Product'

//styles
import Styles from './styles/DreamSection.module.scss'

//assets
import NextSvg from '../../../svg/Next'
import BackSvg from '../../../svg/Back'

function DreamSection(props) {

  const { products } = useContext(AppContext)
  const [Index, setIndex] = useState({prev:0, next:3})
  const lastProduct = products.splice(0,Index.next)
  
  const priviesImage= () => {
    if(Index < 0){
      setIndex(products.lenght - 1)
    }
    else{
      setIndex(Index - 1)
    }
    
  }
  
  const nextImage = () => {
    if(Index > products.length -1 )
    {
      setIndex(0)
    }
    else{
      setIndex(Index + 1)
    }
    
  }

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
        <div className="row justify-content-center">
          {
            lastProduct.map(product =>
              <div
                className="col-lg-4 col-md-6 col-sm-7 col-xs-9 col-11 d-flex  justify-content-center"
              >
                <ProductCart name={product.name} img={product.image}>
                  {product.dream}
                </ProductCart>
              </div>
            )
          }

          <div className={`d-flex ${Styles.sliderBtn}`}>
            <NextSvg className="ml-3" onClick={priviesImage}/>
            <BackSvg className="mr-3" onClick={nextImage} />

          </div>

        </div>
      </div>
    </section>
  )
}



export default DreamSection
