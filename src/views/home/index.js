import React from 'react'

//components
import Banner from '../../layouts/home/Banner'
import About from '../../layouts/home/About'
import  Welcome from "../../layouts/home/Welcome";
import DreamSection from '../../layouts/home/DreamSection'
import CountUp from '../../layouts/home/CountUpSection'
import Help from '../../layouts/home/Help'

//styles
import {Container} from 'react-bootstrap'


function Home(props) {
    return (
      <Container fluid className="px-0">
          <Banner/>
          <About />
          <Welcome />
          <DreamSection />
          <CountUp />
          <Help />
      </Container>
    )
}


export default Home
