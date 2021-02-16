import React, { useContext, useState } from 'react'
import { AppContext } from '../../../context/context'

//components
import ProductCart from '../../../components/Product'

//styles
import Styles from './styles/DreamSection.module.scss'
import{Container, Row, Col} from 'react-bootstrap'

//assets
// import NextSvg from '../../../svg/Next'
// import BackSvg from '../../../svg/Back'

function DreamSection(props) {

  const { products } = useContext(AppContext)
  const [Index] = useState({prev:0, next:3})
  const lastProduct = products.splice(0,Index.next)
  

  return (
    <section className={Styles['sec-dream']}>
      <Row className="justify-content-center">
        <div className={`${Styles['sec-title']} col-10 col-lg-6 text-center m-auto`}>
          <h2>
            لیست آرزوهای بچه ها رو ببین و هر کدوم رو خواستی برآورده کن
            </h2>
        </div>
      </Row>

      <Container fluid className="mt-5">
        <Row className="justify-content-center">
          {
            lastProduct.map(product =>
              <Col lg={4} md={6} sm={7} xs={9}
                className="col-11 d-flex justify-content-center"
              >
                <ProductCart {...product} key={product.id}>
                  {product.dream}
                </ProductCart>
              </Col>
            )
          }

          {/* <div className={`d-flex ${Styles.sliderBtn}`}>
            <NextSvg className="ml-3" onClick={priviesImage}/>
            <BackSvg className="mr-3" onClick={nextImage} />

          </div> */}

        </Row>
      </Container>
    </section>
  )
}



export default DreamSection
