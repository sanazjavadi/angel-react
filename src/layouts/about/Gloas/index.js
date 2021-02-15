import React from 'react'

//styles
import styles from './styles/goals.module.scss'
import { Container, Row, Col } from 'react-bootstrap'

 function Goals(props) {
    

    return (
        <section className="mt-5">
            <h3 className={styles.title}>اهداف ما</h3>
            <Container fluid className={`${styles['goles-circulate']}`}>
                <Row  className="justify-content-center">
                    <Col lg="12" sm={12} className="mx-auto text-center">
                        <div className={styles['first-goal']}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tYgk3D42D2fuzoHjs9i6-rmS5pCu--ekWQ&usqp=CAU" alt=""/>
                        <h4 className="text-center mt-2">نهادهای آموزشی و پرورش</h4>
                        <p >جذب، آموزش و به‌کارگیری نیروی انسانی جوان، خلاق و باانگیزه، به منظور کادرسازی نهادهای آموزشی و پرورشی</p>
                        </div>
                   
                    </Col>
                    <Col lg="4" md={6} sm={12} className="text-center mt-3">
                        <div className={styles['second-goal']}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp7aJVXfnmdvUvoJzkqGu4wcnKPWt73R0ntw&usqp=CAU" alt=""/>
                        <h4 className="text-center mt-2"> توسعه فعالیت­ ها</h4>
                        <p>راه­ اندازی مدارس و توسعه فعالیت­ ها در سایر مناطق محروم و آسیب­ خیز کشور</p>
                        </div>
                        
                    </Col>
                    <Col lg="4" md={6} sm={12} className="text-center mt-3">
                        <div className={styles['third-goal']}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK4Z2eZXNc1aq0VHbTblgNvYguTVjH-q4tZw&usqp=CAU" alt=""/>
                        <h4 className="text-center mt-2"> توسعه فعالیت­ ها</h4>
                        <p>راه­ اندازی مدارس و توسعه فعالیت­ ها در سایر مناطق محروم و آسیب­ خیز کشور</p>
                        </div>
                    
                    </Col>
                </Row>
            </Container>
            
        </section>
    )
}
export default Goals;