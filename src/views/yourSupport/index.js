import React, { useState } from 'react'

//layouts
import Hero from '../../layouts/common/Hero'
import Organization from '../../layouts/yourSupport/organization'
import TimeLine from '../../layouts/about/TimeLine'


//styles
import styles from './styles/yourSupport.module.scss'
import { Tabs, Tab } from 'react-bootstrap'



function YourSupport(props) {

    const[key, setKey] = useState('org')
    return (
        <div className="container-fluid">
            <Hero>
                حمایت شما        </Hero>
            <section className={styles['section-margin']}>
                <Tabs activeKey={key} onSelect={(k) => setKey(k)} defaultActiveKey="org" id="uncontrolled-tab-example" bsPrefix={styles['custom-tab']}>
                    <Tab eventKey="org" title="سازمان" style={{'width':' 65%'}}  className="mx-auto p-3" >
                    <Organization/>
                        </Tab>
                    <Tab activeKey={key} onSelect={(k) => setKey(k)} eventKey="human" title="فرد" style={{'width':' 65%'}}  className="mx-auto p-3">
                        <TimeLine/>
                     </Tab>

                </Tabs>
            </section>
        </div>
    )
}


export default YourSupport