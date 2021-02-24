import React, {useEffect, useState, useRef} from 'react'
import { useGlobalContext } from '../../state/context'
// import {Dreams} from '../../constans/data'

//components
import Hero from '../../layouts/common/Hero'
import ProductCart from '../../components/Product'
import Input from '../../components/Input'

//styles
import Styles from './styles/Explore.module.scss'

//assets
import Loading from '../../svg/Loading'


function Explore(props) {

  const { dreams, fetchDreams } = useGlobalContext();
  const [dreamLists, setDreamLists] = useState([])
  const [size, setSize] = useState(9)
  const [page, setPage] = useState(0)
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
    fetchDreams(page, size)
    setDreamLists([...dreamLists, ...dreams])
  }, [size, page])
  // here we handle what happens when user scrolls to Load More div
  // in this case we just update page variable
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setSize((prevState) => prevState + 9)
      setPage((prevState) => prevState + 1)
    }
  }

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
            dreamLists.map((dream) => <div
              className="col-lg-4 col-md-6 col-sm-7 col-xs-9 col-11 d-flex  justify-content-center"
            >

              <ProductCart {...dream} key={dream.id}>
                     {dream.dream}
              </ProductCart>
            </div>)

          }
          <div className="loading" ref={loader}>
           <Loading/>
          </div>
        </div>
      </section>
    </div>
  )
}


export default Explore