import React from 'react'

//layouts
import Hero from '../../layouts/common/Hero'
import TimeLine from '../../layouts/about/TimeLine'
import Golas from '../../layouts/about/Gloas'

//layouts
import QA from '../../layouts/about/QA'

function About(props) {
    return (
     
            <div className="container-fluid">
                <Hero>
                    درباره ما
                </Hero>
                <QA/>
                <Golas/>
                <TimeLine />
            </div>
       
    )
}


export default About
