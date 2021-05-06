import React from 'react'
import { useGlobalContext } from '../../../state/context'
import Slider from "react-slick";


import { Link } from 'react-router-dom'

//components
import ProductCart from '../../../components/Product'

//styles
import Styles from './styles/DreamSection.module.scss'
import { Row } from 'react-bootstrap'



function DreamSection(props) {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear"
,
initialSlide: 0,
    responsive: [
      {
        breakpoint: 1202,
        settings: {
          slidesToShow:2.5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow:2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow:1.7,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 674,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 572,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 472,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1
        },
        
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 0.8,
          slidesToScroll: 1
        },
        
      }
    ]
  };
  const { dreams } = useGlobalContext()

 

  return (
    <section className={Styles['sec-dream']}>
      <Row className="justify-content-center">
        <div className={`${Styles['sec-title']} col-10 col-lg-6 text-center m-auto`}>
          <h2>
            لیست آرزوهای بچه ها رو ببین و هر کدوم رو خواستی برآورده کن
            </h2>
        </div>
      </Row>

          <Slider  {...settings}
      >
        {
          dreams.length> 0 && dreams.map((product)=> <ProductCart {...product} key={product.id}>
          {product.dream}
        </ProductCart> )
        }
    
          </Slider>
     
          


     

      <div className={`text-center w-100 mt-5 ${Styles.more}`}>
        <Link to="/explore">موارد بیشتر</Link>
      </div>

    </section>
  )
}



export default DreamSection
