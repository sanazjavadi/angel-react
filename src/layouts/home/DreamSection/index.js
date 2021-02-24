import React, {useEffect, useState} from 'react'
import { useGlobalContext } from '../../../state/context'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import useWindowSize from '../../../service/hooks/useWindowSize'
import { Link } from 'react-router-dom'

//components
import ProductCart from '../../../components/Product'

//styles
import Styles from './styles/DreamSection.module.scss'
import { Container, Row } from 'react-bootstrap'
import 'swiper/swiper.scss';


function DreamSection(props) {
  const size = useWindowSize();
  const { dreams } = useGlobalContext()
  SwiperCore.use([Autoplay]);
  const [priview, setpriview] = useState(3)
  useEffect(()=> silderPriview (), [priview] )
  const silderPriview = ()=> {
    if(size> 800) {
     setpriview(  prevState => 3)
    }
    else if(size>600 && size < 800) {
      setpriview( prevState => 2)
    }
    else if(size <600) {
      setpriview(  prevState => 1)
    }
  }
  console.log(priview)
console.log(size)
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
            autoplay={{
              delay: 0,
              disableOnInteraction: true,
              stopOnLastSlide: false,
              waitForTransition: true,

            }}
            data-swiper-autoplay="5000"
            spaceBetween={10}
            slidesPerView={priview}
            style={{ marginRight: '30px', transitionTimingFunction: 'lineaer', transitionDelay: '0', transitionDuration: '5000ms' }}

          >
            {
              dreams.map(product =>
                <SwiperSlide style={{ transitionTimingFunction: 'lineaer', transitionDelay: '0', transitionDuration: '5000ms' }}>

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
      <Container fluid className="mt-5">
        <Row className="justify-content-center">
          <Swiper
            data-swiper-autoplay="5000"
            autoplay={{
              delay: 0,
              disableOnInteraction: true,
              reverseDirection: true,
              stopOnLastSlide: false,
              waitForTransition: true
            }}
            spaceBetween={10}
            s slidesPerView={priview}
            style={{ marginRight: '30px' }}

          >
            {
              dreams.map(product =>
                <SwiperSlide >

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
      <div className={`text-center w-100 mt-4 ${Styles.more}`}>
        <Link to="/explore">موارد بیشتر</Link>
      </div>

    </section>
  )
}



export default DreamSection
