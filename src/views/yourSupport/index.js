import React from 'react'

//components
import Hero from '../../layouts/common/Hero'
import Organization from '../../layouts/yourSupport/organization'

//styles
import styles from './styles/yourSupport.module.scss'
import { Tabs, Tab } from 'react-bootstrap'



function YourSupport(props) {
    return (
        <div className="container-fluid">
            <Hero>
                حمایت شما        </Hero>
            <section className={styles['section-margin']}>
                <Tabs defaultActiveKey="org" id="uncontrolled-tab-example" bsPrefix={styles['custom-tab']}>
                    <Tab eventKey="org" title="سازمان" style={{'width':' 65%'}}  className="mx-auto p-3" >
                    <Organization/>
                        </Tab>
                    <Tab eventKey="human" title="فرد" style={{'width':' 65%'}}  className="mx-auto p-3">
                        gggggggggg
                     </Tab>

                </Tabs>
            </section>
        </div>
    )
}


export default YourSupport