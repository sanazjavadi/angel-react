import React from 'react'

//component
import Hero from '../../layouts/common/Hero'
import Button from '../../components/Button'

//styles
import styles from './styles/Profile.module.scss'

//assets
import ProfileSvg from '../../svg/Profile'

function Profile(props) {


    return (
        <div>
            <Hero />
            <section className={styles.profile}>
                <div className={`d-flex align-items-center justify-content-between px-5 ${styles.user}`}>
                    <div className={`${styles.userInfo} d-flex`}>
                    <span className={styles.profileImg}>
                        <ProfileSvg fill="white" width="25" height="25"/>
                    </span>
                    <div className={`${styles.userName} d-flex flex-column text-right mr-3`}>
                        <span className="font-weight-bold">
                        sanaz javadi
                        </span>
                        <span>
                            sanazjavadi@gmail.com
                        </span>
                    </div>
                    </div>
                  
                    <Button className="mr-auto">
                        ویرایش اطلاعات کاربری
                    </Button>
                </div>
            </section>
        </div>
    )
}

export default Profile;
