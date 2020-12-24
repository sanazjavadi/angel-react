import React from 'react'

//components
import Banner from '../../layouts/home/Banner'
import About from '../../layouts/home/About'
import  Welcome from "../../layouts/home/Welcome";
import DreamSection from '../../layouts/home/DreamSection'
import CountUp from '../../layouts/home/CountUpSection'
import Help from '../../layouts/home/Help'

function Home(props) {
    return (
      <div className="container-fluid">
          <Banner/>
          <About />
          <Welcome />
          <DreamSection />
          <CountUp />
          <Help />
      </div>
    )
}


export default Home
