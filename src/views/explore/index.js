import React, { useEffect, useState, useRef } from 'react'
import { useGlobalContext } from '../../state/context'

//components
import Hero from '../../layouts/common/Hero'
import ProductCart from '../../components/Product'
import Input from '../../components/Input'

//styles
import Styles from './styles/Explore.module.scss'



function Explore(props) {

  const { dreams } = useGlobalContext();
  // const [size, setSize] = useState(9)

  // // add loader refrence 
  // const loader = useRef(null);

  // useEffect(() => {
  //   var options = {
  //     root: null,
  //     rootMargin: "20px",
  //     threshold: 1.0
  //   };
  //   // initialize IntersectionObserver
  //   // and attaching to Load More div
  //   const observer = new IntersectionObserver(handleObserver, options);
  //   if (loader.current) {
  //     observer.observe(loader.current)
  //     console.log(observer.observe(loader.current))
  //   }

  // }, []);

  // useEffect(() => {
  //   fetchDreams(0, size)
  // }, [size])
  // // here we handle what happens when user scrolls to Load More div
  // // in this case we just update page variable
  // const handleObserver = (entities) => {
  //   const target = entities[0];
  //   if (target.isIntersecting) {
  //     setSize((previd) => previd + 9)
  //     console.log(size)
  //   }
  // }

  return (
    <div className="container-fluid">
      <Hero>
        گشت و گذار
        <div className="w-25 mx-auto">
          <Input placeholder="جستجو کن" />
        </div>

      </Hero>

      <section className={Styles['section-margin']}>
        <div className="row justify-content-center">
          {
            dreams.map((dream) => <div
              className="col-lg-4 col-md-6 col-sm-7 col-xs-9 col-11 d-flex  justify-content-center"
            >

              <ProductCart {...dream} key={dream.id}>

              </ProductCart>
            </div>)

          }
          {/* <div className="loading" ref={loader}>
            <h2>Load More</h2>
          </div> */}
        </div>
      </section>
    </div>
  )
}


export default Explore