import React from 'react'

//styles
import styles from './styles/dashboard.module.scss'
import { Row, Container, Col } from 'react-bootstrap'

//assets
import Logo from '../svg/Logo'

export default function Dashboard(props) {


    return (
        <div className={styles.dashboard}>
            <header className="w-100 py-3 px-5 d-flex justify-content-between">
                <div className={`d-flex align-items-center justify-content-center ${styles.avatar}`}>

                    <img src="https://www.flaticon.com/svg/vstatic/svg/2919/2919906.svg?token=exp=1613062009~hmac=c45fa02f3bb58a44ebaeccc59e21c04a" alt="" />


                    <span className="mr-2">
                        name
                     </span>
                </div>
                <Logo height="40" width="40" />


            </header>

            <Container className="pt-5">
                <Row>
                    <Col lg={3} className="d-flex flex-column align-items-start text-right mt-5">
                        <ul className={styles.nav}>
                            <li className="py-2 pr-3 pl-5">داشبورد</li>
                            <li className="py-2 pr-3 pl-5"> حمایت ها</li>
                            <li className="py-2 pr-3 pl-5"> اضافه کردن آرزو</li>
                            <li className="py-2 pr-3 pl-5">تنظیمات</li>
                        </ul>
                    </Col>
                    <Col lg={8}>

                        <h3 className="title text-right"> داشبورد </h3>
                        <div className={`d-flex justify-content-between ${styles['dreams-status']}`}>
                            <div> ۲۱ آرزو</div>
                            <div> ۱۰ آرزوی برآورده شده</div>
                            <div> ۵ آرزوی برآورده نشده</div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
