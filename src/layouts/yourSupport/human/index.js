
//component
import Button from '../../../components/Button'

//styles
import styles from './styles/human.module.scss'
import { Row, Col } from 'react-bootstrap'

function HumanHelp(props) {

    return (
        <section>
            <div className={` my-lg-5 my-3 ${styles.header}`}>
                <h3 className={`text-center mb-2 pb-0`}>راه های کمک</h3>
                <p className="text-center">شما عزیزان به عنوان فرد میتوانید از راه های زیر به کودکان کمک کنی</p>
            </div>
            <Row className="justify-content-between align-items-center">

                <Col lg="6" className={`text-right mt-4 ${styles.rightContent}`}>
                    <h4>اهدای کمک های غیرنقدی</h4>
                    <p>خیرین محترم می­‌توانند با مراجعه به خیریه هدایای غیرنقدی و اجناس اهدایی خود را شامل: لوازم التحریر، پوشاک، خواروبار و مواد بهداشتی، مواد شوینده، میوه و سبزیجات، مواد پروتئینی و لبنی و غیره را دراختیار مسئولین قرار دهند تا این هدایا به دست کودکان یا خانواده‌­های نیازمند رسانده شود در اینگونه موارد بهتر است از قبل با خیریه هماهنگی لازم به عمل آید.
                     </p>
                </Col>
                <Col lg="6" sm={12}>
                    <div className={`${styles['nocash-help-section']} m-auto`} >
                        <Button>
                            میخوام کمک کنم
                        </Button>

                        <img className={styles['svg-on-purple']} src="https://opencollective.com/static/images/home/create-collective-bg-illustration-hover.png" alt="" />


                        <img className={styles['svg-off-purple']} src="https://opencollective.com/static/images/home/create-collective-bg-illustration.png" alt="" />


                    </div>

                </Col>
            </Row>
            <Row className="justify-content-between align-items-center">
                <Col lg="6" md={{span:12, order:2}} sm={{order: 2}} xs={{order:2}}>
                    <div className={`${styles['cash-help-section']} m-auto`} >
                        <Button>
                            میخوام کمک کنم
                    </Button>

                        <img className={styles['svg-on-blue']} src="https://opencollective.com/static/images/home/donateButton-bg-withStar.png" alt="" />

                        <img className={styles['svg-off-blue']} src="https://opencollective.com/static/images/home/donateButton-bg.png" alt="" />


                    </div>

                </Col>

                <Col sm={{order: 1, span: 12}} md={{span:12, order:1}} xs={{order:1, span:12}} lg={{span:6 , order:2}} className={`text-right mt-4 ${styles.rightContent}`}>
                    <h4>اهدای کمک های نقدی</h4>
                    <p>
                        نیکوکاران محترم می‌­توانند کمک‌های نقدی خود را به شماره حساب 30200-2211 بانک تجارت شعبه برج آسمان واریز نموده و یا مستقیما به محل مؤسسه مراجعه و کمک‌های خود را تحویل داده و رسید دریافت نمایند.
                            </p>
                </Col>

            </Row>
        </section>
    )
}
export default HumanHelp;