import React, { useEffect, useState, useRef } from 'react'
import { useGlobalContext } from '../../state/context'
import {dreams0to9,dream0tos18} from '../../constans/data'

//components
import Hero from '../../layouts/common/Hero'
import ProductCart from '../../components/Product'
import Input from '../../components/Input'

//styles
import Styles from './styles/Explore.module.scss'



function Explore(props) {

  const { dreams, fetchDreams } = useGlobalContext();
  const [id, setId] = useState({ from: 0, to: 50 })
  const [Index, setIndex] = useState({prev:0, next:9})
  const [lastDreams, setLastDreams] = useState(dreams0to9)


  // useEffect(() => {
  //   fetchDreams(id.from, id.to)
  // }, [])


  // add loader refrence 
  const loader = useRef(null);

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };
    // initialize IntersectionObserver
    // and attaching to Load More div
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current)
    }

  }, []);
  useEffect(() => {
    setLastDreams(dream0tos18)
}, [Index])

  // here we handle what happens when user scrolls to Load More div
  // in this case we just update page variable
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setId({...id, to :id.to + 50 })
      setIndex({...Index, next:Index.next + 9})
    }
  }

  return (
    <div className="container-fluid">
      <Hero>
        گشت و گذار
        <div className="w-25 mx-auto">
        <Input placeholder="جستجو کن"/>
        </div>
      
        </Hero>

      <section className={Styles['section-margin']}>
        <div className="row justify-content-center">

          {
            lastDreams.map((product) => <div
              className="col-lg-4 col-md-6 col-sm-7 col-xs-9 col-11 d-flex  justify-content-center"
            >
              <ProductCart {...product} key={product.id}>
                {product.dream}
              </ProductCart>
            </div>)

          }
          <div className="loading" ref={loader}>
            <h2>Load More</h2>
          </div>
        </div>
      </section>
    </div>
  )
}


export default Explore