import React, {useEffect, useState, useRef} from 'react'
import { useGlobalContext } from '../../state/context'
// import {Dreams} from '../../constans/data'

//components
import Hero from '../../layouts/common/Hero'
import ProductCart from '../../components/Product'
import Input from '../../components/Input'

//styles
import Styles from './styles/Explore.module.scss'
import {Container, Row, Col} from 'react-bootstrap'

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
    <Container fluid>
      <Hero>
        گشت و گذار
        <div className="w-25 mx-auto">
          <Input placeholder="جستجو کن" />
        </div>

      </Hero>

      <section className={Styles['section-margin']}>
        <Row className="justify-content-center">
          {
            dreamLists.map((dream) => <Col
            lg={4} md={6} sm={9} xs={12}
              className="d-flex justify-content-center"
            >

              <ProductCart {...dream} key={dream.id}>
                     {dream.dream}
              </ProductCart>
            </Col>)

          }
          <div className="loading" ref={loader}>
           <Loading/>
          </div>
        </Row>
      </section>
    </Container>
  )
}


export default Explore