import React from 'react'
import {useHistory} from 'react-router-dom'

//components
import BaseButton from '../../../components/Button'

//styles
import Styles from './styles/Help.module.scss'
import {Container, Row, Col} from 'react-bootstrap'


function Help(props) {
  const history = useHistory()
    return (
        <section className={Styles['margin-section']}>
        <Container>
          <Row className="align-items-stretch">
            <Col xs={12} className="d-flex justify-content-center">
              <div className={Styles.questionImg}>
              <img srcset="https://opencollective.com/static/images/home/weareopen-illustration-md.png" className="img-fluid" alt="" />
              </div>
    
  
             
            </Col>
          </Row>
    
          <h2 className={`${Styles['support-title']} text-center`}>سوالی دارین ؟</h2>
          <Row className="align-items-stretch ">
            <Col lg={6} md={6} xs={12} sm={6}
              className="d-flex justify-content-lg-end justify-content-center mb-3"
            >
              <BaseButton  handleClick={()=> history.push('/contact')}>
                تماس با ما
              </BaseButton>
            </Col>
            <Col lg={6} xs={12} md={6} sm={6}
              className="d-flex justify-content-lg-start justify-content-center mb-3"
            >
              <BaseButton theme="lightbtn" handleClick={()=> history.push('/contact')}> سوال های متداول </BaseButton>
            </Col>
          </Row>
        </Container>
      </section>
    )
}



export default Help
