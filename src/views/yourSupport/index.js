import React, { useState } from 'react'

//layouts
import Hero from '../../layouts/common/Hero'
import Organization from '../../layouts/yourSupport/organization'
import Human from '../../layouts/yourSupport/human'


//styles
import styles from './styles/yourSupport.module.scss'
import { Tabs, Tab } from 'react-bootstrap'



function YourSupport(props) {

    const[key, setKey] = useState('human')
    return (
        <div className="container-fluid">
            <Hero>
                حمایت شما        </Hero>
            <section className={styles['section-margin']}>
                <Tabs activeKey={key} onSelect={(k) => setKey(k)} defaultActiveKey="human" id="uncontrolled-tab-example" bsPrefix={styles['custom-tab']}>
                  
                    <Tab  eventKey="human" title="به عنوان فرد" style={{'width':' 65%'}}  className="mx-auto p-3">
                       <Human/>
                     </Tab>
                     <Tab eventKey="org" title="به عنوان سازمان" style={{'width':' 65%'}}  className="mx-auto p-3" >
                    <Organization/>
                        </Tab>
                </Tabs>
            </section>
        </div>
    )
}


export default YourSupport