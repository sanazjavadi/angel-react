import React from 'react'
import { useGlobalContext } from '../../../state/context'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import useWindowSize from '../../../service/hooks/useWindowSize'

//components
import ProductCart from '../../../components/Product'

//styles
import Styles from './styles/DreamSection.module.scss'
import { Container, Row } from 'react-bootstrap'
import 'swiper/swiper.scss';


function DreamSection(props) {
  const size = useWindowSize();
  const { dreams } = useGlobalContext()
  SwiperCore.use([Navigation]);


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
          <Swiper
            spaceBetween={10}
            slidesPerView={size > 600 ? 3 : 1}
            style={{ marginRight: '30px' }}
            navigation 
          >
            {
              dreams.map(product =>
                <SwiperSlide>

                  <ProductCart {...product} key={product.id}>
                    {product.dream}
                  </ProductCart>

                </SwiperSlide>


              )
            }
      ...
    </Swiper>


        </Row>
      </Container>
    </section>
  )
}



export default DreamSection
