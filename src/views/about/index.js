import React from 'react'

//components
import Hero from '../../layouts/common/Hero'
import TimeLine from '../../layouts/about/TimeLine'

function About(props) {
    return (
     
            <div className="container-fluid">
                <Hero>
                    درباره ما
                </Hero>
                <TimeLine />
            </div>
       
    )
}


export default About
