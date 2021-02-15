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
                <div className={`d-flex align-items-center justify-content-center pr-5 ${styles.avatar}`}>

                    <img src="https://www.flaticon.com/svg/vstatic/svg/2919/2919906.svg?token=exp=1613062009~hmac=c45fa02f3bb58a44ebaeccc59e21c04a" alt="" />


                    <span className="mr-2">
                        name
                     </span>
                </div>
                <div className="pl-5">
                    <Logo height="40" width="40" />
                </div>



            </header>

            <Container className="pt-5">
                <Row className="justify-content-center">
                    <Col lg={3} className="d-flex flex-column align-items-start text-right mt-5">
                        <ul className={styles.nav}>
                            <li className="py-2 pr-3 pl-5">داشبورد</li>
                            <li className="py-2 pr-3 pl-5"> حمایت ها</li>
                            <li className="py-2 pr-3 pl-5"> اضافه کردن آرزو</li>
                            <li className="py-2 pr-3 pl-5">تنظیمات</li>
                        </ul>
                    </Col>
                    <Col lg={7}>

                        <h3 className="title text-right"> داشبورد </h3>
                        <div className={`d-flex justify-content-between mb-5 ${styles['dreams-status']}`}>
                            <div>

                                <span>۲۱</span>
                                 آرزو</div>
                            <div>

                                <span>۱۰ </span>
                                آرزوی برآورده شده</div>
                            <div>

                                <span>۵ </span>
                                آرزوی برآورده نشده</div>
                        </div>
                        <div className={styles.chart}>

                        </div>

                        <div className="text-right">
                            <p className="mb-2 mt-4">آرزو های اخیر</p>
                            <div className={styles.lastDreams}>
                                <div className="d-flex align-items-center justify-content-around py-2 mb-1">

                                    <img src="https://www.flaticon.com/svg/vstatic/svg/2919/2919906.svg?token=exp=1613062009~hmac=c45fa02f3bb58a44ebaeccc59e21c04a" alt="" />

                                    <span>النا</span>
                                    <span>title</span>
                                    <span>اسکیت</span>
                                    <progress id="file" max="100" value="70" dir="rtl"> 70% </progress>
                                </div>
                                <div className="d-flex align-items-center justify-content-around py-2 mb-1">

                                    <img src="https://www.flaticon.com/svg/vstatic/svg/2919/2919906.svg?token=exp=1613062009~hmac=c45fa02f3bb58a44ebaeccc59e21c04a" alt="" />

                                    <span>النا</span>
                                    <span>title</span>
                                    <span>اسکیت</span>
                                    <progress id="file" max="100" value="70" dir="rtl"> 70% </progress>
                                </div>
                                <div className="d-flex align-items-center justify-content-around py-2 mb-1">

                                    <img src="https://www.flaticon.com/svg/vstatic/svg/2919/2919906.svg?token=exp=1613062009~hmac=c45fa02f3bb58a44ebaeccc59e21c04a" alt="" />

                                    <span>النا</span>
                                    <span>title</span>
                                    <span>اسکیت</span>
                                    <progress id="file" max="100" value="70" dir="rtl"> 70% </progress>
                                </div>

                            </div>

                        </div>




                    </Col>
                </Row>

            </Container>
        </div>
    )
}
